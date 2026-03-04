import { html, LitElement } from "lit";
import { DataManager } from "../../data/manager/data-manager";
import { DataProviderAll } from "../../data/providers/data-provider-all";
import { DataProviderByName } from "../../data/providers/data-provider-byname";
import "./ui-header";
import "./ui-input";
import "./ui-buttons";
import "./ui-loading";
import "./ui-error";
import "./ui-list";
import "./ui-notification";
import "./ui-footer";

/**
 * Componente principal de la aplicación.
 *
 * Sección de responsabilidad
 * - Coordina la UI y el flujo de datos entre componentes visuales y DataManager.
 * - Escucha eventos de búsqueda emitidos por los componentes hijos.
 *
 * Sección de propiedades
 * - loading / initialLoading: controlan el estado de carga.
 * - error: conserva el mensaje de error actual.
 * - characters: lista de personajes para renderizar tarjetas.
 * - inputValue: valor actual capturado desde el input de búsqueda.
 * - notificationMessage / notificationType: estado de la notificación superior.
 *
 * Sección de eventos
 * - Escucha desde DataManager: search-start, search-success, search-error.
 * - Escucha desde UI: on-input-change, on-search-click, on-show-all-click.
 *
 * Sección de ciclo de vida
 * - connectedCallback registra listeners y dispara carga inicial.
 */

export class UiApp extends LitElement {
  static properties = {
    loading: { type: Boolean },
    initialLoading: { type: Boolean },
    error: { type: String },
    characters: { type: Array },
    inputValue: { type: String },
    notificationMessage: { type: String },
    notificationType: { type: String },
  };

  constructor() {
    super();
    this.loading = false;
    this.initialLoading = true;
    this.error = "";
    this.characters = [];
    this.inputValue = "";
    this.notificationMessage = "";
    this.notificationType = "info";

    this.manager = new DataManager(
      new DataProviderAll(),
      new DataProviderByName(),
    );
  }

  createRenderRoot() {
    return this;
  }

  /**
   * Registra la orquestación de eventos de datos y de interacción.
   */
  async connectedCallback() {
    super.connectedCallback();

    this.manager.addEventListener("search-start", () => {
      this.loading = true;
      this.error = "";
      this.notificationMessage = "";
    });

    this.manager.addEventListener("search-success", (event) => {
      this.characters = event.detail;
      this.loading = false;
      this.notificationType = "success";
      this.notificationMessage = `Resultados: ${this.characters.length}`;
    });

    this.manager.addEventListener("search-error", (event) => {
      this.error = event.detail;
      this.characters = [];
      this.loading = false;
      this.notificationType = "danger";
      this.notificationMessage = this.error;
    });

    this.addEventListener("on-input-change", (e) => {
      this.inputValue = e.detail;
    });

    this.addEventListener("on-search-click", () => {
      this.manager.getByName(this.inputValue);
    });

    this.addEventListener("on-show-all-click", () => {
      this.manager.getAllCharacters();
    });

    await this.loadInitialWithSpinner();
  }

  /**
   * Ejecuta la carga inicial con un tiempo mínimo visible de spinner.
   */
  async loadInitialWithSpinner() {
    const minTime = 1200;
    const start = Date.now();

    await this.manager.getAllCharacters();

    const remaining = minTime - (Date.now() - start);

    if (remaining > 0) {
      await new Promise((resolve) => {
        const timer = setInterval(() => {
          clearInterval(timer);
          resolve();
        }, remaining);
      });
    }

    this.initialLoading = false;
  }

  /**
   * Sección de render
   * - Compone header, barra de acciones, estados de feedback, lista y footer.
   */
  render() {
    const showLoading = this.loading || this.initialLoading;

    return html`
      <div class="main-api p-4">
        <div class="container-xl">
          <ui-header></ui-header>

          <ui-notification
            .message=${this.notificationMessage}
            .type=${this.notificationType}
          ></ui-notification>

          <div class="d-flex flex-wrap align-items-center gap-2 mb-3">
            <ui-input></ui-input>

            <ui-button .label=${"Buscar"} .type=${"search"}></ui-button>

            <ui-button .label=${"Mostrar todos"} .type=${"all"}></ui-button>

            ${showLoading ? html`<ui-loading></ui-loading>` : html``}
          </div>

          ${this.error
            ? html`<ui-error .message=${this.error}></ui-error>`
            : html``}

          <ui-list .items=${this.characters}></ui-list>

          <ui-footer></ui-footer>
        </div>
      </div>
    `;
  }
}

customElements.define("ui-app", UiApp);
