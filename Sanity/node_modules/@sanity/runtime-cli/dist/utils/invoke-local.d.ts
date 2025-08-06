import type { FunctionResource, GroqRule, InvocationResponse, InvokeContextOptions, InvokeExecutionOptions } from './types.js';
export declare function sanitizeLogs(logs: string): string;
export declare const DEFAULT_GROQ_RULE: {
    on: string[];
    filter: string;
    projection: string;
};
export declare function isDefaultGROQRule(rule: GroqRule | undefined): boolean;
export declare function applyGroqRule(resource: FunctionResource, data: Record<string, unknown> | null): Promise<any>;
export default function invoke(resource: FunctionResource, data: Record<string, unknown> | null, context: InvokeContextOptions, options: InvokeExecutionOptions): Promise<InvocationResponse>;
