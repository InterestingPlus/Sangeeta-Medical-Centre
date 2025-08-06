import type { LocalBlueprint, Resource, Stack } from '../types.js';
export declare function formatTitle(title: string, name: string): string;
export declare function formatResourceTree(resources: Resource[] | undefined): string;
export declare function formatStackInfo(stack: Stack | LocalBlueprint, isCurrentStack?: boolean): string;
export declare function formatStacksListing(stacks: Stack[], currentStackId?: string): string;
export declare function stackDeployDiff(localBlueprint: LocalBlueprint, deployedStack: Stack): string | null;
