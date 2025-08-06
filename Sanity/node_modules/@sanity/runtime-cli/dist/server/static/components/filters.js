class FiltersComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <form style="gap: 8px; padding-left: var(--space-3); padding-bottom: var(--space-3); border-bottom: 1px solid var(--card-border-color);">
          <fieldset style="display: flex; gap: var(--space-2);">
            <legend class="config-label">Client Options</legend>
            <select-dropdown
              label="Project"
              store-key="projects"
              selected-key="selectedProject"
              value-prop="id"
              label-prop="displayName"
              trigger-fetch
            ></select-dropdown>
            <select-dropdown
              label="Dataset"
              store-key="datasets"
              selected-key="selectedDataset"
              value-prop="name"
              label-prop="name"
              subscribe-to="selectedProject"
            ></select-dropdown>
            <fieldset class="mar-t-sm">
                <label class="slab-text">
                  <span style="display: block; margin-bottom: var(--space-1);">API Version</span>
                  <input name="apiVersion" id="apiversion" style="background: transparent; border-color: light-dark(var(--gray-200), var(--gray-700)); height: 2.5rem; color: light-dark(var(--gray-950), var(--gray-300));">
                </label>
            </fieldset>

            <fieldset class="mar-t-sm" style="display: flex; flex-direction: column; margin-top: 12px !important;">
                <span class="slab-text" style="display: block; margin-bottom: var(--space-1);">With Token</span>
                <toggle-switch toggle-key="withToken" style="display: flex; height: 2.5rem;"></toggle-switch>
            </fieldset>

            <fieldset class="mar-t-sm" style="margin-top: 12px !important;">
                <label class="slab-text">
                  <span style="display: block; margin-bottom: var(--space-1);">
                    <span style="display: flex; align-items: center;">Document ID <help-button></help-button></span>
                  </span>
                  <div style="display: flex; flex-direction: row; gap: var(--space-2);">
                    <input name="docid" id="docid" style="background: transparent; border-color: light-dark(var(--gray-200), var(--gray-700)); height: 2.5rem; color: light-dark(var(--gray-950), var(--gray-300));">
                    <fetch-button></fetch-button>
                  </div>
                </label>
            </fieldset>

          </form>
        `
  }
}

customElements.define('filters-component', FiltersComponent)
