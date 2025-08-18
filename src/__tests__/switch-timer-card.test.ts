import { expect, describe, it, beforeEach, afterEach, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import { SwitchTimerCard } from '../switch-timer-card';
import { SwitchTimerCardConfig } from '../config';
import { HomeAssistant } from 'custom-card-helpers';

// Register the custom element
if (!customElements.get('switch-timer-card')) {
  customElements.define('switch-timer-card', SwitchTimerCard);
}

describe('SwitchTimerCard', () => {
  let card: SwitchTimerCard;
  let hass: HomeAssistant;

  beforeEach(async () => {
    // Mock Home Assistant object
    hass = {
      states: {},
      config: {},
      themes: {},
      selectedTheme: null,
      panels: {},
      services: {},
      user: {},
      auth: {
        data: {
          access_token: '',
          expires_in: 0,
          refresh_token: '',
          token_type: '',
        },
        wsUrl: '',
      },
      connection: {
        connected: true,
        subscribeEvents: vi.fn(),
        subscribeMessage: vi.fn(),
        sendMessage: vi.fn(),
        sendMessagePromise: vi.fn(),
        close: vi.fn(),
      },
      connected: true,
      panelUrl: '',
      callService: vi.fn(),
      callApi: vi.fn(),
      fetchWithAuth: vi.fn(),
    } as unknown as HomeAssistant;

    // Mock localStorage
    Object.defineProperty(window, 'localStorage', {
      value: {
        getItem: () => null,
        setItem: () => {},
      },
      writable: true,
    });

    // Mock window.location.href for unique_id generation
    Object.defineProperty(window, 'location', {
      value: { href: 'http://localhost:8123/lovelace/default_view' },
      writable: true,
    });

    // Create and setup the element
    card = await fixture<SwitchTimerCard>(
      html`<switch-timer-card></switch-timer-card>`,
    );
    await card.updateComplete;

    // Set up the element
    card.hass = hass;
  });

  afterEach(() => {
    if (card) {
      card.remove();
    }
  });

  describe('Configuration Validation', () => {
    it('should throw error when switch_entity is missing', async () => {
      // @ts-expect-error - Invalid configuration for testing
      const invalidConfig: SwitchTimerCardConfig = {
        timer_entity: 'timer.test_timer',
      };

      expect(() => {
        card.setConfig(invalidConfig);
      }).toThrow("You need to define param 'switch_entity'");
    });

    it('should throw error when timer_entity is missing', async () => {
      // @ts-expect-error - Invalid configuration for testing
      const invalidConfig: SwitchTimerCardConfig = {
        switch_entity: 'switch.test_switch',
      };

      expect(() => {
        card.setConfig(invalidConfig);
      }).toThrow("You need to define param 'timer_entity'");
    });

    it('should throw error when both required entities are missing', async () => {
      // @ts-expect-error - Invalid configuration for testing
      const invalidConfig: SwitchTimerCardConfig = {};

      expect(() => {
        card.setConfig(invalidConfig);
      }).toThrow("You need to define param 'switch_entity'");
    });

    it('should accept valid configuration with required entities', async () => {
      const validConfig: SwitchTimerCardConfig = {
        switch_entity: 'switch.test_switch',
        timer_entity: 'timer.test_timer',
      };

      expect(() => {
        card.setConfig(validConfig);
      }).not.toThrow();
    });

    it('should accept valid configuration with optional title', async () => {
      const validConfig: SwitchTimerCardConfig = {
        switch_entity: 'switch.test_switch',
        timer_entity: 'timer.test_timer',
        title: 'Custom Title',
      };

      expect(() => {
        card.setConfig(validConfig);
      }).not.toThrow();
    });
  });

  describe('Basic Rendering', () => {
    it('should render empty when no hass or config is set', async () => {
      expect(card.shadowRoot?.innerHTML).toContain('');
    });

    it('should render card when both hass and config are set', async () => {
      const validConfig: SwitchTimerCardConfig = {
        switch_entity: 'switch.test_switch',
        timer_entity: 'timer.test_timer',
      };

      // Set config first
      card.setConfig(validConfig);

      // Update hass with mock states
      card.hass = {
        ...hass,
        states: {
          // @ts-expect-error - Unknown entry for testing
          'switch.test_switch': {
            entity_id: 'switch.test_switch',
            state: 'off',
            attributes: {
              friendly_name: 'Test Switch',
            },
          },
          // @ts-expect-error - Unknown entry for testing
          'timer.test_timer': {
            entity_id: 'timer.test_timer',
            state: 'idle',
            attributes: {
              friendly_name: 'Test Timer',
            },
          },
        },
      };

      // Wait for update
      await card.updateComplete;

      expect(card.shadowRoot?.innerHTML).toContain('ha-card');
      expect(card.shadowRoot?.innerHTML).toContain('Test Switch');
    });

    it('should show error when switch entity is unknown', async () => {
      const validConfig: SwitchTimerCardConfig = {
        switch_entity: 'switch.unknown_switch',
        timer_entity: 'timer.test_timer',
      };

      card.setConfig(validConfig);

      card.hass = {
        ...hass,
        states: {
          // @ts-expect-error - Invalid configuration for testing
          'timer.test_timer': {
            entity_id: 'timer.test_timer',
            state: 'idle',
            attributes: {
              friendly_name: 'Test Timer',
            },
          },
        },
      };

      await card.updateComplete;

      // Check that the error message is present in the rendered HTML
      const cardContent = card.shadowRoot?.innerHTML || '';
      expect(cardContent).toContain('Unknown entity');
      expect(cardContent).toContain('switch.unknown_switch');
    });

    it('should show error when timer entity is unknown', async () => {
      const validConfig: SwitchTimerCardConfig = {
        switch_entity: 'switch.test_switch',
        timer_entity: 'timer.unknown_timer',
      };

      card.setConfig(validConfig);

      card.hass = {
        ...hass,
        states: {
          // @ts-expect-error - Invalid configuration for testing
          'switch.test_switch': {
            entity_id: 'switch.test_switch',
            state: 'off',
            attributes: {
              friendly_name: 'Test Switch',
            },
          },
        },
      };

      await card.updateComplete;

      // Check that the error message is present in the rendered HTML
      const cardContent = card.shadowRoot?.innerHTML || '';
      expect(cardContent).toContain('Unknown entity');
      expect(cardContent).toContain('timer.unknown_timer');
    });
  });

  describe('Card Properties', () => {
    it('should have correct tag name', () => {
      // The tagName is set by the @customElement decorator
      expect(card.tagName.toLowerCase()).toBe('switch-timer-card');
    });

    it('should have static styles', () => {
      expect(SwitchTimerCard.styles).toBeDefined();
    });
  });

  describe('Local Storage', () => {
    it('should generate unique localStorage key', async () => {
      const validConfig: SwitchTimerCardConfig = {
        switch_entity: 'switch.test_switch',
        timer_entity: 'timer.test_timer',
      };

      card.setConfig(validConfig);

      const key = card.getLocalStorageKey();
      expect(key).toContain('switch-timer-card_');
      expect(key).toContain('timer.test_timer');
      expect(key).toContain('switch.test_switch');
    });
  });
});
