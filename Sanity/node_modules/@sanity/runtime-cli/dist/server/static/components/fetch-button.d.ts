export class FetchButton extends ApiBaseElement {
    connectedCallback(): void;
    button: HTMLButtonElement | null | undefined;
    disconnectedCallback(): void;
    fetchDoc: () => Promise<void>;
}
import { ApiBaseElement } from './api-base.js';
