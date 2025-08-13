import { css } from 'lit';

const CARD_STYLES = css`
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
`;

export const getDefaultStyles = () => {
  return css`
    ${CARD_STYLES}
  `;
};
