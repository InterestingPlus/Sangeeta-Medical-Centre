import { existsSync, mkdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { basename, dirname, extname, join } from 'node:path';
import { cwd, env } from 'node:process';
import { findUpSync } from 'find-up';
import { createJiti } from 'jiti';
import { BLUEPRINT_CONFIG_FILE, BLUEPRINT_CONFIG_VERSION, BLUEPRINT_DIR } from '../../config.js';
import { getLatestNpmVersion } from '../../utils/other/npmjs.js';
import { isLocalFunctionResource } from '../../utils/types.js';
import { validateFunctionResource } from '../../utils/validate/resource.js';
import { blueprintParserValidator } from '../../utils/vendor/parser-validator.js';
export { BLUEPRINT_CONFIG_FILE, BLUEPRINT_CONFIG_VERSION, BLUEPRINT_DIR } from '../../config.js';
const SUPPORTED_FILE_EXTENSIONS = ['.json', '.js', '.mjs', '.ts'];
let SUPPORTED_FILE_NAMES = SUPPORTED_FILE_EXTENSIONS.map((ext) => `blueprint${ext}`);
SUPPORTED_FILE_NAMES = [
    ...SUPPORTED_FILE_NAMES,
    ...SUPPORTED_FILE_NAMES.map((name) => `sanity.${name}`),
];
export const JSON_BLUEPRINT_CONTENT = {
    blueprintVersion: '2024-10-01',
    resources: [],
};
export const TS_BLUEPRINT_CONTENT = `import {defineBlueprint, defineDocumentFunction} from '@sanity/blueprints'

export default defineBlueprint({
  resources: [
    // defineDocumentFunction({name: 'my-function'}),
  ],
})
`;
export const GITIGNORE_FOR_FUNCTIONS = `
# Sanity Functions
functions/**/.env*
functions/**/.build/
functions/**/node_modules/
`;
export const GITIGNORE_TEMPLATE = `node_modules
.env
${GITIGNORE_FOR_FUNCTIONS}
`;
/**
 * Finds the blueprint file in the given path or current working directory
 * @param blueprintPath - The path of the blueprint file or directory
 * @returns The path, file name, and extension of the blueprint file
 */
export function findBlueprintFile(blueprintPath) {
    let dirToSearch = cwd();
    if (blueprintPath) {
        const pathExists = existsSync(blueprintPath);
        if (!pathExists)
            return null;
        const stat = statSync(blueprintPath);
        if (stat.isFile()) {
            return {
                blueprintFilePath: blueprintPath,
                fileName: basename(blueprintPath),
                extension: extname(blueprintPath),
            };
        }
        if (stat.isDirectory()) {
            dirToSearch = blueprintPath;
        }
    }
    const blueprintFile = findUpSync(SUPPORTED_FILE_NAMES, {
        cwd: dirToSearch,
        type: 'file',
        allowSymlinks: false,
    });
    if (!blueprintFile)
        return null;
    return {
        blueprintFilePath: blueprintFile,
        fileName: basename(blueprintFile),
        extension: extname(blueprintFile),
    };
}
/**
 * Reads the blueprint file from disk and parses it. Greedily looks for project and stack config
 * @param blueprintPath - The path of the blueprint file or directory- will search up the directory tree!
 * @returns Known information about the Blueprint, config, and Stack
 */
export async function readLocalBlueprint(blueprintPath) {
    const blueprintFile = findBlueprintFile(blueprintPath);
    if (!blueprintFile)
        throw Error('Could not find Blueprint file! Use the init command.');
    const { blueprintFilePath: foundFilePath, fileName, extension } = blueprintFile;
    let rawBlueprint;
    let blueprintModule;
    try {
        switch (extension) {
            case '.json': {
                const blueprintString = readFileSync(foundFilePath, 'utf8').toString();
                rawBlueprint = JSON.parse(blueprintString);
                break;
            }
            case '.js':
            case '.mjs': {
                const module = await import(foundFilePath);
                blueprintModule = module.default;
                break;
            }
            case '.ts': {
                const jiti = createJiti(dirname(foundFilePath));
                const modDefault = await jiti.import(`file://${foundFilePath}`, { default: true });
                blueprintModule = modDefault;
                break;
            }
            default:
                throw Error(`Unsupported blueprint file extension: ${extension}`);
        }
    }
    catch (err) {
        throw Error(`Unable to parse Blueprint file: ${fileName}\n${err}`);
    }
    let moduleProjectId;
    let moduleStackId;
    if (blueprintModule) {
        if (typeof blueprintModule === 'function') {
            try {
                moduleProjectId = blueprintModule.projectId;
                moduleStackId = blueprintModule.stackId;
                rawBlueprint = blueprintModule();
            }
            catch {
                throw Error(`Error executing Blueprint file: ${fileName}`);
            }
        }
        else {
            throw Error(`Blueprint ${fileName} must export a default function`);
        }
    }
    const parserResult = blueprintParserValidator(rawBlueprint);
    const parsedBlueprint = parserResult.blueprint;
    const errors = parserResult.errors || [];
    // further validation - remove once validator is updated
    if (parsedBlueprint.resources) {
        // validate function resources
        const functionResources = parsedBlueprint.resources.filter(isLocalFunctionResource);
        const fnErrors = functionResources.map((r) => validateFunctionResource(r));
        errors.push(...fnErrors.flat());
    }
    const { SANITY_PROJECT_ID: envProjectId, SANITY_BLUEPRINT_STACK_ID: envStackId } = env;
    const configIds = readConfigFile(foundFilePath);
    const configPath = configIds?.configPath;
    let projectId;
    if (envProjectId)
        projectId = envProjectId;
    else if (moduleProjectId)
        projectId = moduleProjectId;
    else if (configIds?.projectId)
        projectId = configIds.projectId;
    let stackId;
    if (envStackId)
        stackId = envStackId;
    else if (moduleStackId)
        stackId = moduleStackId;
    else if (configIds?.stackId)
        stackId = configIds.stackId;
    // LAUNCH LIMIT: 1 Stack per Project - infer stackId from projectId
    if (!stackId && projectId)
        stackId = `ST-${projectId}`;
    return {
        fileInfo: { blueprintFilePath: foundFilePath, fileName, extension },
        rawBlueprint: rawBlueprint,
        errors,
        projectId,
        stackId,
        configPath,
        parsedBlueprint,
    };
}
export function writeBlueprintToDisk({ blueprintFilePath, jsonContent = JSON_BLUEPRINT_CONTENT, }) {
    const dir = dirname(blueprintFilePath);
    const extension = extname(blueprintFilePath);
    let blueprintContent;
    switch (extension) {
        case '.json': {
            blueprintContent = JSON.stringify(jsonContent, null, 2);
            break;
        }
        case '.js':
        case '.mjs':
        case '.ts': {
            blueprintContent = TS_BLUEPRINT_CONTENT;
            break;
        }
        default: {
            throw Error(`Unsupported blueprint file extension: ${extension}`);
        }
    }
    mkdirSync(dir, { recursive: true });
    writeFileSync(blueprintFilePath, blueprintContent);
    return blueprintContent;
}
export async function writeOrUpdateNodeDependency({ blueprintFilePath, dependency, }) {
    const dir = dirname(blueprintFilePath);
    const extension = extname(blueprintFilePath);
    if (extension === '.json')
        return;
    const version = await getLatestNpmVersion(dependency);
    const packageJsonPath = join(dir, 'package.json');
    const packageExists = existsSync(packageJsonPath);
    if (!packageExists) {
        writeFileSync(packageJsonPath, JSON.stringify({ type: 'module', devDependencies: { [dependency]: version } }, null, 2));
        return;
    }
    const packageJson = readFileSync(packageJsonPath, 'utf8');
    let packageJsonObject;
    try {
        packageJsonObject = JSON.parse(packageJson);
    }
    catch (err) {
        throw Error(`Unable to parse package.json: ${err}`);
    }
    const allDependencies = { ...packageJsonObject.dependencies, ...packageJsonObject.devDependencies };
    if (allDependencies[dependency])
        return;
    packageJsonObject.devDependencies = packageJsonObject.devDependencies || {};
    packageJsonObject.devDependencies[dependency] = version;
    writeFileSync(packageJsonPath, JSON.stringify(packageJsonObject, null, 2));
}
export function readConfigFile(blueprintFilePath) {
    if (blueprintFilePath) {
        const blueprintDir = dirname(blueprintFilePath);
        const configPath = join(blueprintDir, BLUEPRINT_DIR, BLUEPRINT_CONFIG_FILE);
        if (existsSync(configPath)) {
            try {
                const config = JSON.parse(readFileSync(configPath, 'utf8'));
                return { configPath, ...config };
            }
            catch (err) {
                return null;
            }
        }
    }
    const configFilePath = join(cwd(), BLUEPRINT_DIR, BLUEPRINT_CONFIG_FILE);
    if (!existsSync(configFilePath))
        return null;
    try {
        const config = JSON.parse(readFileSync(configFilePath, 'utf8'));
        return config || null;
    }
    catch (err) {
        return null;
    }
}
export function writeConfigFile({ blueprintFilePath, projectId, stackId, }) {
    const blueprintDir = blueprintFilePath ? dirname(blueprintFilePath) : cwd();
    const configDir = join(blueprintDir, BLUEPRINT_DIR);
    const configPath = join(configDir, BLUEPRINT_CONFIG_FILE);
    if (!existsSync(configDir)) {
        mkdirSync(configDir, { recursive: true });
    }
    let config = {};
    if (existsSync(configPath)) {
        try {
            config = JSON.parse(readFileSync(configPath, 'utf8'));
        }
        catch (err) {
            // config broken, start fresh
        }
    }
    config.projectId = projectId;
    config.stackId = stackId;
    config.blueprintConfigVersion = BLUEPRINT_CONFIG_VERSION;
    config.updatedAt = Date.now();
    writeFileSync(configPath, JSON.stringify(config, null, 2));
}
export function writeGitignoreFile({ blueprintFilePath, }) {
    const blueprintDir = blueprintFilePath ? dirname(blueprintFilePath) : cwd();
    const gitignorePath = join(blueprintDir, '.gitignore');
    const gitignoreExists = existsSync(gitignorePath);
    let content = GITIGNORE_TEMPLATE;
    if (gitignoreExists) {
        // append GITIGNORE_FOR_FUNCTIONS to existing .gitignore
        const existingContent = readFileSync(gitignorePath, 'utf8').toString();
        if (existingContent.includes(GITIGNORE_FOR_FUNCTIONS))
            return null;
        content = `${existingContent}\n${GITIGNORE_FOR_FUNCTIONS}`;
    }
    writeFileSync(gitignorePath, content);
    return content;
}
export function addResourceToBlueprint({ blueprintFilePath, resource, }) {
    const blueprintFile = findBlueprintFile(blueprintFilePath);
    if (!blueprintFile)
        throw Error('Could not find Blueprint file');
    const { blueprintFilePath: foundPath, extension } = blueprintFile;
    // modify .json files directly
    if (extension === '.json') {
        const blueprintString = readFileSync(foundPath, 'utf8').toString();
        const blueprint = JSON.parse(blueprintString);
        blueprint.resources = blueprint.resources || [];
        blueprint.resources.push(resource);
        writeFileSync(foundPath, JSON.stringify(blueprint, null, 2));
        return;
    }
    return resource;
}
export function updateBlueprintMetadata({ blueprintFilePath, metadata, }) {
    const blueprintFile = findBlueprintFile(blueprintFilePath);
    if (!blueprintFile)
        throw Error('Could not find Blueprint file');
    const { blueprintFilePath: foundPath, extension } = blueprintFile;
    if (extension === '.json') {
        const blueprintString = readFileSync(foundPath, 'utf8').toString();
        const blueprint = JSON.parse(blueprintString);
        blueprint.metadata = blueprint.metadata || {};
        blueprint.metadata = { ...blueprint.metadata, ...metadata };
        writeFileSync(foundPath, JSON.stringify(blueprint, null, 2));
    }
}
export function updateBlueprintValues({ blueprintFilePath, values, }) {
    const blueprintFile = findBlueprintFile(blueprintFilePath);
    if (!blueprintFile)
        throw Error('Could not find Blueprint file');
    const { blueprintFilePath: foundPath, extension } = blueprintFile;
    if (extension === '.json') {
        const blueprintString = readFileSync(foundPath, 'utf8').toString();
        const blueprint = JSON.parse(blueprintString);
        blueprint.values = blueprint.values || {};
        blueprint.values = { ...blueprint.values, ...values };
        writeFileSync(foundPath, JSON.stringify(blueprint, null, 2));
    }
}
