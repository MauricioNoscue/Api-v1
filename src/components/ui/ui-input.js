import { LitElement, html } from "lit";

/**
 * Campo de entrada para búsquedas por nombre.
 *
 * Sección de responsabilidad
 * - Captura el texto de búsqueda y lo propaga al componente contenedor.
 *
 * Sección de propiedades
 * - value: valor actual escrito por el usuario.
 *
 * Sección de eventos
 * - Emite on-input-change con el valor actual en detail.
 *
 * Sección de render
 * - Renderiza un input tipo texto con estilos Bootstrap.
 */
export class UiInput extends LitElement {

  static properties = {
    value: { type: String }
  };

  constructor() {
    super();
    this.value = "";
  }

  createRenderRoot() {
    return this; 
  }

  /**
   * Actualiza value y emite el evento de cambio para el contenedor.
   */
  handleInput(e) {
    this.value = e.target.value;

    this.dispatchEvent(
      new CustomEvent("on-input-change", {
        detail: this.value,
        bubbles: true,
        composed: true
      })
    );
  }

  /**
   * Renderiza el control de búsqueda.
   */
  render() {
    return html`
      <input
        type="text"
        class="form-control input-api"
        placeholder="Busca tu personaje"
        .value=${this.value}
        @input=${this.handleInput}
      />
    `;
  }
}

customElements.define("ui-input", UiInput);