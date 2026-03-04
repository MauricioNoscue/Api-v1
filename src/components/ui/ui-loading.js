import { html, LitElement } from "lit";

/**
 * Estado visual de carga.
 *
 * Sección de responsabilidad
 * - Presenta un spinner cuando la aplicación está en proceso.
 *
 * Sección de eventos
 * - No emite ni escucha eventos.
 *
 * Sección de render
 * - Renderiza un spinner Bootstrap con etiqueta accesible.
 */
export class UiLoading extends LitElement{
   
    
    createRenderRoot() { return this; }

    /**
     * Renderiza el indicador de carga.
     */
    render(){
        return html`
      <div class="spinner-border text-light" role="status" aria-label="loading">
        <span class="visually-hidden">Loading...</span>
     </div>
        `;
    }
}

customElements.define('ui-loading',UiLoading)