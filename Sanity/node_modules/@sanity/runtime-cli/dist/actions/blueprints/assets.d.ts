import type { AuthParams, FunctionResource } from '../../utils/types.js';
export declare const stashUrl: string;
export declare function stashAsset({ resource, auth, }: {
    resource: FunctionResource;
    auth: AuthParams;
}): Promise<{
    success: boolean;
    assetId?: string;
    outputPath?: string;
    error?: string;
}>;
