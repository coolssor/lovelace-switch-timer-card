import { html, css, LitElement } from 'https://unpkg.com/lit?module';

import { getStyles, getEditorStyles } from './styles.js';

export function hasConfigOrEntityChanged(
  element,
  entity,
  changedProps,
  forceUpdate,
) {
  if (changedProps.has('config') || forceUpdate) {
    return true;
  }

  if (entity) {
    const oldHass = changedProps.get('hass');
    if (oldHass) {
      return oldHass.states[entity] !== element.hass?.states[entity];
    }
    return true;
  } else {
    return false;
  }
}

class ContentCardEditor extends LitElement {
  static styles = getEditorStyles(css);

  async firstUpdated() {
    this.loadEntityPicker();
  }

  setConfig(config) {
    this._config = config;
  }

  configChanged(newConfig) {
    const event = new Event('config-changed', {
      bubbles: true,
      composed: true,
    });
    event.detail = { config: newConfig };
    this.dispatchEvent(event);
  }

  updateSwitchEntity(newValue) {
    this._config.switch_entity = newValue;
    this.configChanged(this._config);
  }

  updateTimerEntity(newValue) {
    this._config.timer_entity = newValue;
    this.configChanged(this._config);
  }

  updateTitle(newValue) {
    this._config.title = newValue;
    this.configChanged(this._config);
  }

  async loadEntityPicker() {
    // Get the local customElement registry
    const registry = this.shadowRoot?.customElements;
    if (!registry) return;

    // Check if the element we want is already defined in the local scope
    if (registry.get('ha-entity-picker')) return;

    // Load in ha-entity-picker
    // This part will differ for every element you want
    const ch = await window.loadCardHelpers();
    const c = await ch.createCardElement({
      type: 'entities',
      entities: [],
    });
    await c.constructor.getConfigElement();

    // Since ha-elements are not using scopedRegistry we can get a reference to
    // the newly loaded element from the global customElement registry...
    const haEntityPicker = window.customElements.get('ha-entity-picker');

    // ... and use that reference to register the same element in the local registry
    registry.define('ha-entity-picker', haEntityPicker);
  }

  render() {
    return html`
    <div class="container">

    <ha-entity-picker
      .hass=${this.hass} 
      .configValue=${'picker_entity'} 
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
          @input=${e => this.updateTitle(e.target.value)}
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
            @change=${e => this.updateSwitchEntity(e.target.value)}
        />
        <datalist id="switch_entities">
          ${Object.keys(this.hass.states)
            .filter(entId => entId.startsWith('switch.'))
            .sort()
            .map(
              entId => html`
                <option class="entity-picker-item" value=${entId}>
                  ${this.hass.states[entId].attributes.friendly_name || entId}
                </option>
              `,
            )}
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
            @change=${e => this.updateTimerEntity(e.target.value)}
        />
        <datalist id="timer_entities">
          ${Object.keys(this.hass.states)
            .filter(entId => entId.startsWith('timer.'))
            .sort()
            .map(
              entId => html`
                <option class="entity-picker-item" value=${entId}>
                  ${this.hass.states[entId].attributes.friendly_name || entId}
                </option>
              `,
            )}
        </datalist>
      </paper-input-container>

      
    </div>
    `;
  }
}

customElements.define('content-card-editor', ContentCardEditor);
window.customCards = window.customCards || [];
window.customCards.push({
  type: 'switch-timer-card',
  name: 'Switch timer card',
  preview: true,
  description: 'Card to turn ON a switch for a given time indicated by a timer',
});

class SwitchTimerCard extends LitElement {
  static styles = getStyles(css);

  _longPressTimer;
  _longPressed = false;

  static get properties() {
    return {
      hass: {},
      config: {},
      _timeRemaining: 0,
      _interval: undefined,
      _unique_id: undefined,
      _minimized: true,
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this._minimized =
      localStorage.getItem(this.getLocalStorageKey()) === 'true';
  }

  static getConfigElement() {
    return document.createElement('content-card-editor');
  }

  setConfig(config) {
    if (!config.switch_entity) {
      throw new Error("You need to define param 'switch_entity'");
    }
    if (!config.timer_entity) {
      throw new Error("You need to define param 'timer_entity'");
    }
    this.config = config;
    this._unique_id = `${config.timer_entity}_${config.switch_entity}_${window.location.href}`;
  }

  shouldUpdate(changedProps) {
    if (!this.config) return false;
    if (changedProps.has('_timeRemaining')) return true;

    const hasChanged1 = hasConfigOrEntityChanged(
      this,
      this.config?.timer_entity,
      changedProps,
      false,
    );
    const hasChanged2 = hasConfigOrEntityChanged(
      this,
      this.config?.switch_entity,
      changedProps,
      false,
    );
    return hasChanged1 || hasChanged2;
  }

  updated(changedProps) {
    super.updated(changedProps);

    if (changedProps.has('hass')) {
      const stateObj = this.hass?.states[this.config?.timer_entity];
      const oldStateObj =
        changedProps.get('hass')?.states[this.config?.timer_entity];

      if (oldStateObj !== stateObj) {
        this._startInterval(stateObj);
      } else if (!stateObj) {
        this._clearInterval();
      }
    }
  }

  _startIconLongPressTimer(entity) {
    this._longPressed = false;
    this._longPressTimer = setTimeout(() => {
      this._longPressed = true;
      this.open_more_info(entity.entity_id);
    }, 500);
  }

  _handleOnIconMouseDown(entity) {
    this._startIconLongPressTimer(entity);
  }

  _handleOnIconTouchStart(entity) {
    this._startIconLongPressTimer(entity);
  }

  _handleOnIconMouseUp(entity) {
    clearTimeout(this._longPressTimer);
  }

  _handleOnIconTouchEnd(entity) {
    clearTimeout(this._longPressTimer);
  }

  _handleOnIconClick(event, entity) {
    if (!this._longPressed) {
      this.toggleSwitch(entity, entity.state === 'on' ? false : true);
    }
    event.preventDefault();
    event.stopPropagation();
  }

  _clearInterval() {
    if (this._interval) {
      window.clearInterval(this._interval);
      this._interval = undefined;
    }
  }

  _startInterval(stateObj) {
    this._clearInterval();
    this._updateRemainingTime(stateObj);

    if (this.hass.states[this.config.timer_entity]?.state == 'active') {
      this._interval = window.setInterval(
        () => this._updateRemainingTime(stateObj),
        1000,
      );
    }
  }

  _updateRemainingTime(stateObj) {
    const currentDate = new Date().getTime() / 1000;
    const finishesAt = stateObj?.attributes?.finishes_at;
    if (finishesAt == null) {
      this._timeRemaining = undefined;
      return;
    }
    const finishingDate = new Date(finishesAt).getTime() / 1000;
    const seconds = finishingDate - currentDate;

    this._timeRemaining = Math.floor(seconds);
  }

  _padNumber(number) {
    return String(Math.floor(number)).padStart(2, '0');
  }

  _humanReadableSeconds(seconds) {
    if (!seconds) return '-';
    if (seconds < 60) return seconds;
    if (seconds < 60 * 60) {
      return `${this._padNumber(seconds / 60)}:${this._padNumber(
        seconds % 60,
      )}`;
    }
    // TODO calculate hours
    return `${this._padNumber(seconds / 60)}:${this._padNumber(seconds % 60)}`;
  }

  _calculateTimerProgress(timerEntity, secondsRemaining) {
    const totalTime = timerEntity?.attributes?.duration;
    if (!totalTime || !secondsRemaining) return 100;
    const splits = totalTime.split(':');
    const totalSeconds =
      parseInt(splits[0]) * 60 * 60 +
      parseInt(splits[1]) * 60 +
      parseInt(splits[2]);
    return (secondsRemaining / totalSeconds) * 100;
  }

  render() {
    if (!this.hass || !this.config) {
      return html``;
    }

    const switchEntity = this.hass.states[this.config.switch_entity];
    if (!switchEntity) {
      return html`<ha-card
        >Unknown entity ${this.config.switch_entity}</ha-card
      >`;
    }

    const timerEntity = this.hass.states[this.config.timer_entity];
    if (!timerEntity) {
      return html`<ha-card
        >Unknown entity ${this.config.timer_entity}</ha-card
      >`;
    }

    // <div class="card-hint">
    //     This card controls ${switchEntity.attributes.friendly_name || switchEntity.attributes.entity_id}
    //     making use of the timer ${timerEntity.attributes.friendly_name || timerEntity.attributes.entity_id}
    // </div>

    // <div class="switch-container entity-row">
    //   <div class="entity-row-title">Manual control</div>
    //   <ha-switch
    //     @change=${(ev) => this.toggleSwitch(switchEntity, ev.currentTarget.checked)}
    //     .checked=${switchEntity.state === 'on'}
    //     haptic=true
    //   >
    //   </ha-switch>
    // </div>

    // <div class="timer-container entity-row">
    //   <div class="entity-row-title">Remaining time</div>
    //   ${this._humanReadableSeconds(this._timeRemaining)}
    // </div>

    return html`
      <ha-card class=${switchEntity.state === 'on' ? 'active-color' : ''}>
        <div class="container">
          <div class="header" @click=${this.toggleMinimized}>
            <div
              class="header-icon"
              @click=${e => this._handleOnIconClick(e, switchEntity)}
              @mousedown=${() => this._handleOnIconMouseDown(switchEntity)}
              @mouseup=${() => this._handleOnIconMouseUp(switchEntity)}
              @touchstart=${() => this._handleOnIconTouchStart(switchEntity)}
              @touchend=${() => this._handleOnIconTouchEnd(switchEntity)}
              @contextmenu=${event => {
                event.stopPropagation();
                event.preventDefault();
              }}>
              <ha-icon id="radiator-icon" icon="mdi:radiator"></ha-icon>
            </div>
            <div class="header-title">
              ${this.config.title ||
              switchEntity.attributes.friendly_name ||
              switchEntity.attributes.entity_id}
              <div class="header-minimized-timer">
                ${this._timeRemaining
                  ? this._humanReadableSeconds(this._timeRemaining)
                  : `Off`}
              </div>
            </div>
            <div
              class="icon-button"
              @click=${e => {
                e.stopPropagation();
                this.open_more_info(timerEntity.entity_id);
              }}>
              <ha-icon id="timer" icon="mdi:timer-sand"></ha-icon>
            </div>
            <div
              class="icon-button"
              @click=${e => {
                e.stopPropagation();
                this.toggleMinimized();
              }}>
              <ha-icon
                id="minimize_icon"
                icon="${this._minimized
                  ? 'mdi:chevron-down'
                  : 'mdi:chevron-up'}"></ha-icon>
            </div>
          </div>

          <div class="card-content ${this._minimized && 'minimized'}">
            ${!this._minimized
              ? html`
                  ${timerEntity.state == 'active'
                    ? html` <div class="entity-row progress-container">
                        <progress
                          class="progress-bar"
                          max="100"
                          value="${this._calculateTimerProgress(
                            timerEntity,
                            this._timeRemaining,
                          )}"></progress>
                        <div
                          class="icon-button"
                          @click=${() => this.cancelButtonClicked(timerEntity)}>
                          <ha-icon
                            id="cancel-timer-icon"
                            icon="mdi:close"></ha-icon>
                        </div>
                      </div>`
                    : html``}

                  <div class="timer-button-container">
                    <button
                      class="timer-button"
                      @click=${() => this.buttonClicked(timerEntity, 30)}>
                      30 min
                    </button>
                    <button
                      class="timer-button"
                      @click=${() => this.buttonClicked(timerEntity, 60)}>
                      60 min
                    </button>
                    <button
                      class="timer-button"
                      @click=${() => this.buttonClicked(timerEntity, 90)}>
                      90 min
                    </button>
                  </div>
                `
              : html``}
          </div>
        </div>
      </ha-card>
    `;
  }

  buttonClicked(timerEntity, minutes) {
    this.hass.callService('timer', 'start', {
      duration: `00:${minutes}:00`,
      entity_id: timerEntity.entity_id,
    });
  }

  cancelButtonClicked(timerEntity) {
    this.hass.callService('timer', 'finish', {
      entity_id: timerEntity.entity_id,
    });
  }

  toggleSwitch(switchEntity, state) {
    if (state) {
      this.hass.callService('switch', 'turn_on', {
        entity_id: switchEntity.entity_id,
      });
    } else {
      this.hass.callService('switch', 'turn_off', {
        entity_id: switchEntity.entity_id,
      });
    }
  }

  getLocalStorageKey() {
    return `switch-timer-card_${this._unique_id}`;
  }

  toggleMinimized() {
    this._minimized = !this._minimized;
    localStorage.setItem(this.getLocalStorageKey(), this._minimized);
  }

  open_more_info(entity_id) {
    const event = new Event('hass-more-info', {
      bubbles: true,
      cancelable: true,
      composed: true,
    });
    event.detail = { entityId: entity_id };
    this.dispatchEvent(event);
  }
}

customElements.define('switch-timer-card', SwitchTimerCard);
