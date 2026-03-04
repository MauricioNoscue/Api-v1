(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();const M=globalThis,B=M.ShadowRoot&&(M.ShadyCSS===void 0||M.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,D=Symbol(),V=new WeakMap;let tt=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==D)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(B&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=V.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&V.set(e,t))}return t}toString(){return this.cssText}};const ot=r=>new tt(typeof r=="string"?r:r+"",void 0,D),O=(r,...t)=>{const e=r.length===1?r[0]:t.reduce((s,i,n)=>s+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[n+1],r[0]);return new tt(e,r,D)},at=(r,t)=>{if(B)r.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const s=document.createElement("style"),i=M.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,r.appendChild(s)}},W=B?r=>r:r=>r instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return ot(e)})(r):r;const{is:ht,defineProperty:lt,getOwnPropertyDescriptor:ct,getOwnPropertyNames:dt,getOwnPropertySymbols:pt,getPrototypeOf:ut}=Object,k=globalThis,q=k.trustedTypes,ft=q?q.emptyScript:"",mt=k.reactiveElementPolyfillSupport,S=(r,t)=>r,H={toAttribute(r,t){switch(t){case Boolean:r=r?ft:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,t){let e=r;switch(t){case Boolean:e=r!==null;break;case Number:e=r===null?null:Number(r);break;case Object:case Array:try{e=JSON.parse(r)}catch{e=null}}return e}},et=(r,t)=>!ht(r,t),K={attribute:!0,type:String,converter:H,reflect:!1,useDefault:!1,hasChanged:et};Symbol.metadata??=Symbol("metadata"),k.litPropertyMetadata??=new WeakMap;let A=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=K){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&lt(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:n}=ct(this.prototype,t)??{get(){return this[e]},set(o){this[e]=o}};return{get:i,set(o){const l=i?.call(this);n?.call(this,o),this.requestUpdate(t,l,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??K}static _$Ei(){if(this.hasOwnProperty(S("elementProperties")))return;const t=ut(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(S("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(S("properties"))){const e=this.properties,s=[...dt(e),...pt(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(W(i))}else t!==void 0&&e.push(W(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return at(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const n=(s.converter?.toAttribute!==void 0?s.converter:H).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const n=s.getPropertyOptions(i),o=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:H;this._$Em=i;const l=o.fromAttribute(e,n.type);this[i]=l??this._$Ej?.get(i)??l,this._$Em=null}}requestUpdate(t,e,s,i=!1,n){if(t!==void 0){const o=this.constructor;if(i===!1&&(n=this[t]),s??=o.getPropertyOptions(t),!((s.hasChanged??et)(n,e)||s.useDefault&&s.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(o._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:n},o){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,o??e??this[t]),n!==!0||o!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,n]of s){const{wrapped:o}=n,l=this[i];o!==!0||this._$AL.has(i)||l===void 0||this.C(i,void 0,n,l)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach(s=>s.hostUpdate?.()),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(t){}firstUpdated(t){}};A.elementStyles=[],A.shadowRootOptions={mode:"open"},A[S("elementProperties")]=new Map,A[S("finalized")]=new Map,mt?.({ReactiveElement:A}),(k.reactiveElementVersions??=[]).push("2.1.2");const I=globalThis,F=r=>r,R=I.trustedTypes,Z=R?R.createPolicy("lit-html",{createHTML:r=>r}):void 0,st="$lit$",g=`lit$${Math.random().toFixed(9).slice(2)}$`,it="?"+g,$t=`<${it}>`,v=document,x=()=>v.createComment(""),C=r=>r===null||typeof r!="object"&&typeof r!="function",z=Array.isArray,gt=r=>z(r)||typeof r?.[Symbol.iterator]=="function",L=`[ 	
\f\r]`,E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,J=/-->/g,G=/>/g,y=RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Q=/'/g,X=/"/g,rt=/^(?:script|style|textarea|title)$/i,yt=r=>(t,...e)=>({_$litType$:r,strings:t,values:e}),p=yt(1),b=Symbol.for("lit-noChange"),d=Symbol.for("lit-nothing"),Y=new WeakMap,_=v.createTreeWalker(v,129);function nt(r,t){if(!z(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Z!==void 0?Z.createHTML(t):t}const _t=(r,t)=>{const e=r.length-1,s=[];let i,n=t===2?"<svg>":t===3?"<math>":"",o=E;for(let l=0;l<e;l++){const a=r[l];let c,u,h=-1,m=0;for(;m<a.length&&(o.lastIndex=m,u=o.exec(a),u!==null);)m=o.lastIndex,o===E?u[1]==="!--"?o=J:u[1]!==void 0?o=G:u[2]!==void 0?(rt.test(u[2])&&(i=RegExp("</"+u[2],"g")),o=y):u[3]!==void 0&&(o=y):o===y?u[0]===">"?(o=i??E,h=-1):u[1]===void 0?h=-2:(h=o.lastIndex-u[2].length,c=u[1],o=u[3]===void 0?y:u[3]==='"'?X:Q):o===X||o===Q?o=y:o===J||o===G?o=E:(o=y,i=void 0);const $=o===y&&r[l+1].startsWith("/>")?" ":"";n+=o===E?a+$t:h>=0?(s.push(c),a.slice(0,h)+st+a.slice(h)+g+$):a+g+(h===-2?l:$)}return[nt(r,n+(r[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class P{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,o=0;const l=t.length-1,a=this.parts,[c,u]=_t(t,e);if(this.el=P.createElement(c,s),_.currentNode=this.el.content,e===2||e===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(i=_.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const h of i.getAttributeNames())if(h.endsWith(st)){const m=u[o++],$=i.getAttribute(h).split(g),N=/([.?@])?(.*)/.exec(m);a.push({type:1,index:n,name:N[2],strings:$,ctor:N[1]==="."?At:N[1]==="?"?bt:N[1]==="@"?wt:T}),i.removeAttribute(h)}else h.startsWith(g)&&(a.push({type:6,index:n}),i.removeAttribute(h));if(rt.test(i.tagName)){const h=i.textContent.split(g),m=h.length-1;if(m>0){i.textContent=R?R.emptyScript:"";for(let $=0;$<m;$++)i.append(h[$],x()),_.nextNode(),a.push({type:2,index:++n});i.append(h[m],x())}}}else if(i.nodeType===8)if(i.data===it)a.push({type:2,index:n});else{let h=-1;for(;(h=i.data.indexOf(g,h+1))!==-1;)a.push({type:7,index:n}),h+=g.length-1}n++}}static createElement(t,e){const s=v.createElement("template");return s.innerHTML=t,s}}function w(r,t,e=r,s){if(t===b)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl;const n=C(t)?void 0:t._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(r),i._$AT(r,e,s)),s!==void 0?(e._$Co??=[])[s]=i:e._$Cl=i),i!==void 0&&(t=w(r,i._$AS(r,t.values),i,s)),t}class vt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??v).importNode(e,!0);_.currentNode=i;let n=_.nextNode(),o=0,l=0,a=s[0];for(;a!==void 0;){if(o===a.index){let c;a.type===2?c=new U(n,n.nextSibling,this,t):a.type===1?c=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(c=new Et(n,this,t)),this._$AV.push(c),a=s[++l]}o!==a?.index&&(n=_.nextNode(),o++)}return _.currentNode=v,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class U{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=d,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=w(this,t,e),C(t)?t===d||t==null||t===""?(this._$AH!==d&&this._$AR(),this._$AH=d):t!==this._$AH&&t!==b&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):gt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==d&&C(this._$AH)?this._$AA.nextSibling.data=t:this.T(v.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=P.createElement(nt(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const n=new vt(i,this),o=n.u(this.options);n.p(e),this.T(o),this._$AH=n}}_$AC(t){let e=Y.get(t.strings);return e===void 0&&Y.set(t.strings,e=new P(t)),e}k(t){z(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new U(this.O(x()),this.O(x()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const s=F(t).nextSibling;F(t).remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class T{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=d,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=d}_$AI(t,e=this,s,i){const n=this.strings;let o=!1;if(n===void 0)t=w(this,t,e,0),o=!C(t)||t!==this._$AH&&t!==b,o&&(this._$AH=t);else{const l=t;let a,c;for(t=n[0],a=0;a<n.length-1;a++)c=w(this,l[s+a],e,a),c===b&&(c=this._$AH[a]),o||=!C(c)||c!==this._$AH[a],c===d?t=d:t!==d&&(t+=(c??"")+n[a+1]),this._$AH[a]=c}o&&!i&&this.j(t)}j(t){t===d?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class At extends T{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===d?void 0:t}}class bt extends T{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==d)}}class wt extends T{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=w(this,t,e,0)??d)===b)return;const s=this._$AH,i=t===d&&s!==d||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==d&&(s===d||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class Et{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){w(this,t)}}const St=I.litHtmlPolyfillSupport;St?.(P,U),(I.litHtmlVersions??=[]).push("3.3.2");const xt=(r,t,e)=>{const s=e?.renderBefore??t;let i=s._$litPart$;if(i===void 0){const n=e?.renderBefore??null;s._$litPart$=i=new U(t.insertBefore(x(),n),n,void 0,e??{})}return i._$AI(r),i};const j=globalThis;class f extends A{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=xt(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return b}}f._$litElement$=!0,f.finalized=!0,j.litElementHydrateSupport?.({LitElement:f});const Ct=j.litElementPolyfillSupport;Ct?.({LitElement:f});(j.litElementVersions??=[]).push("4.2.2");class Pt extends f{static properties={title:{type:String}};static styles=O`
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
  `;constructor(){super(),this.title="The Rick and Morty API"}render(){return p`
      <header class="header-container">
        <h1>${this.title}</h1>
      </header>
    `}}customElements.define("ui-header",Pt);class Ut extends f{static properties={label:{type:String},type:{type:String}};createRenderRoot(){return this}handleClick(){let t="";this.type==="search"&&(t="on-search-click"),this.type==="all"&&(t="on-show-all-click"),this.dispatchEvent(new CustomEvent(t,{bubbles:!0,composed:!0}))}render(){const t=this.type==="search"?"btn btn-primary":"btn btn-outline-light";return p`
      <button
        type="button"
        class=${t}
        @click=${this.handleClick}
      >
        ${this.label}
      </button>
    `}}customElements.define("ui-button",Ut);class Nt extends f{createRenderRoot(){return this}render(){return p`
      <div class="spinner-border text-light" role="status" aria-label="loading">
        <span class="visually-hidden">Loading...</span>
     </div>
        `}}customElements.define("ui-loading",Nt);class Mt extends f{static properties={message:{type:String}};createRenderRoot(){return this}render(){return p`
      <div class="alert alert-danger" role="alert">
         ${this.message}
      </div>
    `}}customElements.define("ui-error",Mt);class Rt extends f{static properties={value:{type:String}};constructor(){super(),this.value=""}createRenderRoot(){return this}handleInput(t){this.value=t.target.value,this.dispatchEvent(new CustomEvent("on-input-change",{detail:this.value,bubbles:!0,composed:!0}))}render(){return p`
      <input
        type="text"
        class="form-control input-api"
        placeholder="Busca tu personaje"
        .value=${this.value}
        @input=${this.handleInput}
      />
    `}}customElements.define("ui-input",Rt);class Ot extends EventTarget{constructor(t,e){super(),this.providerAll=t,this.providerByName=e,this.characters=[],this.loading=!1,this.error="",this.inputValue=""}async getAllCharacters(){this.error="",this.loading=!0,this.dispatchEvent(new CustomEvent("search-start"));try{const t=await this.providerAll.getAll();this.characters=this.mapCharacters(t),this.dispatchEvent(new CustomEvent("search-success",{detail:this.characters}))}catch{this.error="Ocurrio un error, trataremos de resolverlo pronto ",this.characters=[],this.dispatchEvent(new CustomEvent("search-error",{detail:this.error}))}finally{this.loading=!1}}async getByName(t){if(t.toLowerCase().trim()){this.dispatchEvent(new CustomEvent("search-start")),this.inputValue=t.trim(),this.error="",this.loading=!0;try{const e=await this.providerByName.getByName(this.inputValue);this.characters=this.mapCharacters(e),this.dispatchEvent(new CustomEvent("search-success",{detail:this.characters}))}catch{this.error="Ocurrio un error, trataremos de resolverlo pronto",this.dispatchEvent(new CustomEvent("search-error",{detail:this.error})),this.characters=[]}finally{this.loading=!1}}else{this.error="Input vacio",this.characters=[],this.loading=!1,this.dispatchEvent(new CustomEvent("search-error",{detail:this.error}));return}}mapCharacters(t){return t.map(e=>({id:e.id,name:e.name,species:e.species,image:e.image,status:this.mapStatus(e.status),statusRaw:e.status,lastKnownLocation:e.location?.name||"unknown",firstSeenIn:e.origin?.name||"unknown"}))}mapStatus(t){return t==="Alive"?"🟢 Alive":t==="Dead"?"🔴 Dead":"⚪ Unknown"}}class kt{async getAll(){return(await(await fetch("https://rickandmortyapi.com/api/character")).json()).results}}class Tt{async getByName(t){return(await(await fetch(`https://rickandmortyapi.com/api/character/?name=${t}`)).json()).results}}class Lt extends f{static properties={item:{type:Object}};static styles=O`
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
  `;constructor(){super(),this.item={}}get statusClass(){const t=this.item?.statusRaw??"";return t==="Alive"?"alive":t==="Dead"?"dead":"unknown"}render(){return p`
      <article class="card-wrap">
        <img class="img" src=${this.item?.image||""} alt=${this.item?.name||"character"} />

        <div class="body">
          <h3 class="title">${this.item?.name||"Unknown"}</h3>

          <div class="status-row">
            <span class="dot ${this.statusClass}"></span>
            <span>${this.item?.status||"Unknown"} - ${this.item?.species||"Unknown"}</span>
          </div>

          <p class="label">Last known location:</p>
          <p class="value">${this.item?.lastKnownLocation||"unknown"}</p>

          <p class="label">First seen in:</p>
          <p class="value">${this.item?.firstSeenIn||"unknown"}</p>
        </div>
      </article>
    `}}customElements.define("morty-card",Lt);class Ht extends f{static properties={items:{type:Array}};static styles=O`
    .list-wrap {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 16px;
      margin-top: 16px;
    }

    @media (max-width: 992px) {
      .list-wrap {
        grid-template-columns: 1fr;
      }
    }
  `;constructor(){super(),this.items=[]}render(){return this.items?.length?p`
      <section class="list-wrap">
        ${this.items.map(t=>p`<morty-card .item=${t}></morty-card> `)}
      </section>
    `:p``}}customElements.define("ui-list",Ht);class Bt extends f{static properties={message:{type:String},type:{type:String}};constructor(){super(),this.message="",this.type="info"}createRenderRoot(){return this}render(){return this.message?p`
      <div class="alert ${{success:"alert-success",danger:"alert-danger",warning:"alert-warning",info:"alert-info"}[this.type]||"alert-info"} mb-3" role="alert">
        ${this.message}
      </div>
    `:p``}}customElements.define("ui-notification",Bt);class Dt extends f{static styles=O`
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
  `;render(){return p`
      <footer class="footer-wrap">
        <p class="title">Andres Mauricio Noscue Cerquera</p>
        <p class="line">EPAM Neoris · Neiva, Huila</p>
        <p class="line">
          <a class="mail" href="mailto:mauricio_noscue@epamneoris.com">mauricio_noscue@epamneoris.com</a>
        </p>
      </footer>
    `}}customElements.define("ui-footer",Dt);class It extends f{static properties={loading:{type:Boolean},initialLoading:{type:Boolean},error:{type:String},characters:{type:Array},inputValue:{type:String},notificationMessage:{type:String},notificationType:{type:String}};constructor(){super(),this.loading=!1,this.initialLoading=!0,this.error="",this.characters=[],this.inputValue="",this.notificationMessage="",this.notificationType="info",this.manager=new Ot(new kt,new Tt)}createRenderRoot(){return this}async connectedCallback(){super.connectedCallback(),this.manager.addEventListener("search-start",()=>{this.loading=!0,this.error="",this.notificationMessage=""}),this.manager.addEventListener("search-success",t=>{this.characters=t.detail,this.loading=!1,this.notificationType="success",this.notificationMessage=`Resultados: ${this.characters.length}`}),this.manager.addEventListener("search-error",t=>{this.error=t.detail,this.characters=[],this.loading=!1,this.notificationType="danger",this.notificationMessage=this.error}),this.addEventListener("on-input-change",t=>{this.inputValue=t.detail}),this.addEventListener("on-search-click",()=>{this.manager.getByName(this.inputValue)}),this.addEventListener("on-show-all-click",()=>{this.manager.getAllCharacters()}),await this.loadInitialWithSpinner()}async loadInitialWithSpinner(){const e=Date.now();await this.manager.getAllCharacters();const s=1200-(Date.now()-e);s>0&&await new Promise(i=>{const n=setInterval(()=>{clearInterval(n),i()},s)}),this.initialLoading=!1}render(){const t=this.loading||this.initialLoading;return p`
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

            ${t?p`<ui-loading></ui-loading>`:p``}
          </div>

          ${this.error?p`<ui-error .message=${this.error}></ui-error>`:p``}

          <ui-list .items=${this.characters}></ui-list>

          <ui-footer></ui-footer>
        </div>
      </div>
    `}}customElements.define("ui-app",It);
