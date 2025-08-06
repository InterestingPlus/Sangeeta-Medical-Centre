import ora from 'ora';
import { testAction } from '../../actions/functions/test.js';
import config from '../../config.js';
import buildPayload from '../../utils/build-payload.js';
import { findFunctionByName } from '../../utils/find-function.js';
import { fetchDocument } from '../../utils/functions/fetch-document.js';
export async function functionTestCore(options) {
    const { blueprint, log, args, flags } = options;
    const { name: fnName } = args;
    const { data, file, timeout, api, dataset, 'document-id': documentId, 'with-user-token': withUserToken, } = flags;
    let { 'project-id': projectId } = flags;
    const { parsedBlueprint } = blueprint;
    if (!projectId && blueprint?.projectId) {
        projectId = blueprint.projectId;
    }
    try {
        const resource = findFunctionByName(parsedBlueprint, fnName); // throws if not found
        const contextOptions = {
            clientOptions: {
                apiVersion: api,
                dataset,
                projectId,
            },
        };
        // If the user sets the flag to use the real token set it in our options
        if (withUserToken) {
            contextOptions.clientOptions.token = config.token || undefined;
        }
        const payload = documentId
            ? await fetchDocument(documentId, {
                projectId,
                dataset,
                apiVersion: api,
                apiHost: config.apiUrl,
                token: config.token || undefined,
            })
            : buildPayload({ data, file });
        const invokeOptions = {
            payload,
            timeout: timeout ? timeout : resource.timeout,
        };
        const spinner = ora('Executing function...').start();
        const { json, logs, error } = await testAction(resource, invokeOptions, contextOptions);
        if (error) {
            spinner.fail('Function execution failed.');
            return {
                success: false,
                error: error.toString(),
            };
        }
        spinner.succeed('Function execution succeeded.');
        log('Logs:');
        log(logs || '');
        if (json) {
            log('Response:');
            log(JSON.stringify(json, null, 2));
        }
        return { success: true };
    }
    catch (error) {
        return {
            success: false,
            error: error instanceof Error ? error.message : String(error),
        };
    }
}
