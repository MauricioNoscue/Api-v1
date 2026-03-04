import { LitElement, css, html } from "lit";

/**
 * Tarjeta individual de personaje.
 *
 * Sección de responsabilidad
 * - Presenta la información completa de un personaje en formato visual.
 *
 * Sección de propiedades
 * - item: objeto con id, name, species, status, statusRaw, image,
 *   lastKnownLocation y firstSeenIn.
 *
 * Sección de eventos
 * - No emite ni escucha eventos.
 *
 * Sección de render
 * - Estructura una tarjeta con imagen, estado y metadatos del personaje.
 */
export class MortyCard extends LitElement {
  static properties = {
    item: { type: Object },
  };

  static styles = css`
    .card-wrap {
      display: grid;
      grid-template-columns: 220px 1fr;
      background: #3c3e44;
      border-radius: 12px;
      overflow: hidden;
      color: #f5f5f5;
      min-height: 220px;
    }

    .img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .body {
      padding: 16px;
    }

    .title {
      margin: 0;
      font-size: 2rem;
      line-height: 1.1;
      font-weight: 700;
    }

    .status-row {
      margin-top: 8px;
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 1.2rem;
      font-weight: 600;
    }

    .dot {
      width: 10px;
      height: 10px;
      border-radius: 999px;
      display: inline-block;
    }

    .alive {
      background: #55cc44;
    }

    .dead {
      background: #d63d2e;
    }

    .unknown {
      background: #9e9e9e;
    }

    .label {
      margin: 14px 0 6px;
      color: #bdbdbd;
      font-size: 1.1rem;
      font-weight: 700;
    }

    .value {
      margin: 0;
      font-size: 1.8rem;
      line-height: 1.2;
    }

    @media (max-width: 768px) {
      .card-wrap {
        grid-template-columns: 1fr;
      }

      .title {
        font-size: 1.6rem;
      }

      .value {
        font-size: 1.2rem;
      }
    }
  `;

  constructor() {
    super();
    this.item = {};
  }

  /**
   * Resuelve la clase visual del estado para el indicador de color.
   */
  get statusClass() {
    const raw = this.item?.statusRaw ?? "";
    if (raw === "Alive") return "alive";
    if (raw === "Dead") return "dead";
    return "unknown";
  }

  /**
   * Renderiza la tarjeta de personaje.
   */
  render() {
    return html`
      <article class="card-wrap">
        <img class="img" src=${this.item?.image || ""} alt=${this.item?.name || "character"} />

        <div class="body">
          <h3 class="title">${this.item?.name || "Unknown"}</h3>

          <div class="status-row">
            <span class="dot ${this.statusClass}"></span>
            <span>${this.item?.status || "Unknown"} - ${this.item?.species || "Unknown"}</span>
          </div>

          <p class="label">Last known location:</p>
          <p class="value">${this.item?.lastKnownLocation || "unknown"}</p>

          <p class="label">First seen in:</p>
          <p class="value">${this.item?.firstSeenIn || "unknown"}</p>
        </div>
      </article>
    `;
  }
}

customElements.define("morty-card", MortyCard);
