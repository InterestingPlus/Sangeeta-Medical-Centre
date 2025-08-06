import { createClient } from '@sanity/client';
import ora from 'ora';
export async function fetchDocument(documentId, { projectId, dataset, useCdn = true, apiVersion = '2025-02-06', apiHost, token }) {
    const spinner = ora(`Fetching document ID ${documentId}...`).start();
    const client = createClient({ projectId, dataset, useCdn, apiVersion, apiHost, token });
    const data = await client.fetch(`*[_id == "${documentId}"]`);
    spinner.stop();
    return data[0] ? data[0] : undefined;
}
