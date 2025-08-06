import config from '../../config.js';
import getHeaders from '../../utils/get-headers.js';
const { apiUrl } = config;
export const stacksUrl = `${apiUrl}vX/blueprints/stacks`;
function hasParameters(obj) {
    return (typeof obj === 'object' &&
        obj !== null &&
        'parameters' in obj &&
        typeof obj.parameters === 'object' &&
        obj.parameters !== null);
}
function flattenResource(resource) {
    if (hasParameters(resource)) {
        const { parameters, ...rest } = resource;
        return { ...rest, ...parameters };
    }
    return resource;
}
function flattenStackResources(stack) {
    if (stack && Array.isArray(stack.resources)) {
        return {
            ...stack,
            resources: stack.resources.map(flattenResource),
        };
    }
    return stack;
}
export async function listStacks(auth) {
    const response = await fetch(stacksUrl, {
        method: 'GET',
        headers: getHeaders(auth),
    });
    const data = await response.json();
    return {
        ok: response.ok,
        error: response.ok ? null : data.message,
        stacks: response.ok ? data.map(flattenStackResources) : data,
    };
}
export async function getStack({ stackId, auth, }) {
    const response = await fetch(`${stacksUrl}/${stackId}`, {
        method: 'GET',
        headers: getHeaders(auth),
    });
    const data = await response.json();
    return {
        ok: response.ok,
        error: response.ok ? null : data.message,
        stack: response.ok ? flattenStackResources(data) : data,
    };
}
export async function createStack({ stackMutation, auth, }) {
    const response = await fetch(stacksUrl, {
        method: 'POST',
        headers: getHeaders(auth),
        body: JSON.stringify(stackMutation),
    });
    const data = await response.json();
    return {
        ok: response.ok,
        error: response.ok ? null : data.message,
        stack: response.ok ? flattenStackResources(data) : data,
    };
}
export async function createEmptyStack({ token, projectId, name, projectBased = true, }) {
    const stackMutation = {
        name,
        projectId,
        useProjectBasedId: projectBased,
        document: { resources: [] },
    };
    const auth = { token, projectId };
    const response = await createStack({ stackMutation, auth });
    if (!response.ok) {
        throw new Error(response.error || 'Failed to create new Stack');
    }
    return flattenStackResources(response.stack);
}
export async function updateStack({ stackId, stackMutation, auth, }) {
    const response = await fetch(`${stacksUrl}/${stackId}`, {
        method: 'PUT',
        headers: getHeaders(auth),
        body: JSON.stringify(stackMutation),
    });
    const data = await response.json();
    return {
        ok: response.ok,
        error: response.ok ? null : data.message,
        stack: response.ok ? flattenStackResources(data) : data,
    };
}
export async function destroyStack({ stackId, auth, }) {
    const response = await fetch(`${stacksUrl}/${stackId}`, {
        method: 'DELETE',
        headers: getHeaders(auth),
    });
    const data = await response.json();
    return {
        ok: response.ok,
        error: response.ok ? null : data.message,
        stack: response.ok ? flattenStackResources(data) : data,
    };
}
