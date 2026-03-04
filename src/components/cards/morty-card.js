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
      height: 280px;
    }

    .img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .body {
      padding: 16px;
      display: flex;
      flex-direction: column;
      min-width: 0;
      overflow: hidden;
    }

    .title {
      margin: 0;
      font-size: clamp(1.4rem, 1rem + 1.1vw, 2rem);
      line-height: 1.1;
      font-weight: 700;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .status-row {
      margin-top: 8px;
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 1.2rem;
      font-weight: 600;
    }

    .status-text {
      font-size: 1rem;
      line-height: 1.2;
      min-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
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

    .value-small {
      font-size: 1.35rem;
      line-height: 1.3;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    @media (max-width: 768px) {
      .card-wrap {
        grid-template-columns: 1fr;
        height: auto;
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
    const name = this.item?.name || "Unknown";

    return html`
      <article class="card-wrap">
        <img class="img" src=${this.item?.image || ""} alt=${this.item?.name || "character"} />

        <div class="body">
          <h3 class="title">${name}</h3>

          <div class="status-row">
            <span class="dot ${this.statusClass}"></span>
            <span class="status-text">${this.item?.status || "Unknown"} - ${this.item?.species || "Unknown"}</span>
          </div>

          <p class="label">Last known location:</p>
          <p class="value value-small">${this.item?.lastKnownLocation || "unknown"}</p>

          <p class="label">First seen in:</p>
          <p class="value value-small">${this.item?.firstSeenIn || "unknown"}</p>
        </div>
      </article>
    `;
  }
}

customElements.define("morty-card", MortyCard);
