import type { DeployedResource, FunctionResource, LocalBlueprint, Stack } from './types.js';
export declare function findFunctionByName(blueprintOrStack: LocalBlueprint, name: string): FunctionResource;
export declare function findFunctionByName(blueprintOrStack: Stack, name: string): FunctionResource & DeployedResource;
export declare function getFunctionSource(blueprintOrStack: LocalBlueprint | Stack, name: string): string;
