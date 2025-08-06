declare const app: (port: number) => void;
declare function parseDocumentUrl(url: string): {
    projectId: string;
    dataset: string;
    docId: string;
} | null;
declare function buildApiUrl(projectId: string, dataset: string, docId: string, apiUrl: string): string;
export { app, parseDocumentUrl, buildApiUrl };
