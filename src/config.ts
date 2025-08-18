export interface SwitchTimerCardButton {
  seconds?: number;
  minutes?: number;
  hours?: number;
}

export interface SwitchTimerCardConfig {
  title?: string;
  switch_entity: string;
  timer_entity: string;
  buttons?: SwitchTimerCardButton[];
}

export const DEFAULT_CONFIG: SwitchTimerCardConfig = {
  switch_entity: '',
  timer_entity: '',
  buttons: [{ minutes: 30 }, { minutes: 60 }, { minutes: 90 }],
};
