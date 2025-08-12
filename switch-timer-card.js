/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=window,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;let n=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}};const o=(t,...e)=>{const s=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new n(s,t,i)},r=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var a;const l=window,c=l.trustedTypes,h=c?c.emptyScript:"",d=l.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},u=(t,e)=>e!==t&&(e==e||t==t),m={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:u},_="finalized";let g=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Ep(i,e);void 0!==s&&(this._$Ev.set(s,i),t.push(s))})),t}static createProperty(t,e=m){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||m}static finalize(){if(this.hasOwnProperty(_))return!1;this[_]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var i;const s=null!==(i=this.shadowRoot)&&void 0!==i?i:this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{e?i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):s.forEach((e=>{const s=document.createElement("style"),n=t.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=e.cssText,i.appendChild(s)}))})(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=m){var s;const n=this.constructor._$Ep(t,i);if(void 0!==n&&!0===i.reflect){const o=(void 0!==(null===(s=i.converter)||void 0===s?void 0:s.toAttribute)?i.converter:p).toAttribute(e,i.type);this._$El=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$El=null}}_$AK(t,e){var i;const s=this.constructor,n=s._$Ev.get(t);if(void 0!==n&&this._$El!==n){const t=s.getPropertyOptions(n),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:p;this._$El=n,this[n]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||u)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var v;g[_]=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null==d||d({ReactiveElement:g}),(null!==(a=l.reactiveElementVersions)&&void 0!==a?a:l.reactiveElementVersions=[]).push("1.6.3");const f=window,$=f.trustedTypes,y=$?$.createPolicy("lit-html",{createHTML:t=>t}):void 0,b="$lit$",w=`lit$${(Math.random()+"").slice(9)}$`,A="?"+w,x=`<${A}>`,E=document,S=()=>E.createComment(""),C=t=>null===t||"object"!=typeof t&&"function"!=typeof t,k=Array.isArray,P="[ \t\n\f\r]",T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,U=/-->/g,O=/>/g,N=RegExp(`>|${P}(?:([^\\s"'>=/]+)(${P}*=${P}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),R=/'/g,I=/"/g,M=/^(?:script|style|textarea|title)$/i,H=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),z=Symbol.for("lit-noChange"),D=Symbol.for("lit-nothing"),j=new WeakMap,L=E.createTreeWalker(E,129,null,!1);function B(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==y?y.createHTML(e):e}const q=(t,e)=>{const i=t.length-1,s=[];let n,o=2===e?"<svg>":"",r=T;for(let e=0;e<i;e++){const i=t[e];let a,l,c=-1,h=0;for(;h<i.length&&(r.lastIndex=h,l=r.exec(i),null!==l);)h=r.lastIndex,r===T?"!--"===l[1]?r=U:void 0!==l[1]?r=O:void 0!==l[2]?(M.test(l[2])&&(n=RegExp("</"+l[2],"g")),r=N):void 0!==l[3]&&(r=N):r===N?">"===l[0]?(r=null!=n?n:T,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?N:'"'===l[3]?I:R):r===I||r===R?r=N:r===U||r===O?r=T:(r=N,n=void 0);const d=r===N&&t[e+1].startsWith("/>")?" ":"";o+=r===T?i+x:c>=0?(s.push(a),i.slice(0,c)+b+i.slice(c)+w+d):i+w+(-2===c?(s.push(void 0),e):d)}return[B(t,o+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class V{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const r=t.length-1,a=this.parts,[l,c]=q(t,e);if(this.el=V.createElement(l,i),L.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=L.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith(b)||e.startsWith(w)){const i=c[o++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+b).split(w),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?J:"?"===e[1]?Q:"@"===e[1]?G:Z})}else a.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(M.test(s.tagName)){const t=s.textContent.split(w),e=t.length-1;if(e>0){s.textContent=$?$.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],S()),L.nextNode(),a.push({type:2,index:++n});s.append(t[e],S())}}}else if(8===s.nodeType)if(s.data===A)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(w,t+1));)a.push({type:7,index:n}),t+=w.length-1}n++}}static createElement(t,e){const i=E.createElement("template");return i.innerHTML=t,i}}function W(t,e,i=t,s){var n,o,r,a;if(e===z)return e;let l=void 0!==s?null===(n=i._$Co)||void 0===n?void 0:n[s]:i._$Cl;const c=C(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,s)),void 0!==s?(null!==(r=(a=i)._$Co)&&void 0!==r?r:a._$Co=[])[s]=l:i._$Cl=l),void 0!==l&&(e=W(t,l._$AS(t,e.values),l,s)),e}class K{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:E).importNode(i,!0);L.currentNode=n;let o=L.nextNode(),r=0,a=0,l=s[0];for(;void 0!==l;){if(r===l.index){let e;2===l.type?e=new F(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new X(o,this,t)),this._$AV.push(e),l=s[++a]}r!==(null==l?void 0:l.index)&&(o=L.nextNode(),r++)}return L.currentNode=E,n}v(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class F{constructor(t,e,i,s){var n;this.type=2,this._$AH=D,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cp=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===(null==t?void 0:t.nodeType)&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=W(this,t,e),C(t)?t===D||null==t||""===t?(this._$AH!==D&&this._$AR(),this._$AH=D):t!==this._$AH&&t!==z&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>k(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==D&&C(this._$AH)?this._$AA.nextSibling.data=t:this.$(E.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(B(s.h,s.h[0]),this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.v(i);else{const t=new K(n,this),e=t.u(this.options);t.v(i),this.$(e),this._$AH=t}}_$AC(t){let e=j.get(t.strings);return void 0===e&&j.set(t.strings,e=new V(t)),e}T(t){k(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new F(this.k(S()),this.k(S()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cp=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class Z{constructor(t,e,i,s,n){this.type=1,this._$AH=D,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=D}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=W(this,t,e,0),o=!C(t)||t!==this._$AH&&t!==z,o&&(this._$AH=t);else{const s=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=W(this,s[i+r],e,r),a===z&&(a=this._$AH[r]),o||(o=!C(a)||a!==this._$AH[r]),a===D?t=D:t!==D&&(t+=(null!=a?a:"")+n[r+1]),this._$AH[r]=a}o&&!s&&this.j(t)}j(t){t===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class J extends Z{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===D?void 0:t}}const Y=$?$.emptyScript:"";class Q extends Z{constructor(){super(...arguments),this.type=4}j(t){t&&t!==D?this.element.setAttribute(this.name,Y):this.element.removeAttribute(this.name)}}class G extends Z{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=W(this,t,e,0))&&void 0!==i?i:D)===z)return;const s=this._$AH,n=t===D&&s!==D||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,o=t!==D&&(s===D||n);n&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class X{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){W(this,t)}}const tt=f.litHtmlPolyfillSupport;null==tt||tt(V,F),(null!==(v=f.litHtmlVersions)&&void 0!==v?v:f.litHtmlVersions=[]).push("2.8.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var et,it;class st extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var s,n;const o=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let r=o._$litPart$;if(void 0===r){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;o._$litPart$=r=new F(e.insertBefore(S(),t),t,void 0,null!=i?i:{})}return r._$AI(t),r})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return z}}st.finalized=!0,st._$litElement$=!0,null===(et=globalThis.litElementHydrateSupport)||void 0===et||et.call(globalThis,{LitElement:st});const nt=globalThis.litElementPolyfillSupport;null==nt||nt({LitElement:st}),(null!==(it=globalThis.litElementVersions)&&void 0!==it?it:globalThis.litElementVersions=[]).push("3.3.3");function ot(t,e,i,s){if(i.has("config")||s)return!0;if(e){const s=i.get("hass");return!s||s.states[e]!==t.hass?.states[e]}return!1}class rt extends st{static styles=(t=>t`
  .container {
    padding: 24px;
  }
  .config-row {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  ::placeholder {
    font-style: italic;
    opacity: 80%;
  }

  .entity-input {
    margin-left: 12px;
  }
`)(o);async firstUpdated(){this.loadEntityPicker()}setConfig(t){this._config=t}configChanged(t){this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0}))}updateSwitchEntity(t){this._config.switch_entity=t,this.configChanged(this._config)}updateTimerEntity(t){this._config.timer_entity=t,this.configChanged(this._config)}updateTitle(t){this._config.title=t,this.configChanged(this._config)}async loadEntityPicker(){const t=this.shadowRoot?.customElements;if(!t)return;if(t.get("ha-entity-picker"))return;const e=await window.loadCardHelpers(),i=await e.createCardElement({type:"entities",entities:[]});await i.constructor.getConfigElement();const s=window.customElements.get("ha-entity-picker");t.define("ha-entity-picker",s)}render(){return H`
    <div class="container">
      <ha-entity-picker
        .hass=${this.hass}
        name="PickerEntity"
        label="Entity Current Conditions (Required)"
        allow-custom-entity>
      </ha-entity-picker>

      <paper-input-container class="config-row-value">
        <input 
          type="text"
          slot="input" 
          value="${this._config.title}"
          @input=${t=>this.updateTitle(t.target.value)}
          placeholder="Title (optional)"
        />
      </paper-input-container>

      <paper-input-container >
        <ha-icon icon="mdi:toggle-switch-variant" slot="prefix"></ha-icon>
        <input
            class="entity-input"
            type="text" 
            value="${this._config.switch_entity}" 
            slot="input" 
            list="switch_entities" 
            autocapitalize="none" 
            placeholder="Switch or input_boolean entity"
            @change=${t=>this.updateSwitchEntity(t.target.value)}
        />
        <datalist id="switch_entities">
          ${Object.keys(this.hass.states).filter((t=>t.startsWith("switch.")||t.startsWith("input_boolean."))).sort().map((t=>H`
                <option class="entity-picker-item" value=${t}>
                  ${this.hass.states[t].attributes.friendly_name||t}
                </option>
              `))}
        </datalist>
      </paper-input-container>

      <paper-input-container >
        <ha-icon icon="mdi:timer" slot="prefix"></ha-icon>
        <input 
            class="entity-input"
            type="text" 
            value="${this._config.timer_entity}" 
            slot="input" 
            list="timer_entities" 
            autocapitalize="none" 
            placeholder="Timer entity"
            @change=${t=>this.updateTimerEntity(t.target.value)}
        />
        <datalist id="timer_entities">
          ${Object.keys(this.hass.states).filter((t=>t.startsWith("timer."))).sort().map((t=>H`
                <option class="entity-picker-item" value=${t}>
                  ${this.hass.states[t].attributes.friendly_name||t}
                </option>
              `))}
        </datalist>
      </paper-input-container>

      
    </div>
    `}}customElements.define("content-card-editor",rt),window.customCards=window.customCards||[],window.customCards.push({type:"switch-timer-card",name:"Switch timer card",preview:!0,description:"Card to turn ON a switch for a given time indicated by a timer"});class at extends st{static styles=function(t){return t`
    ha-card {
      padding: 8px 8px;
      overflow: hidden;
      --my-icon-color: var(--state-inactive-color);
    }
    ha-card::before {
      content: '';
      top: 0;
      left: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      transition: background 300ms ease;
      opacity: 0.05;
    }
    ha-card:hover::before {
      background: var(--my-icon-color);
    }
    .active-color {
      --my-icon-color: var(--state-switch-active-color);
    }
    .header {
      position: relative;
      padding: 4px 9px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      cursor: pointer;
    }
    #radiator-icon {
      color: var(--my-icon-color);
      position: relative;
      width: 36px;
      padding: 6px;
      transition: color 300ms ease;
    }
    #radiator-icon::before {
      content: '';
      top: 0;
      left: 0;
      position: absolute;
      width: 100%;
      height: 100%;
      background: var(--my-icon-color);
      border-radius: 50%;
      opacity: 0.2;
      transition: background 300ms ease;
    }
    .icon-button {
      position: relative;
      padding: 4px;
      cursor: pointer;
      border-radius: 50%;
    }
    .icon-button::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      border-radius: 50%;
      transition: background 300ms ease;
      opacity: 0.3;
    }
    .icon-button:hover::before {
      background: var(--disabled-text-color);
    }
    .header-title {
      margin-left: 8px;
      padding: 0px 4px;
      flex: 1;
      color: var(--primary-text-color);
      line-height: 20px;
      letter-spacing: 0.1px;
      font-weight: 500;
      font-size: 14px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      display: flex;
      flex-direction: column;
      align-items: start;
      // gap: 12px;
    }
    .header-minimized-timer {
      padding: 0px;
      margin: 0px;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      letter-spacing: 0.4px;
      color: var(--primary-text-color);
    }
    .header-icon {
      padding: 2px;
      width: 16px;
      height: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    .card-content {
      margin-top: 0px;
      padding: 3px 2px;
    }
    .card-content.minimized {
      padding: 0px;
    }
    .card-hint {
      margin: 0px;
      padding-left: 4px;
      padding-right: 4px;
      font-size: 88%;
      color: var(--disabled-text-color);
    }
    .entity-row {
      display: flex;
      flexdirection: row;
      // padding-left: 8px;
      padding-top: 8px;
      padding-bottom: 8px;
      align-items: center;
      justify-content: center;
    }
    .entity-row.progress-container {
      gap: 8px;
      padding: 4px 8px;
    }
    .entity-row-title {
      flex: 1;
    }
    .switch-container {
    }
    .switch-manual-control-text {
      flex: 1;
    }
    .row-title {
      flex: 1;
    }
    // .timer-button:hover {
    //   background: var(--switch-unchecked-track-color);
    // }
    .timer-container {
    }
    .timer-button-container {
      align-items: center;
      justify-content: center;
      margin-top: 8px;
      display: flex;
      flex-direction: row;
      gap: 10px;
      width: 100%;
    }
    .timer-button {
      position: relative;
      color: var(--primary-text-color);
      padding: 12px;
      border-radius: 12px;
      border: 0;
      background: transparent;
      cursor: pointer;
      flex: 1 1 0;
      width: 0;
      font-weight: 600;
      transition: background 500ms ease;
      transform-style: preserve-3d;
    }
    .timer-button::before {
      display: block;
      content: '';
      width: 100%;
      height: 100%;
      border-radius: 12px;
      position: absolute;
      top: 0;
      left: 0;
      background-color: var(--disabled-color);
      opacity: 0.2;
      transition: opacity 500ms ease;
      transform: translateZ(-1px);
    }
    .timer-button:hover::before {
      opacity: 0.5;
    }
    .progress-bar {
      -webkit-appearance: none;
      appearance: none;
      flex: 1;
      height: 6px;
    }
    .progress-bar::-webkit-progress-bar {
      position: relative;
      border-radius: 6px;
      background-color: rgba(var(--rgb-info-color), 0.2);
    }
    .progress-bar::-webkit-progress-value {
      background-color: var(--info-color);
      border-radius: 6px;
    }
  `}(o);_longPressTimer;_longPressed=!1;static get properties(){return{hass:{},config:{},_timeRemaining:0,_interval:void 0,_unique_id:void 0,_minimized:!0}}connectedCallback(){super.connectedCallback(),this._minimized="true"===localStorage.getItem(this.getLocalStorageKey())}static getConfigElement(){return document.createElement("content-card-editor")}setConfig(t){if(!t.switch_entity)throw new Error("You need to define param 'switch_entity'");if(!t.timer_entity)throw new Error("You need to define param 'timer_entity'");const e=Number(t.preset_1),i=Number(t.preset_2);this.config={...t,preset_1:Number.isFinite(e)&&e>0?e:30,preset_2:Number.isFinite(i)&&i>0?i:60},this._unique_id=`${this.config.timer_entity}_${this.config.switch_entity}_${window.location.href}`}shouldUpdate(t){if(!this.config)return!1;if(t.has("_timeRemaining"))return!0;const e=ot(this,this.config?.timer_entity,t,!1),i=ot(this,this.config?.switch_entity,t,!1);return e||i}updated(t){if(super.updated(t),t.has("hass")){const e=this.config?.timer_entity,i=this.hass?.states[e],s=t.get("hass"),n=s?.states[e];if(n!==i){if(this._startInterval(i),"active"===n?.state&&"active"!==i?.state){const t=this.hass.states[this.config.switch_entity];this.toggleSwitch(t,!1)}}else i||this._clearInterval()}}_startIconLongPressTimer(t){this._longPressed=!1,this._longPressTimer=setTimeout((()=>{this._longPressed=!0,this.open_more_info(t.entity_id)}),500)}_handleOnIconMouseDown(t){this._startIconLongPressTimer(t)}_handleOnIconTouchStart(t){this._startIconLongPressTimer(t)}_handleOnIconMouseUp(t){clearTimeout(this._longPressTimer)}_handleOnIconTouchEnd(t){clearTimeout(this._longPressTimer)}_handleOnIconClick(t,e){this._longPressed||this.toggleSwitch(e,"on"!==e.state),t.preventDefault(),t.stopPropagation()}openCustomTimerDialog(t){const e=document.createElement("switch-timer-duration-dialog");e.hass=this.hass,e.showDialog({defaultMinutes:90,onStart:e=>this.buttonClicked(t,e)}),document.body.appendChild(e)}_clearInterval(){this._interval&&(window.clearInterval(this._interval),this._interval=void 0)}_startInterval(t){this._clearInterval(),this._updateRemainingTime(t),"active"==this.hass.states[this.config.timer_entity]?.state&&(this._interval=window.setInterval((()=>this._updateRemainingTime(t)),1e3))}_updateRemainingTime(t){const e=(new Date).getTime()/1e3,i=t?.attributes?.finishes_at;if(null==i)return void(this._timeRemaining=void 0);const s=new Date(i).getTime()/1e3-e;this._timeRemaining=Math.floor(s)}_padNumber(t){return String(Math.floor(t)).padStart(2,"0")}_humanReadableSeconds(t){if(!t)return"-";const e=Math.floor(t/60),i=t%60;return`${this._padNumber(e)}:${this._padNumber(i)}`}_calculateTimerProgress(t,e){const i=t?.attributes?.duration;if(!i||!e)return 100;const s=i.split(":");return e/(60*parseInt(s[0])*60+60*parseInt(s[1])+parseInt(s[2]))*100}render(){if(!this.hass||!this.config)return H``;const t=this.hass.states[this.config.switch_entity];if(!t)return H`<ha-card
        >Unknown entity ${this.config.switch_entity}</ha-card
      >`;const e=this.hass.states[this.config.timer_entity];return e?H`
      <ha-card class=${"on"===t.state?"active-color":""}>
        <div class="container">
          <div class="header" @click=${this.toggleMinimized}>
            <div
              class="header-icon"
              @click=${e=>this._handleOnIconClick(e,t)}
              @mousedown=${()=>this._handleOnIconMouseDown(t)}
              @mouseup=${()=>this._handleOnIconMouseUp(t)}
              @touchstart=${()=>this._handleOnIconTouchStart(t)}
              @touchend=${()=>this._handleOnIconTouchEnd(t)}
              @contextmenu=${t=>{t.stopPropagation(),t.preventDefault()}}>
              <ha-icon id="radiator-icon" icon="mdi:radiator"></ha-icon>
            </div>
            <div class="header-title">
              ${this.config.title||t.attributes.friendly_name||t.attributes.entity_id}
              <div class="header-minimized-timer">
                ${this._timeRemaining?this._humanReadableSeconds(this._timeRemaining):"Off"}
              </div>
            </div>
            <div
              class="icon-button"
              @click=${t=>{t.stopPropagation(),this.open_more_info(e.entity_id)}}>
              <ha-icon id="timer" icon="mdi:timer-sand"></ha-icon>
            </div>
            <div
              class="icon-button"
              @click=${t=>{t.stopPropagation(),this.toggleMinimized()}}>
              <ha-icon
                id="minimize_icon"
                icon="${this._minimized?"mdi:chevron-down":"mdi:chevron-up"}"></ha-icon>
            </div>
          </div>

          <div class="card-content ${this._minimized&&"minimized"}">
            ${this._minimized?H``:H`
                  ${"active"==e.state?H` <div class="entity-row progress-container">
                        <progress
                          class="progress-bar"
                          max="100"
                          value="${this._calculateTimerProgress(e,this._timeRemaining)}"></progress>
                        <div
                          class="icon-button"
                          @click=${()=>this.cancelButtonClicked(e)}>
                          <ha-icon
                            id="cancel-timer-icon"
                            icon="mdi:close"></ha-icon>
                        </div>
                      </div>`:H``}

                  <div class="timer-button-container">
                    <button
                      class="timer-button"
                      @click=${()=>this.buttonClicked(e,this.config.preset_1)}>
                      ${this.config.preset_1} ${1===this.config.preset_1?"min":"mins"}
                    </button>
                    <button
                      class="timer-button"
                      @click=${()=>this.buttonClicked(e,this.config.preset_2)}>
                      ${this.config.preset_2} ${1===this.config.preset_2?"min":"mins"}
                    </button>
                    <button
                      class="timer-button"
                      @click=${()=>this.openCustomTimerDialog(e)}>
                      Custom
                    </button>
                  </div>
                `}
          </div>
        </div>
      </ha-card>
    `:H`<ha-card
        >Unknown entity ${this.config.timer_entity}</ha-card
      >`}buttonClicked(t,e){const i=this.hass.states[this.config.switch_entity];this.toggleSwitch(i,!0),this.hass.callService("timer","start",{duration:`00:${e}:00`,entity_id:t.entity_id})}cancelButtonClicked(t){this.hass.callService("timer","cancel",{entity_id:t.entity_id});const e=this.hass.states[this.config.switch_entity];this.toggleSwitch(e,!1)}getLocalStorageKey(){return`switch-timer-card:minimized:${this._unique_id||`${this.config?.timer_entity}_${this.config?.switch_entity}`}`}toggleMinimized(){this._minimized=!this._minimized,localStorage.setItem(this.getLocalStorageKey(),String(this._minimized)),this.requestUpdate()}toggleSwitch(t,e){t&&this.hass.callService("homeassistant",e?"turn_on":"turn_off",{entity_id:t.entity_id})}open_more_info(t){this.dispatchEvent(new CustomEvent("hass-more-info",{bubbles:!0,composed:!0,detail:{entityId:t}}))}}customElements.define("switch-timer-card",at);class lt extends st{static properties={hass:{},_open:{state:!0},_value:{state:!0},_params:{state:!0}};static styles=o`
    .content {
      display: flex;
      flex-direction: column;
      gap: 16px;
      min-width: 260px;
    }
    .quick {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }
    .custom {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    input[type='number'] {
      width: 90px;
    }
  `;showDialog(t){this._params=t,this._value=t?.defaultMinutes??90,this._open=!0,this.requestUpdate()}_setQuick(t){this._value=t}_start(){const t=Math.floor(Number(this._value));!Number.isFinite(t)||t<=0||(this._params?.onStart?.(t),this._close())}_close(){this._open=!1,this.remove()}render(){return this._open?H`
      <ha-dialog
        open
        .heading=${"Set timer duration"}
        @closed=${()=>this._close()}>
        <div class="content">
          <div class="custom">
            <label for="custom-minutes">Custom:</label>
            <input
              id="custom-minutes"
              type="number"
              min="1"
              step="1"
              .value=${String(this._value??"")}
              @input=${t=>this._value=Number(t.target.value)} />
            <span>${1===this._value?"min":"mins"}</span>
          </div>
        </div>

        <ha-button slot="secondaryAction" dialogAction="cancel">
          Cancel
        </ha-button>
        <ha-button slot="primaryAction" @click=${this._start}>
          Start
        </ha-button>
      </ha-dialog>
    `:H``}}customElements.get("switch-timer-duration-dialog")||customElements.define("switch-timer-duration-dialog",lt);export{ot as hasConfigOrEntityChanged};
