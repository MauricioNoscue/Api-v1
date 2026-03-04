import { LitElement, html } from "lit";

/**
 * Botón reutilizable para acciones de búsqueda.
 *
 * Sección de responsabilidad
 * - Expone un botón parametrizable por tipo de acción.
 *
 * Sección de propiedades
 * - label: texto visible del botón.
 * - type: define la acción (search | all).
 *
 * Sección de eventos
 * - Emite on-search-click cuando type es search.
 * - Emite on-show-all-click cuando type es all.
 *
 * Sección de render
 * - Renderiza botón Bootstrap primario o secundario según type.
 */
export class UiButton extends LitElement {

  static properties = {
    label: { type: String },
    type: { type: String }
  };

  createRenderRoot() {
    return this;
  }

  /**
   * Resuelve y emite el evento asociado al tipo de botón.
   */
  handleClick() {

    let eventName = "";

    if (this.type === "search") {
      eventName = "on-search-click";
    }

    if (this.type === "all") {
      eventName = "on-show-all-click";
    }

    this.dispatchEvent(
      new CustomEvent(eventName, {
        bubbles: true,
        composed: true
      })
    );
  }

  /**
   * Renderiza el botón de acción.
   */
  render() {
    const buttonClass = this.type === "search" ? "btn btn-primary" : "btn btn-outline-light";

    return html`
      <button
        type="button"
        class=${buttonClass}
        @click=${this.handleClick}
      >
        ${this.label}
      </button>
    `;
  }
}

customElements.define("ui-button", UiButton);