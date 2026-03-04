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

  /**
   * Define que el componente renderiza en light DOM
   * para reutilizar estilos globales de la app.
   */
  createRenderRoot() {
    return this;
  }

  /**
   * Registra la orquestación de eventos de datos y de interacción.
   */
  async connectedCallback() {
    super.connectedCallback();

    this.initialLoadingTimeout = setTimeout(() => {
      this.initialLoading = false;
    }, 2000);

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
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearTimeout(this.initialLoadingTimeout);
  }

  /**
   * Ejecuta la búsqueda por nombre usando el valor actual del input.
   */
  handleSearch() {
    this.manager.getByName(this.inputValue);
  }

  /**
   * Solicita al manager la carga del listado completo de personajes.
   */
  handleShowAll() {
    this.manager.getAllCharacters();
  }

  /**
   * Actualiza el estado local del input con el valor emitido por `ui-input`.
   */
  handleInputChange(e) {
    this.inputValue = e.detail;
  }

  /**
   * Sección de render
   * - Compone header, barra de acciones, estados de feedback, lista y footer.
   */
  render() {
    return html` ${this.renderContent} `;
  }

  /**
   * Decide qué vista mostrar según el estado inicial de carga.
   */
  get renderContent() {
    if (this.initialLoading) {
      return this.renderInitialLoading;
    }

    return html`
      <div class="main-api p-4">
        <div class="container-xl">
          <ui-header></ui-header>

          <ui-notification
            .message=${this.notificationMessage}
            .type=${this.notificationType}
          >
          </ui-notification>

          ${this.renderToolbar} ${this.renderError}

          <ui-list .items=${this.characters}></ui-list>

          <ui-footer></ui-footer>
        </div>
      </div>
    `;
  }

  get renderToolbar() {
    return html`
      <div class="d-flex flex-wrap align-items-center gap-2 mb-3">
        <ui-input @on-input-change=${this.handleInputChange}> </ui-input>

        <ui-button
          .label=${"Buscar"}
          .type=${"search"}
          @on-search-click=${this.handleSearch}
        >
        </ui-button>

        <ui-button
          .label=${"Mostrar todos"}
          .type=${"all"}
          @on-show-all-click=${this.handleShowAll}
        >
        </ui-button>

        ${this.loading ? html`<ui-loading></ui-loading>` : null}
      </div>
    `;
  }

  /**
   * Renderiza el bloque de error solo cuando existe mensaje.
   */
  get renderError() {
    if (!this.error) return null;

    return html` <ui-error .message=${this.error}></ui-error> `;
  }

  /**
   * Renderiza el estado de carga inicial a pantalla completa.
   */
  get renderInitialLoading() {
    if (!this.initialLoading) return null;

    return html`<ui-loading .fullscreen=${true}></ui-loading>`;
  }
}

customElements.define("ui-app", UiApp);
