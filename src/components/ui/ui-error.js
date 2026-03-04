import { html, LitElement } from "lit";

/**
 * Estado visual de error.
 *
 * Sección de responsabilidad
 * - Muestra mensajes de error de manera consistente.
 *
 * Sección de propiedades
 * - message: contenido textual del error.
 *
 * Sección de eventos
 * - No emite ni escucha eventos.
 *
 * Sección de render
 * - Renderiza un alert Bootstrap de tipo danger.
 */
export class UiError extends LitElement {


static properties = {
  message: { type: String }
};


  createRenderRoot() {
    return this;
  }

  /**
   * Renderiza el bloque de error.
   */
  render() {
    return html`
      <div class="alert alert-danger" role="alert">
         ${this.message}
      </div>
    `;
  }
}
customElements.define('ui-error',UiError);