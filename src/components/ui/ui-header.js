import { LitElement, css, html } from "lit";

/**
 * Encabezado visual de la aplicación.
 *
 * Sección de responsabilidad
 * - Presenta el título principal del módulo.
 *
 * Sección de propiedades
 * - title: texto visible en el encabezado.
 *
 * Sección de eventos
 * - No emite ni escucha eventos.
 *
 * Sección de render
 * - Devuelve un bloque semántico header con el título.
 */
export class UiHeader extends LitElement {
  static properties = {
    title: { type: String },
  };

  static styles = css`
    .header-container {
      background-color: #202329;
      justify-content: flex-start;
      align-items: center;
      display: flex;
      width: 100%;
      min-height: 110px;
      border-radius: 12px;
      padding: 0 20px;
    }

    h1 {
      font-weight: bold;
      font-size: 2rem;
      color: #ffffff;
      margin: 0;
    }
  `;
  
  constructor() {
    super();
    this.title = "The Rick and Morty API";
  }

  /**
   * Construye el encabezado principal.
   */
  render() {
    return html`
      <header class="header-container">
        <h1>${this.title}</h1>
      </header>
    `;
  }
}

customElements.define("ui-header", UiHeader);
