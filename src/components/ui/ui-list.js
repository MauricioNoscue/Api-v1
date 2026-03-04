import { LitElement, css, html } from "lit";
import "../cards/morty-card";

/**
 * Listado de resultados.
 *
 * Sección de responsabilidad
 * - Recorre la colección de personajes y delega su visualización en morty-card.
 *
 * Sección de propiedades
 * - items: arreglo de personajes ya normalizados para presentación.
 *
 * Sección de eventos
 * - No emite ni escucha eventos.
 *
 * Sección de render
 * - Muestra una grilla responsive de tarjetas en dos columnas.
 */
export class UiList extends LitElement {
  static properties = {
    items: { type: Array },
  };

  static styles = css`
    .list-wrap {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      grid-auto-rows: 280px;
      gap: 16px;
      margin-top: 16px;
    }

    morty-card {
      height: 100%;
    }

    @media (max-width: 992px) {
      .list-wrap {
        grid-template-columns: 1fr;
        grid-auto-rows: auto;
      }
    }
  `;

  constructor() {
    super();
    this.items = [];
  }

  /**
   * Renderiza la grilla de tarjetas o vacío cuando no hay datos.
   */
  render() {
    if (!this.items?.length) {
      return html``;
    }

    return html`
      <section class="list-wrap">
        ${this.items.map((item) => html`<morty-card .item=${item}></morty-card> `)}
      </section>
    `;
  }
}

customElements.define("ui-list", UiList);
