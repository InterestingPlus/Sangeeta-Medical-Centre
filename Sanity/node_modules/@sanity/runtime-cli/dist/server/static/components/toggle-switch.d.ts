export class ToggleSwitch extends ApiBaseElement {
    static get observedAttributes(): string[];
    connectedCallback(): void;
    toggleKey: string | null | undefined;
    disconnectedCallback(): void;
    attributeChangedCallback(name: any): void;
    set checked(value: boolean);
    get checked(): boolean;
    toggle: () => void;
}
import { ApiBaseElement } from './api-base.js';
