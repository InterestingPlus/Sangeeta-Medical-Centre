import type { BlueprintParserError, LocalBlueprint, Resource } from '../../utils/types.js';
export { BLUEPRINT_CONFIG_FILE, BLUEPRINT_CONFIG_VERSION, BLUEPRINT_DIR } from '../../config.js';
declare const SUPPORTED_FILE_EXTENSIONS: readonly [".json", ".js", ".mjs", ".ts"];
type BlueprintFileExtension = (typeof SUPPORTED_FILE_EXTENSIONS)[number];
export declare const JSON_BLUEPRINT_CONTENT: {
    blueprintVersion: string;
    resources: never[];
};
export declare const TS_BLUEPRINT_CONTENT = "import {defineBlueprint, defineDocumentFunction} from '@sanity/blueprints'\n\nexport default defineBlueprint({\n  resources: [\n    // defineDocumentFunction({name: 'my-function'}),\n  ],\n})\n";
export declare const GITIGNORE_FOR_FUNCTIONS = "\n# Sanity Functions\nfunctions/**/.env*\nfunctions/**/.build/\nfunctions/**/node_modules/\n";
export declare const GITIGNORE_TEMPLATE = "node_modules\n.env\n\n# Sanity Functions\nfunctions/**/.env*\nfunctions/**/.build/\nfunctions/**/node_modules/\n\n";
export type BlueprintModule = ((args?: unknown) => Record<string, unknown>) & {
    organizationId?: string;
    projectId?: string;
    stackId?: string;
};
/**
 * Finds the blueprint file in the given path or current working directory
 * @param blueprintPath - The path of the blueprint file or directory
 * @returns The path, file name, and extension of the blueprint file
 */
export declare function findBlueprintFile(blueprintPath?: string): {
    blueprintFilePath: string;
    fileName: string;
    extension: BlueprintFileExtension;
} | null;
/**
 * Result of the blueprint read operation
 */
export interface ReadBlueprintResult {
    fileInfo: {
        blueprintFilePath: string;
        fileName: string;
        extension: string;
    };
    rawBlueprint: LocalBlueprint;
    parsedBlueprint: LocalBlueprint;
    errors: BlueprintParserError[];
    configPath?: string;
    projectId?: string;
    stackId?: string;
}
/**
 * Reads the blueprint file from disk and parses it. Greedily looks for project and stack config
 * @param blueprintPath - The path of the blueprint file or directory- will search up the directory tree!
 * @returns Known information about the Blueprint, config, and Stack
 */
export declare function readLocalBlueprint(blueprintPath?: string): Promise<ReadBlueprintResult>;
export declare function writeBlueprintToDisk({ blueprintFilePath, jsonContent, }: {
    blueprintFilePath: string;
    jsonContent?: LocalBlueprint;
}): string;
export declare function writeOrUpdateNodeDependency({ blueprintFilePath, dependency, }: {
    blueprintFilePath: string;
    dependency: string;
}): Promise<void>;
export declare function readConfigFile(blueprintFilePath?: string | undefined): {
    configPath?: string;
    projectId?: string;
    stackId?: string;
} | null;
export declare function writeConfigFile({ blueprintFilePath, projectId, stackId, }: {
    blueprintFilePath?: string;
    projectId: string;
    stackId?: string;
}): void;
export declare function writeGitignoreFile({ blueprintFilePath, }: {
    blueprintFilePath: string;
}): string | null;
export declare function addResourceToBlueprint({ blueprintFilePath, resource, }: {
    blueprintFilePath?: string;
    resource: Resource;
}): Resource | undefined;
export declare function updateBlueprintMetadata({ blueprintFilePath, metadata, }: {
    blueprintFilePath?: string;
    metadata: LocalBlueprint['metadata'];
}): void;
export declare function updateBlueprintValues({ blueprintFilePath, values, }: {
    blueprintFilePath: string;
    values: LocalBlueprint['values'];
}): void;
