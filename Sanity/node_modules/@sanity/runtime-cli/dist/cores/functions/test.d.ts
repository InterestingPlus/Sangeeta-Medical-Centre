import type { ReadBlueprintResult } from '../../actions/blueprints/blueprint.js';
import type { CoreConfig, CoreResult } from '../index.js';
export interface FunctionTestOptions extends CoreConfig {
    blueprint: ReadBlueprintResult;
    args: {
        name: string;
    };
    flags: {
        data?: string;
        file?: string;
        timeout?: number;
        api?: string;
        dataset?: string;
        'project-id'?: string;
        'document-id'?: string;
        'with-user-token'?: boolean;
    };
}
export declare function functionTestCore(options: FunctionTestOptions): Promise<CoreResult>;
