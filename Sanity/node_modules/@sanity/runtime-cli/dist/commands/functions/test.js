import { Args, Flags } from '@oclif/core';
import { BlueprintCommand } from '../../baseCommands.js';
import { functionTestCore } from '../../cores/functions/test.js';
export default class TestCommand extends BlueprintCommand {
    static args = {
        name: Args.string({ description: 'The name of the Sanity Function', required: true }),
    };
    static description = 'Invoke a local Sanity Function';
    static examples = [
        `<%= config.bin %> <%= command.id %> <name> --data '{ "id": 1 }'`,
        `<%= config.bin %> <%= command.id %> <name> --file 'payload.json'`,
        `<%= config.bin %> <%= command.id %> <name> --data '{ "id": 1 }' --timeout 60`,
    ];
    static flags = {
        data: Flags.string({
            char: 'd',
            description: 'Data to send to the function',
            exclusive: ['file', 'document-id'],
            required: false,
        }),
        file: Flags.string({
            char: 'f',
            description: 'Read data from file and send to the function',
            exclusive: ['data', 'document-id'],
            required: false,
        }),
        timeout: Flags.integer({
            char: 't',
            description: 'Execution timeout value in seconds',
            required: false,
        }),
        api: Flags.string({
            char: 'a',
            description: 'Sanity API Version to use',
            required: false,
        }),
        dataset: Flags.string({
            description: 'The Sanity dataset to use',
            required: false,
        }),
        'project-id': Flags.string({
            description: 'Sanity Project ID to use',
            aliases: ['project', 'projectId'],
            required: false,
        }),
        'document-id': Flags.string({
            description: 'Document to fetch and send to function',
            aliases: ['doc', 'documentId'],
            exclusive: ['data', 'file'],
            required: false,
        }),
        'with-user-token': Flags.boolean({
            description: 'Prime access token from CLI config',
            default: false,
        }),
    };
    async run() {
        const { success, error } = await functionTestCore({
            bin: this.config.bin,
            log: (msg) => this.log(msg),
            args: this.args,
            flags: this.flags,
            blueprint: this.blueprint,
        });
        if (!success)
            this.error(error);
    }
}
