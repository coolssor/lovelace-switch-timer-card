/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,e=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,i=Symbol(),s=new WeakMap;let n=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==i)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const i=this.t;if(e&&void 0===t){const e=void 0!==i&&1===i.length;e&&(t=s.get(i)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&s.set(i,t))}return t}toString(){return this.cssText}};const o=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new n("string"==typeof t?t:t+"",void 0,i))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:r,defineProperty:a,getOwnPropertyDescriptor:h,getOwnPropertyNames:c,getOwnPropertySymbols:l,getPrototypeOf:d}=Object,p=globalThis,u=p.trustedTypes,_=u?u.emptyScript:"",$=p.reactiveElementPolyfillSupport,g=(t,e)=>t,m={toAttribute(t,e){switch(e){case Boolean:t=t?_:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},f=(t,e)=>!r(t,e),y={attribute:!0,type:String,converter:m,reflect:!1,hasChanged:f};Symbol.metadata??=Symbol("metadata"),p.litPropertyMetadata??=new WeakMap;let v=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=y){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&a(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=h(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return s?.call(this)},set(e){const o=s?.call(this);n.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y}static _$Ei(){if(this.hasOwnProperty(g("elementProperties")))return;const t=d(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(g("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(g("properties"))){const t=this.properties,e=[...c(t),...l(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(o(t))}else void 0!==t&&e.push(o(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$ES??=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$ES?.splice(this._$ES.indexOf(t)>>>0,1)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const i=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((i,s)=>{if(e)i.adoptedStyleSheets=s.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of s){const s=document.createElement("style"),n=t.litNonce;void 0!==n&&s.setAttribute("nonce",n),s.textContent=e.cssText,i.appendChild(s)}})(i,this.constructor.elementStyles),i}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$ES?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:m).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:m;this._$Em=s,this[s]=n.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i,s=!1,n){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??f)(s?n:this[t],e))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$ES?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$ES?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EO(t,this[t]))),this._$ET()}updated(t){}firstUpdated(t){}};v.elementStyles=[],v.shadowRootOptions={mode:"open"},v[g("elementProperties")]=new Map,v[g("finalized")]=new Map,$?.({ReactiveElement:v}),(p.reactiveElementVersions??=[]).push("2.0.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const A=globalThis,b=A.trustedTypes,w=b?b.createPolicy("lit-html",{createHTML:t=>t}):void 0,E="$lit$",S=`lit$${(Math.random()+"").slice(9)}$`,x="?"+S,C=`<${x}>`,P=document,T=()=>P.createComment(""),k=t=>null===t||"object"!=typeof t&&"function"!=typeof t,U=Array.isArray,H="[ \t\n\f\r]",N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,M=/>/g,R=RegExp(`>|${H}(?:([^\\s"'>=/]+)(${H}*=${H}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),I=/'/g,z=/"/g,L=/^(?:script|style|textarea|title)$/i,j=Symbol.for("lit-noChange"),D=Symbol.for("lit-nothing"),B=new WeakMap,W=P.createTreeWalker(P,129);function V(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==w?w.createHTML(e):e}let q=class t{constructor({strings:e,_$litType$:i},s){let n;this.parts=[];let o=0,r=0;const a=e.length-1,h=this.parts,[c,l]=((t,e)=>{const i=t.length-1,s=[];let n,o=2===e?"<svg>":"",r=N;for(let e=0;e<i;e++){const i=t[e];let a,h,c=-1,l=0;for(;l<i.length&&(r.lastIndex=l,h=r.exec(i),null!==h);)l=r.lastIndex,r===N?"!--"===h[1]?r=O:void 0!==h[1]?r=M:void 0!==h[2]?(L.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=R):void 0!==h[3]&&(r=R):r===R?">"===h[0]?(r=n??N,c=-1):void 0===h[1]?c=-2:(c=r.lastIndex-h[2].length,a=h[1],r=void 0===h[3]?R:'"'===h[3]?z:I):r===z||r===I?r=R:r===O||r===M?r=N:(r=R,n=void 0);const d=r===R&&t[e+1].startsWith("/>")?" ":"";o+=r===N?i+C:c>=0?(s.push(a),i.slice(0,c)+E+i.slice(c)+S+d):i+S+(-2===c?e:d)}return[V(t,o+(t[i]||"<?>")+(2===e?"</svg>":"")),s]})(e,i);if(this.el=t.createElement(c,s),W.currentNode=this.el.content,2===i){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(n=W.nextNode())&&h.length<a;){if(1===n.nodeType){if(n.hasAttributes())for(const t of n.getAttributeNames())if(t.endsWith(E)){const e=l[r++],i=n.getAttribute(t).split(S),s=/([.?@])?(.*)/.exec(e);h.push({type:1,index:o,name:s[2],strings:i,ctor:"."===s[1]?F:"?"===s[1]?G:"@"===s[1]?Q:Y}),n.removeAttribute(t)}else t.startsWith(S)&&(h.push({type:6,index:o}),n.removeAttribute(t));if(L.test(n.tagName)){const t=n.textContent.split(S),e=t.length-1;if(e>0){n.textContent=b?b.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],T()),W.nextNode(),h.push({type:2,index:++o});n.append(t[e],T())}}}else if(8===n.nodeType)if(n.data===x)h.push({type:2,index:o});else{let t=-1;for(;-1!==(t=n.data.indexOf(S,t+1));)h.push({type:7,index:o}),t+=S.length-1}o++}}static createElement(t,e){const i=P.createElement("template");return i.innerHTML=t,i}};function K(t,e,i=t,s){if(e===j)return e;let n=void 0!==s?i._$Co?.[s]:i._$Cl;const o=k(e)?void 0:e._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(t),n._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=n:i._$Cl=n),void 0!==n&&(e=K(t,n._$AS(t,e.values),n,s)),e}let Z=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??P).importNode(e,!0);W.currentNode=s;let n=W.nextNode(),o=0,r=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new J(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new X(n,this,t)),this._$AV.push(e),a=i[++r]}o!==a?.index&&(n=W.nextNode(),o++)}return W.currentNode=P,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}},J=class t{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=D,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=K(this,t,e),k(t)?t===D||null==t||""===t?(this._$AH!==D&&this._$AR(),this._$AH=D):t!==this._$AH&&t!==j&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>U(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==D&&k(this._$AH)?this._$AA.nextSibling.data=t:this.$(P.createTextNode(t)),this._$AH=t}g(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=q.createElement(V(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Z(s,this),i=t.u(this.options);t.p(e),this.$(i),this._$AH=t}}_$AC(t){let e=B.get(t.strings);return void 0===e&&B.set(t.strings,e=new q(t)),e}T(e){U(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,n=0;for(const o of e)n===i.length?i.push(s=new t(this.k(T()),this.k(T()),this,this.options)):s=i[n],s._$AI(o),n++;n<i.length&&(this._$AR(s&&s._$AB.nextSibling,n),i.length=n)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}},Y=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=D,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=D}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=K(this,t,e,0),o=!k(t)||t!==this._$AH&&t!==j,o&&(this._$AH=t);else{const s=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=K(this,s[i+r],e,r),a===j&&(a=this._$AH[r]),o||=!k(a)||a!==this._$AH[r],a===D?t=D:t!==D&&(t+=(a??"")+n[r+1]),this._$AH[r]=a}o&&!s&&this.j(t)}j(t){t===D?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},F=class extends Y{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===D?void 0:t}},G=class extends Y{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==D)}},Q=class extends Y{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=K(this,t,e,0)??D)===j)return;const i=this._$AH,s=t===D&&i!==D||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==D&&(i===D||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}},X=class{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){K(this,t)}};const tt=A.litHtmlPolyfillSupport;tt?.(q,J),(A.litHtmlVersions??=[]).push("3.0.1");
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const et=globalThis,it=et.ShadowRoot&&(void 0===et.ShadyCSS||et.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,st=Symbol(),nt=new WeakMap;let ot=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==st)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(it&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=nt.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&nt.set(e,t))}return t}toString(){return this.cssText}};const rt=(t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new ot(i,t,st)},at=it?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new ot("string"==typeof t?t:t+"",void 0,st))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,{is:ht,defineProperty:ct,getOwnPropertyDescriptor:lt,getOwnPropertyNames:dt,getOwnPropertySymbols:pt,getPrototypeOf:ut}=Object,_t=globalThis,$t=_t.trustedTypes,gt=$t?$t.emptyScript:"",mt=_t.reactiveElementPolyfillSupport,ft=(t,e)=>t,yt={toAttribute(t,e){switch(e){case Boolean:t=t?gt:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},vt=(t,e)=>!ht(t,e),At={attribute:!0,type:String,converter:yt,reflect:!1,hasChanged:vt};Symbol.metadata??=Symbol("metadata"),_t.litPropertyMetadata??=new WeakMap;class bt extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=At){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);void 0!==s&&ct(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:n}=lt(this.prototype,t)??{get(){return this[e]},set(t){this[e]=t}};return{get(){return s?.call(this)},set(e){const o=s?.call(this);n.call(this,e),this.requestUpdate(t,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??At}static _$Ei(){if(this.hasOwnProperty(ft("elementProperties")))return;const t=ut(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(ft("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ft("properties"))){const t=this.properties,e=[...dt(t),...pt(t)];for(const i of e)this.createProperty(i,t[i])}const t=this[Symbol.metadata];if(null!==t){const e=litPropertyMetadata.get(t);if(void 0!==e)for(const[t,i]of e)this.elementProperties.set(t,i)}this._$Eh=new Map;for(const[t,e]of this.elementProperties){const i=this._$Eu(t,e);void 0!==i&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(at(t))}else void 0!==t&&e.push(at(t));return e}static _$Eu(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$ES??=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$ES?.splice(this._$ES.indexOf(t)>>>0,1)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{if(it)t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const i of e){const e=document.createElement("style"),s=et.litNonce;void 0!==s&&e.setAttribute("nonce",s),e.textContent=i.cssText,t.appendChild(e)}})(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$ES?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e){const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(void 0!==s&&!0===i.reflect){const n=(void 0!==i.converter?.toAttribute?i.converter:yt).toAttribute(e,i.type);this._$Em=t,null==n?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){const i=this.constructor,s=i._$Eh.get(t);if(void 0!==s&&this._$Em!==s){const t=i.getPropertyOptions(s),n="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:yt;this._$Em=s,this[s]=n.fromAttribute(e,t.type),this._$Em=null}}requestUpdate(t,e,i,s=!1,n){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??vt)(s?n:this[t],e))return;this.C(t,e,i)}!1===this.isUpdatePending&&(this._$Eg=this._$EP())}C(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[t,e]of this._$Ep)this[t]=e;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[e,i]of t)!0!==i.wrapped||this._$AL.has(e)||void 0===this[e]||this.C(e,this[e],i)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$ES?.forEach((t=>t.hostUpdate?.())),this.update(e)):this._$ET()}catch(e){throw t=!1,this._$ET(),e}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$ES?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$ET(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EO(t,this[t]))),this._$ET()}updated(t){}firstUpdated(t){}}bt.elementStyles=[],bt.shadowRootOptions={mode:"open"},bt[ft("elementProperties")]=new Map,bt[ft("finalized")]=new Map,mt?.({ReactiveElement:bt}),(_t.reactiveElementVersions??=[]).push("2.0.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const wt=globalThis,Et=wt.trustedTypes,St=Et?Et.createPolicy("lit-html",{createHTML:t=>t}):void 0,xt="$lit$",Ct=`lit$${(Math.random()+"").slice(9)}$`,Pt="?"+Ct,Tt=`<${Pt}>`,kt=document,Ut=()=>kt.createComment(""),Ht=t=>null===t||"object"!=typeof t&&"function"!=typeof t,Nt=Array.isArray,Ot="[ \t\n\f\r]",Mt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Rt=/-->/g,It=/>/g,zt=RegExp(`>|${Ot}(?:([^\\s"'>=/]+)(${Ot}*=${Ot}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),Lt=/'/g,jt=/"/g,Dt=/^(?:script|style|textarea|title)$/i,Bt=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),Wt=Symbol.for("lit-noChange"),Vt=Symbol.for("lit-nothing"),qt=new WeakMap,Kt=kt.createTreeWalker(kt,129);function Zt(t,e){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==St?St.createHTML(e):e}const Jt=(t,e)=>{const i=t.length-1,s=[];let n,o=2===e?"<svg>":"",r=Mt;for(let e=0;e<i;e++){const i=t[e];let a,h,c=-1,l=0;for(;l<i.length&&(r.lastIndex=l,h=r.exec(i),null!==h);)l=r.lastIndex,r===Mt?"!--"===h[1]?r=Rt:void 0!==h[1]?r=It:void 0!==h[2]?(Dt.test(h[2])&&(n=RegExp("</"+h[2],"g")),r=zt):void 0!==h[3]&&(r=zt):r===zt?">"===h[0]?(r=n??Mt,c=-1):void 0===h[1]?c=-2:(c=r.lastIndex-h[2].length,a=h[1],r=void 0===h[3]?zt:'"'===h[3]?jt:Lt):r===jt||r===Lt?r=zt:r===Rt||r===It?r=Mt:(r=zt,n=void 0);const d=r===zt&&t[e+1].startsWith("/>")?" ":"";o+=r===Mt?i+Tt:c>=0?(s.push(a),i.slice(0,c)+xt+i.slice(c)+Ct+d):i+Ct+(-2===c?e:d)}return[Zt(t,o+(t[i]||"<?>")+(2===e?"</svg>":"")),s]};class Yt{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,o=0;const r=t.length-1,a=this.parts,[h,c]=Jt(t,e);if(this.el=Yt.createElement(h,i),Kt.currentNode=this.el.content,2===e){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes)}for(;null!==(s=Kt.nextNode())&&a.length<r;){if(1===s.nodeType){if(s.hasAttributes())for(const t of s.getAttributeNames())if(t.endsWith(xt)){const e=c[o++],i=s.getAttribute(t).split(Ct),r=/([.?@])?(.*)/.exec(e);a.push({type:1,index:n,name:r[2],strings:i,ctor:"."===r[1]?te:"?"===r[1]?ee:"@"===r[1]?ie:Xt}),s.removeAttribute(t)}else t.startsWith(Ct)&&(a.push({type:6,index:n}),s.removeAttribute(t));if(Dt.test(s.tagName)){const t=s.textContent.split(Ct),e=t.length-1;if(e>0){s.textContent=Et?Et.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],Ut()),Kt.nextNode(),a.push({type:2,index:++n});s.append(t[e],Ut())}}}else if(8===s.nodeType)if(s.data===Pt)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(Ct,t+1));)a.push({type:7,index:n}),t+=Ct.length-1}n++}}static createElement(t,e){const i=kt.createElement("template");return i.innerHTML=t,i}}function Ft(t,e,i=t,s){if(e===Wt)return e;let n=void 0!==s?i._$Co?.[s]:i._$Cl;const o=Ht(e)?void 0:e._$litDirective$;return n?.constructor!==o&&(n?._$AO?.(!1),void 0===o?n=void 0:(n=new o(t),n._$AT(t,i,s)),void 0!==s?(i._$Co??=[])[s]=n:i._$Cl=n),void 0!==n&&(e=Ft(t,n._$AS(t,e.values),n,s)),e}class Gt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=(t?.creationScope??kt).importNode(e,!0);Kt.currentNode=s;let n=Kt.nextNode(),o=0,r=0,a=i[0];for(;void 0!==a;){if(o===a.index){let e;2===a.type?e=new Qt(n,n.nextSibling,this,t):1===a.type?e=new a.ctor(n,a.name,a.strings,this,t):6===a.type&&(e=new se(n,this,t)),this._$AV.push(e),a=i[++r]}o!==a?.index&&(n=Kt.nextNode(),o++)}return Kt.currentNode=kt,s}p(t){let e=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class Qt{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=Vt,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=s?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t?.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=Ft(this,t,e),Ht(t)?t===Vt||null==t||""===t?(this._$AH!==Vt&&this._$AR(),this._$AH=Vt):t!==this._$AH&&t!==Wt&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):(t=>Nt(t)||"function"==typeof t?.[Symbol.iterator])(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==Vt&&Ht(this._$AH)?this._$AA.nextSibling.data=t:this.$(kt.createTextNode(t)),this._$AH=t}g(t){const{values:e,_$litType$:i}=t,s="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=Yt.createElement(Zt(i.h,i.h[0]),this.options)),i);if(this._$AH?._$AD===s)this._$AH.p(e);else{const t=new Gt(s,this),i=t.u(this.options);t.p(e),this.$(i),this._$AH=t}}_$AC(t){let e=qt.get(t.strings);return void 0===e&&qt.set(t.strings,e=new Yt(t)),e}T(t){Nt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new Qt(this.k(Ut()),this.k(Ut()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t))}}class Xt{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,n){this.type=1,this._$AH=Vt,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=Vt}_$AI(t,e=this,i,s){const n=this.strings;let o=!1;if(void 0===n)t=Ft(this,t,e,0),o=!Ht(t)||t!==this._$AH&&t!==Wt,o&&(this._$AH=t);else{const s=t;let r,a;for(t=n[0],r=0;r<n.length-1;r++)a=Ft(this,s[i+r],e,r),a===Wt&&(a=this._$AH[r]),o||=!Ht(a)||a!==this._$AH[r],a===Vt?t=Vt:t!==Vt&&(t+=(a??"")+n[r+1]),this._$AH[r]=a}o&&!s&&this.j(t)}j(t){t===Vt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class te extends Xt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Vt?void 0:t}}class ee extends Xt{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Vt)}}class ie extends Xt{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){if((t=Ft(this,t,e,0)??Vt)===Wt)return;const i=this._$AH,s=t===Vt&&i!==Vt||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,n=t!==Vt&&(i===Vt||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class se{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){Ft(this,t)}}const ne=wt.litHtmlPolyfillSupport;ne?.(Yt,Qt),(wt.litHtmlVersions??=[]).push("3.0.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class oe extends bt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{const s=i?.renderBefore??e;let n=s._$litPart$;if(void 0===n){const t=i?.renderBefore??null;s._$litPart$=n=new Qt(e.insertBefore(Ut(),t),t,void 0,i??{})}return n._$AI(t),n})(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Wt}}oe._$litElement$=!0,oe.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:oe});const re=globalThis.litElementPolyfillSupport;re?.({LitElement:oe}),(globalThis.litElementVersions??=[]).push("4.0.1");function ae(t,e,i,s){if(i.has("config")||s)return!0;if(e){const s=i.get("hass");return!s||s.states[e]!==t.hass?.states[e]}return!1}class he extends oe{static styles=(t=>t`
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
`)(rt);async firstUpdated(){this.loadEntityPicker()}setConfig(t){this._config=t}configChanged(t){const e=new Event("config-changed",{bubbles:!0,composed:!0});e.detail={config:t},this.dispatchEvent(e)}updateSwitchEntity(t){this._config.switch_entity=t,this.configChanged(this._config)}updateTimerEntity(t){this._config.timer_entity=t,this.configChanged(this._config)}updateTitle(t){this._config.title=t,this.configChanged(this._config)}async loadEntityPicker(){const t=this.shadowRoot?.customElements;if(!t)return;if(t.get("ha-entity-picker"))return;const e=await window.loadCardHelpers(),i=await e.createCardElement({type:"entities",entities:[]});await i.constructor.getConfigElement();const s=window.customElements.get("ha-entity-picker");t.define("ha-entity-picker",s)}render(){return Bt`
    <div class="container">

    <ha-entity-picker
      .hass=${this.hass} 
      .configValue=${"picker_entity"} 
      // .value=${this._picker_entity} 
      name="PickerEntity"
      label="Entity Current Conditions (Required)" 
      allow-custom-entity 
      // @value-changed=${this._valueChangedPicker}>
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
            placeholder="Switch entity"
            @change=${t=>this.updateSwitchEntity(t.target.value)}
        />
        <datalist id="switch_entities">
          ${Object.keys(this.hass.states).filter((t=>t.startsWith("switch."))).sort().map((t=>Bt`
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
          ${Object.keys(this.hass.states).filter((t=>t.startsWith("timer."))).sort().map((t=>Bt`
                <option class="entity-picker-item" value=${t}>
                  ${this.hass.states[t].attributes.friendly_name||t}
                </option>
              `))}
        </datalist>
      </paper-input-container>

      
    </div>
    `}}customElements.define("content-card-editor",he),window.customCards=window.customCards||[],window.customCards.push({type:"switch-timer-card",name:"Switch timer card",preview:!0,description:"Card to turn ON a switch for a given time indicated by a timer"});class ce extends oe{static styles=function(t){return t`
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
      padding: 4px 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      cursor: pointer;
    }
    #radiator-icon {
      color: var(--my-icon-color);
      position: relative;
      padding: 8px;
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
      margin-left: 12px;
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
      padding: 4px 8px;
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
  `}(rt);_longPressTimer;_longPressed=!1;static get properties(){return{hass:{},config:{},_timeRemaining:0,_interval:void 0,_unique_id:void 0,_minimized:!0}}connectedCallback(){super.connectedCallback(),this._minimized="true"===localStorage.getItem(this.getLocalStorageKey())}static getConfigElement(){return document.createElement("content-card-editor")}setConfig(t){if(!t.switch_entity)throw new Error("You need to define param 'switch_entity'");if(!t.timer_entity)throw new Error("You need to define param 'timer_entity'");this.config=t,this._unique_id=`${t.timer_entity}_${t.switch_entity}_${window.location.href}`}shouldUpdate(t){if(!this.config)return!1;if(t.has("_timeRemaining"))return!0;const e=ae(this,this.config?.timer_entity,t,!1),i=ae(this,this.config?.switch_entity,t,!1);return e||i}updated(t){if(super.updated(t),t.has("hass")){const e=this.hass?.states[this.config?.timer_entity],i=t.get("hass")?.states[this.config?.timer_entity];i!==e?this._startInterval(e):e||this._clearInterval()}}_startIconLongPressTimer(t){this._longPressed=!1,this._longPressTimer=setTimeout((()=>{this._longPressed=!0,this.open_more_info(t.entity_id)}),500)}_handleOnIconMouseDown(t){this._startIconLongPressTimer(t)}_handleOnIconTouchStart(t){this._startIconLongPressTimer(t)}_handleOnIconMouseUp(t){clearTimeout(this._longPressTimer)}_handleOnIconTouchEnd(t){clearTimeout(this._longPressTimer)}_handleOnIconClick(t,e){this._longPressed||this.toggleSwitch(e,"on"!==e.state),t.preventDefault(),t.stopPropagation()}_clearInterval(){this._interval&&(window.clearInterval(this._interval),this._interval=void 0)}_startInterval(t){this._clearInterval(),this._updateRemainingTime(t),"active"==this.hass.states[this.config.timer_entity]?.state&&(this._interval=window.setInterval((()=>this._updateRemainingTime(t)),1e3))}_updateRemainingTime(t){const e=(new Date).getTime()/1e3,i=t?.attributes?.finishes_at;if(null==i)return void(this._timeRemaining=void 0);const s=new Date(i).getTime()/1e3-e;this._timeRemaining=Math.floor(s)}_padNumber(t){return String(Math.floor(t)).padStart(2,"0")}_humanReadableSeconds(t){return t?t<60?t:`${this._padNumber(t/60)}:${this._padNumber(t%60)}`:"-"}_calculateTimerProgress(t,e){const i=t?.attributes?.duration;if(!i||!e)return 100;const s=i.split(":");return e/(60*parseInt(s[0])*60+60*parseInt(s[1])+parseInt(s[2]))*100}render(){if(!this.hass||!this.config)return Bt``;const t=this.hass.states[this.config.switch_entity];if(!t)return Bt`<ha-card
        >Unknown entity ${this.config.switch_entity}</ha-card
      >`;const e=this.hass.states[this.config.timer_entity];return e?Bt`
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
            ${this._minimized?Bt``:Bt`
                  ${"active"==e.state?Bt` <div class="entity-row progress-container">
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
                      </div>`:Bt``}

                  <div class="timer-button-container">
                    <button
                      class="timer-button"
                      @click=${()=>this.buttonClicked(e,30)}>
                      30 min
                    </button>
                    <button
                      class="timer-button"
                      @click=${()=>this.buttonClicked(e,60)}>
                      60 min
                    </button>
                    <button
                      class="timer-button"
                      @click=${()=>this.buttonClicked(e,90)}>
                      90 min
                    </button>
                  </div>
                `}
          </div>
        </div>
      </ha-card>
    `:Bt`<ha-card
        >Unknown entity ${this.config.timer_entity}</ha-card
      >`}buttonClicked(t,e){this.hass.callService("timer","start",{duration:`00:${e}:00`,entity_id:t.entity_id})}cancelButtonClicked(t){this.hass.callService("timer","finish",{entity_id:t.entity_id})}toggleSwitch(t,e){e?this.hass.callService("switch","turn_on",{entity_id:t.entity_id}):this.hass.callService("switch","turn_off",{entity_id:t.entity_id})}getLocalStorageKey(){return`switch-timer-card_${this._unique_id}`}toggleMinimized(){this._minimized=!this._minimized,localStorage.setItem(this.getLocalStorageKey(),this._minimized)}open_more_info(t){const e=new Event("hass-more-info",{bubbles:!0,cancelable:!0,composed:!0});e.detail={entityId:t},this.dispatchEvent(e)}}customElements.define("switch-timer-card",ce);export{ae as hasConfigOrEntityChanged};
