import{LitElement as t,html as i,css as e}from"https://unpkg.com/lit?module";function n(t,i,e,n){if(e.has("config")||n)return!0;if(i){const n=e.get("hass");return!n||n.states[i]!==t.hass?.states[i]}return!1}class o extends t{static styles=(t=>t`
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
`)(e);async firstUpdated(){this.loadEntityPicker()}setConfig(t){this._config=t}configChanged(t){const i=new Event("config-changed",{bubbles:!0,composed:!0});i.detail={config:t},this.dispatchEvent(i)}updateSwitchEntity(t){this._config.switch_entity=t,this.configChanged(this._config)}updateTimerEntity(t){this._config.timer_entity=t,this.configChanged(this._config)}updateTitle(t){this._config.title=t,this.configChanged(this._config)}async loadEntityPicker(){const t=this.shadowRoot?.customElements;if(!t)return;if(t.get("ha-entity-picker"))return;const i=await window.loadCardHelpers(),e=await i.createCardElement({type:"entities",entities:[]});await e.constructor.getConfigElement();const n=window.customElements.get("ha-entity-picker");t.define("ha-entity-picker",n)}render(){return i`
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
          ${Object.keys(this.hass.states).filter((t=>t.startsWith("switch."))).sort().map((t=>i`
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
          ${Object.keys(this.hass.states).filter((t=>t.startsWith("timer."))).sort().map((t=>i`
                <option class="entity-picker-item" value=${t}>
                  ${this.hass.states[t].attributes.friendly_name||t}
                </option>
              `))}
        </datalist>
      </paper-input-container>

      
    </div>
    `}}customElements.define("content-card-editor",o),window.customCards=window.customCards||[],window.customCards.push({type:"switch-timer-card",name:"Switch timer card",preview:!0,description:"Card to turn ON a switch for a given time indicated by a timer"});class a extends t{static styles=function(t){return t`
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
  `}(e);_longPressTimer;_longPressed=!1;static get properties(){return{hass:{},config:{},_timeRemaining:0,_interval:void 0,_unique_id:void 0,_minimized:!0}}connectedCallback(){super.connectedCallback(),this._minimized="true"===localStorage.getItem(this.getLocalStorageKey())}static getConfigElement(){return document.createElement("content-card-editor")}setConfig(t){if(!t.switch_entity)throw new Error("You need to define param 'switch_entity'");if(!t.timer_entity)throw new Error("You need to define param 'timer_entity'");this.config=t,this._unique_id=`${t.timer_entity}_${t.switch_entity}_${window.location.href}`}shouldUpdate(t){if(!this.config)return!1;if(t.has("_timeRemaining"))return!0;const i=n(this,this.config?.timer_entity,t,!1),e=n(this,this.config?.switch_entity,t,!1);return i||e}updated(t){if(super.updated(t),t.has("hass")){const i=this.hass?.states[this.config?.timer_entity],e=t.get("hass")?.states[this.config?.timer_entity];e!==i?this._startInterval(i):i||this._clearInterval()}}_startIconLongPressTimer(t){this._longPressed=!1,this._longPressTimer=setTimeout((()=>{this._longPressed=!0,this.open_more_info(t.entity_id)}),500)}_handleOnIconMouseDown(t){this._startIconLongPressTimer(t)}_handleOnIconTouchStart(t){this._startIconLongPressTimer(t)}_handleOnIconMouseUp(t){clearTimeout(this._longPressTimer)}_handleOnIconTouchEnd(t){clearTimeout(this._longPressTimer)}_handleOnIconClick(t,i){this._longPressed||this.toggleSwitch(i,"on"!==i.state),t.preventDefault(),t.stopPropagation()}_clearInterval(){this._interval&&(window.clearInterval(this._interval),this._interval=void 0)}_startInterval(t){this._clearInterval(),this._updateRemainingTime(t),"active"==this.hass.states[this.config.timer_entity]?.state&&(this._interval=window.setInterval((()=>this._updateRemainingTime(t)),1e3))}_updateRemainingTime(t){const i=(new Date).getTime()/1e3,e=t?.attributes?.finishes_at;if(null==e)return void(this._timeRemaining=void 0);const n=new Date(e).getTime()/1e3-i;this._timeRemaining=Math.floor(n)}_padNumber(t){return String(Math.floor(t)).padStart(2,"0")}_humanReadableSeconds(t){return t?t<60?t:`${this._padNumber(t/60)}:${this._padNumber(t%60)}`:"-"}_calculateTimerProgress(t,i){const e=t?.attributes?.duration;if(!e||!i)return 100;const n=e.split(":");return i/(60*parseInt(n[0])*60+60*parseInt(n[1])+parseInt(n[2]))*100}render(){if(!this.hass||!this.config)return i``;const t=this.hass.states[this.config.switch_entity];if(!t)return i`<ha-card
        >Unknown entity ${this.config.switch_entity}</ha-card
      >`;const e=this.hass.states[this.config.timer_entity];return e?i`
      <ha-card class=${"on"===t.state?"active-color":""}>
        <div class="container">
          <div class="header" @click=${this.toggleMinimized}>
            <div
              class="header-icon"
              @click=${i=>this._handleOnIconClick(i,t)}
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
            ${this._minimized?i``:i`
                  ${"active"==e.state?i` <div class="entity-row progress-container">
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
                      </div>`:i``}

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
    `:i`<ha-card
        >Unknown entity ${this.config.timer_entity}</ha-card
      >`}buttonClicked(t,i){this.hass.callService("timer","start",{duration:`00:${i}:00`,entity_id:t.entity_id})}cancelButtonClicked(t){this.hass.callService("timer","finish",{entity_id:t.entity_id})}toggleSwitch(t,i){i?this.hass.callService("switch","turn_on",{entity_id:t.entity_id}):this.hass.callService("switch","turn_off",{entity_id:t.entity_id})}getLocalStorageKey(){return`switch-timer-card_${this._unique_id}`}toggleMinimized(){this._minimized=!this._minimized,localStorage.setItem(this.getLocalStorageKey(),this._minimized)}open_more_info(t){const i=new Event("hass-more-info",{bubbles:!0,cancelable:!0,composed:!0});i.detail={entityId:t},this.dispatchEvent(i)}}customElements.define("switch-timer-card",a);export{n as hasConfigOrEntityChanged};
