import { LitElement, css, html } from "lit";

/**
 * Pie de página institucional del módulo.
 *
 * Sección de responsabilidad
 * - Presenta la información de autor y contacto del proyecto.
 *
 * Sección de eventos
 * - No emite ni escucha eventos.
 *
 * Sección de render
 * - Renderiza un bloque de cierre con estilo propio y correo enlazado.
 */
export class UiFooter extends LitElement {
  static styles = css`
    .footer-wrap {
      margin-top: 24px;
      padding: 18px 20px;
      border-radius: 12px;
      background: #202329;
      color: #d6d6d6;
      border: 1px solid #3b3f47;
      display: grid;
      gap: 6px;
    }

    .title {
      margin: 0;
      font-size: 1rem;
      font-weight: 700;
      color: #ffffff;
    }

    .line {
      margin: 0;
      font-size: 0.95rem;
    }

    .mail {
      color: #7ec8ff;
      text-decoration: none;
      font-weight: 600;
    }

    .mail:hover {
      text-decoration: underline;
    }
  `;

  /**
   * Renderiza el pie de página con datos de contacto.
   */
  render() {
    return html`
      <footer class="footer-wrap">
        <p class="title">Andres Mauricio Noscue Cerquera</p>
        <p class="line">EPAM Neoris · Neiva, Huila</p>
        <p class="line">
          <a class="mail" href="mailto:mauricio_noscue@epamneoris.com">mauricio_noscue@epamneoris.com</a>
        </p>
      </footer>
    `;
  }
}

customElements.define("ui-footer", UiFooter);
