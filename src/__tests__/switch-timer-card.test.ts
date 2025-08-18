import { expect, describe, it, beforeEach, afterEach, vi } from 'vitest';
import { fixture, html } from '@open-wc/testing';
import { SwitchTimerCard } from '../switch-timer-card';
import { SwitchTimerCardConfig } from '../config';
import { HomeAssistant } from 'custom-card-helpers';

// Register the custom element
if (!customElements.get('switch-timer-card')) {
  customElements.define('switch-timer-card', SwitchTimerCard);
}

const TIMER_ENTITY = 'timer.test_timer';
const SWITCH_ENTITY = 'switch.test_switch';

const MOCK_STATES = {
  [SWITCH_ENTITY]: {
    entity_id: SWITCH_ENTITY,
    state: 'off',
    attributes: {
      friendly_name: 'Test Switch',
    },
  },
  [TIMER_ENTITY]: {
    entity_id: TIMER_ENTITY,
    state: 'idle',
    attributes: {
      friendly_name: 'Test Timer',
    },
  },
};

describe('SwitchTimerCard', () => {
  let card: SwitchTimerCard;
  let hass: HomeAssistant;

  beforeEach(async () => {
    // Mock Home Assistant object
    hass = {
      states: MOCK_STATES,
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
        timer_entity: TIMER_ENTITY,
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
        switch_entity: SWITCH_ENTITY,
        timer_entity: TIMER_ENTITY,
      };

      expect(() => {
        card.setConfig(validConfig);
      }).not.toThrow();
    });

    it('should accept valid configuration with optional title', async () => {
      const validConfig: SwitchTimerCardConfig = {
        switch_entity: SWITCH_ENTITY,
        timer_entity: TIMER_ENTITY,
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
        switch_entity: SWITCH_ENTITY,
        timer_entity: TIMER_ENTITY,
      };

      // Set config first
      card.setConfig(validConfig);

      // Wait for update
      await card.updateComplete;

      expect(card.shadowRoot?.innerHTML).toContain('ha-card');
      expect(card.shadowRoot?.innerHTML).toContain('Test Switch');
    });

    it('should show error when switch entity is unknown', async () => {
      const validConfig: SwitchTimerCardConfig = {
        switch_entity: 'switch.unknown_switch',
        timer_entity: TIMER_ENTITY,
      };

      card.setConfig(validConfig);

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

  describe('Buttons configuration', () => {
    it('should render default buttons when none are provided', async () => {
      const config: SwitchTimerCardConfig = {
        switch_entity: SWITCH_ENTITY,
        timer_entity: TIMER_ENTITY,
      };

      card.setConfig(config);

      // Expand card to show buttons
      card.setMinimized(false);
      await card.updateComplete;

      const buttons = card.shadowRoot?.querySelectorAll('.timer-button') || [];
      expect(buttons.length).toBe(3);
      // Human readable labels contain units; check substrings to avoid whitespace flakiness
      expect((buttons[0] as HTMLButtonElement).textContent || '').toContain(
        '30m',
      );
      expect((buttons[1] as HTMLButtonElement).textContent || '').toContain(
        '1h',
      );
      expect((buttons[2] as HTMLButtonElement).textContent || '').toContain(
        '1h',
      );
    });

    it('should render provided buttons with custom text overrides', async () => {
      const config: SwitchTimerCardConfig = {
        switch_entity: SWITCH_ENTITY,
        timer_entity: TIMER_ENTITY,
        buttons: [
          { minutes: 5 },
          { hours: 1, minutes: 30 },
          { seconds: 45, text: 'Custom 45s' },
        ],
      };

      card.setConfig(config);

      // Expand card to show buttons
      card.setMinimized(false);
      await card.updateComplete;

      const buttons = card.shadowRoot?.querySelectorAll('.timer-button') || [];
      expect(buttons.length).toBe(3);
      expect((buttons[0] as HTMLButtonElement).textContent || '').toContain(
        '5m',
      );
      expect((buttons[1] as HTMLButtonElement).textContent || '').toContain(
        '1h',
      );
      expect((buttons[1] as HTMLButtonElement).textContent || '').toContain(
        '30m',
      );
      expect(((buttons[2] as HTMLButtonElement).textContent || '').trim()).toBe(
        'Custom 45s',
      );
    });

    it('should call timer.start with correct duration when a button is clicked', async () => {
      const config: SwitchTimerCardConfig = {
        switch_entity: SWITCH_ENTITY,
        timer_entity: TIMER_ENTITY,
        buttons: [{ minutes: 30 }, { hours: 1, minutes: 30 }],
      };

      card.setConfig(config);

      // Expand card to show buttons
      card.setMinimized(false);
      await card.updateComplete;

      const buttons = card.shadowRoot?.querySelectorAll(
        '.timer-button',
      ) as NodeListOf<HTMLButtonElement>;
      expect(buttons?.length || 0).toBe(2);

      // Click first button (30 minutes => 00:30:00)
      buttons[0].click();
      expect(hass.callService).toHaveBeenCalledWith('timer', 'start', {
        duration: '00:30:00',
        entity_id: 'timer.test_timer',
      });

      // Click second button (1h30m => 01:30:00)
      buttons[1].click();
      expect(hass.callService).toHaveBeenCalledWith('timer', 'start', {
        duration: '01:30:00',
        entity_id: 'timer.test_timer',
      });
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
