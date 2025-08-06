export class ApiBaseElement extends HTMLElement {
    api: {
        blueprint: () => void;
        document: ({ projectId, dataset, docId }: {
            projectId: any;
            dataset: any;
            docId: any;
        }) => Promise<void>;
        invoke: (payloadText?: string) => void;
        projects: () => void;
        datasets: (selectedProject: any) => void;
        store: any;
        subscribe: any;
        unsubscribe: any;
    };
}
