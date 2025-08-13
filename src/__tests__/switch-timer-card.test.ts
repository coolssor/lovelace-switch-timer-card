import { expect, describe, it, beforeEach, afterEach } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import { SwitchTimerCard } from '../switch-timer-card';
import { SwitchTimerCardConfig } from '../config';

describe('SwitchTimerCard', () => {
  let card: SwitchTimerCard;

  beforeEach(() => {
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
  });

  afterEach(() => {
    if (card) {
      card.remove();
    }
  });

  describe('Configuration Validation', () => {
    it('should throw error when switch_entity is missing', async () => {
      const invalidConfig = {
        type: 'switch-timer-card',
        timer_entity: 'timer.test_timer',
      } as SwitchTimerCardConfig;

      card = await fixture(html`<switch-timer-card></switch-timer-card>`);

      expect(() => {
        card.setConfig(invalidConfig);
      }).toThrow("You need to define param 'switch_entity'");
    });

    it('should throw error when timer_entity is missing', async () => {
      const invalidConfig = {
        type: 'switch-timer-card',
        switch_entity: 'switch.test_switch',
      } as SwitchTimerCardConfig;

      card = await fixture(html`<switch-timer-card></switch-timer-card>`);

      expect(() => {
        card.setConfig(invalidConfig);
      }).toThrow("You need to define param 'timer_entity'");
    });

    it('should throw error when both required entities are missing', async () => {
      const invalidConfig = {
        type: 'switch-timer-card',
      } as SwitchTimerCardConfig;

      card = await fixture(html`<switch-timer-card></switch-timer-card>`);

      expect(() => {
        card.setConfig(invalidConfig);
      }).toThrow("You need to define param 'switch_entity'");
    });

    it('should accept valid configuration with required entities', async () => {
      const validConfig: SwitchTimerCardConfig = {
        type: 'switch-timer-card',
        switch_entity: 'switch.test_switch',
        timer_entity: 'timer.test_timer',
      };

      card = await fixture(html`<switch-timer-card></switch-timer-card>`);

      expect(() => {
        card.setConfig(validConfig);
      }).not.toThrow();
    });

    it('should accept valid configuration with optional title', async () => {
      const validConfig: SwitchTimerCardConfig = {
        type: 'switch-timer-card',
        switch_entity: 'switch.test_switch',
        timer_entity: 'timer.test_timer',
        title: 'Custom Title',
      };

      card = await fixture(html`<switch-timer-card></switch-timer-card>`);

      expect(() => {
        card.setConfig(validConfig);
      }).not.toThrow();
    });
  });

  describe('Basic Rendering', () => {
    it('should render empty when no hass or config is set', async () => {
      card = await fixture(html`<switch-timer-card></switch-timer-card>`);

      expect(card.shadowRoot?.innerHTML).toContain('');
    });

    it('should render card when both hass and config are set', async () => {
      const validConfig: SwitchTimerCardConfig = {
        type: 'switch-timer-card',
        switch_entity: 'switch.test_switch',
        timer_entity: 'timer.test_timer',
      };

      card = await fixture(html`<switch-timer-card></switch-timer-card>`);
      card.setConfig(validConfig);

      // Mock Home Assistant object by setting the protected property through reflection
      Object.defineProperty(card, 'hass', {
        value: {
          states: {
            'switch.test_switch': {
              entity_id: 'switch.test_switch',
              state: 'off',
              attributes: {
                friendly_name: 'Test Switch',
              },
            },
            'timer.test_timer': {
              entity_id: 'timer.test_timer',
              state: 'idle',
              attributes: {
                friendly_name: 'Test Timer',
              },
            },
          },
        },
        writable: true,
      });

      // Trigger render
      await card.updateComplete;

      expect(card.shadowRoot?.innerHTML).toContain('ha-card');
      expect(card.shadowRoot?.innerHTML).toContain('Test Switch');
    });

    it('should show error when switch entity is unknown', async () => {
      const validConfig: SwitchTimerCardConfig = {
        type: 'switch-timer-card',
        switch_entity: 'switch.unknown_switch',
        timer_entity: 'timer.test_timer',
      };

      card = await fixture(html`<switch-timer-card></switch-timer-card>`);
      card.setConfig(validConfig);

      // Mock Home Assistant object by setting the protected property through reflection
      Object.defineProperty(card, 'hass', {
        value: {
          states: {
            'timer.test_timer': {
              entity_id: 'timer.test_timer',
              state: 'idle',
              attributes: {
                friendly_name: 'Test Timer',
              },
            },
          },
        },
        writable: true,
      });

      await card.updateComplete;

      // Check that the error message is present in the rendered HTML
      const cardContent = card.shadowRoot?.innerHTML || '';
      expect(cardContent).toContain('Unknown entity');
      expect(cardContent).toContain('switch.unknown_switch');
    });

    it('should show error when timer entity is unknown', async () => {
      const validConfig: SwitchTimerCardConfig = {
        type: 'switch-timer-card',
        switch_entity: 'switch.test_switch',
        timer_entity: 'timer.unknown_timer',
      };

      card = await fixture(html`<switch-timer-card></switch-timer-card>`);
      card.setConfig(validConfig);

      // Mock Home Assistant object by setting the protected property through reflection
      Object.defineProperty(card, 'hass', {
        value: {
          states: {
            'switch.test_switch': {
              entity_id: 'switch.test_switch',
              state: 'off',
              attributes: {
                friendly_name: 'Test Switch',
              },
            },
          },
        },
        writable: true,
      });

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

    it('should have config element method', () => {
      expect(SwitchTimerCard.getConfigElement).toBeDefined();
      expect(typeof SwitchTimerCard.getConfigElement).toBe('function');
    });
  });

  describe('Local Storage', () => {
    it('should generate unique localStorage key', async () => {
      const validConfig: SwitchTimerCardConfig = {
        type: 'switch-timer-card',
        switch_entity: 'switch.test_switch',
        timer_entity: 'timer.test_timer',
      };

      card = await fixture(html`<switch-timer-card></switch-timer-card>`);
      card.setConfig(validConfig);

      const key = card.getLocalStorageKey();
      expect(key).toContain('switch-timer-card_');
      expect(key).toContain('timer.test_timer');
      expect(key).toContain('switch.test_switch');
    });
  });
});
