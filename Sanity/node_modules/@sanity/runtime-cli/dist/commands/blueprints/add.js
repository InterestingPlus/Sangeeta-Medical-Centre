import { Args, Flags } from '@oclif/core';
import { BlueprintCommand } from '../../baseCommands.js';
import { blueprintAddCore } from '../../cores/blueprints/index.js';
export default class AddCommand extends BlueprintCommand {
    static description = 'Add a Resource to a Blueprint';
    static examples = [
        '<%= config.bin %> <%= command.id %> function',
        '<%= config.bin %> <%= command.id %> function --helpers',
        '<%= config.bin %> <%= command.id %> function --name my-function',
        '<%= config.bin %> <%= command.id %> function --name my-function --fn-type document-publish',
        '<%= config.bin %> <%= command.id %> function --name my-function --fn-type document-publish --lang js',
    ];
    static args = {
        type: Args.string({
            description: 'Type of Resource to add (e.g. function)',
            options: ['function'],
            required: true,
        }),
    };
    static flags = {
        example: Flags.string({
            description: 'Example to use for the Resource',
            aliases: ['recipe'],
            exclusive: ['name', 'fn-type', 'fn-language', 'javascript', 'fn-helpers', 'fn-installer'], // set automatically
        }),
        name: Flags.string({
            description: 'Name of the Resource to add',
            char: 'n',
        }),
        'fn-type': Flags.string({
            description: 'Type of new Function',
            options: ['document-publish' /*, 'document-create', 'document-delete'*/],
            aliases: ['function-type'],
            dependsOn: ['name'],
        }),
        'fn-language': Flags.string({
            description: 'Language of the new Function',
            aliases: ['function-language', 'language', 'lang'],
            options: ['ts', 'js'],
            default: 'ts',
        }),
        javascript: Flags.boolean({
            description: 'Use JavaScript instead of TypeScript',
            aliases: ['js'],
        }),
        'fn-helpers': Flags.boolean({
            description: 'Add helpers to the new Function',
            aliases: ['function-helpers', 'helpers'],
            // default: true, // ask. for now
            allowNo: true,
        }),
        'fn-installer': Flags.string({
            description: 'How to install the @sanity/functions helpers',
            aliases: ['function-installer', 'installer'],
            options: ['skip', 'npm', 'pnpm', 'yarn'],
        }),
        install: Flags.boolean({
            description: 'Shortcut for --fn-installer npm',
            char: 'i',
            exclusive: ['fn-installer'],
        }),
    };
    async run() {
        const { success, error } = await blueprintAddCore({
            bin: this.config.bin,
            log: (msg) => this.log(msg),
            blueprint: this.blueprint,
            args: this.args,
            flags: this.flags,
        });
        if (!success)
            this.error(error);
    }
}
