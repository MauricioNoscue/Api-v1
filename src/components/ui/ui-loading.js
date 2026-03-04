import { html, LitElement } from "lit";

/**
 * Estado visual de carga.
 *
 * Sección de responsabilidad
 * - Presenta un spinner cuando la aplicación está en proceso.
 * - Puede renderizarse en modo normal o pantalla completa.
 *
 * Sección de eventos
 * - No emite ni escucha eventos.
 *
 * Sección de render
 * - Renderiza un spinner con etiqueta accesible.
 */
export class UiLoading extends LitElement {
  static properties = {
    fullscreen: { type: Boolean },
  };

  constructor() {
    super();
    this.fullscreen = false;
  }

  createRenderRoot() {
    return this;
  }

    /**
     * Renderiza el indicador de carga.
     */
  render() {
    const className = this.fullscreen
      ? "app-loading app-loading--fullscreen"
      : "app-loading";

    return html`
      <div class=${className} role="status" aria-live="polite" aria-label="loading">
        <span class="app-loading__spinner" aria-hidden="true"></span>
        <span>Cargando...</span>
      </div>
    `;
  }
}

customElements.define("ui-loading", UiLoading);