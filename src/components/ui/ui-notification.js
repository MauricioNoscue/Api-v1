import { LitElement, html } from "lit";

/**
 * Mensaje informativo de operación.
 *
 * Sección de responsabilidad
 * - Informa resultados, advertencias o errores de alto nivel.
 *
 * Sección de propiedades
 * - message: texto visible de notificación.
 * - type: severidad visual (success, danger, warning, info).
 *
 * Sección de eventos
 * - No emite ni escucha eventos.
 *
 * Sección de render
 * - Renderiza un alert Bootstrap o no renderiza si no hay mensaje.
 */
export class UiNotification extends LitElement {
  static properties = {
    message: { type: String },
    type: { type: String },
  };

  constructor() {
    super();
    this.message = "";
    this.type = "info";
  }

  createRenderRoot() {
    return this;
  }

  /**
   * Renderiza el bloque de notificación según type.
   */
  render() {
    if (!this.message) {
      return html``;
    }

    const map = {
      success: "alert-success",
      danger: "alert-danger",
      warning: "alert-warning",
      info: "alert-info",
    };

    return html`
      <div class="alert ${map[this.type] || "alert-info"} mb-3" role="alert">
        ${this.message}
      </div>
    `;
  }
}

customElements.define("ui-notification", UiNotification);
