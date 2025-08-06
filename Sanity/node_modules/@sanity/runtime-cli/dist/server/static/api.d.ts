export default function API(): {
    blueprint: typeof blueprint;
    document: typeof document;
    invoke: typeof invoke;
    projects: typeof projects;
    datasets: typeof datasets;
    store: any;
    subscribe: any;
    unsubscribe: any;
};
declare function blueprint(): void;
declare function document({ projectId, dataset, docId }: {
    projectId: any;
    dataset: any;
    docId: any;
}): Promise<void>;
declare function invoke(payloadText?: string): void;
declare function projects(): void;
declare function datasets(selectedProject: any): void;
export {};
