import { SwitchTimerCardButton } from './config';

/**
 * @param number - The number to pad.
 * @returns A string representing the number padded with zeros.
 */
const padNumber = (number: number) => {
  return String(Math.floor(number)).padStart(2, '0');
};

/**
 * @param seconds - The number of seconds to convert to a home assistant format string.
 * @returns A string representing the number of seconds in the format of hh:mm:ss.
 */
export const homeAssistantFormatTime = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  return `${padNumber(hours)}:${padNumber(minutes)}:${padNumber(remainingSeconds)}`;
};

/**
 * @param seconds - The number of seconds to convert to a human readable string.
 */
export const humanReadableTime = (seconds: number) => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  let formattedTime = '';
  if (hours > 0) {
    formattedTime += `${hours}h `;
  }
  if (minutes > 0) {
    formattedTime += `${minutes}m `;
  }
  if (remainingSeconds > 0) {
    formattedTime += `${remainingSeconds}s`;
  }
  return formattedTime;
};

/**
 * @param time - The time to parse.
 * @returns The total number of seconds.
 */
export const convertCardConfigTimeToSeconds = (time: SwitchTimerCardButton) => {
  let totalSeconds = 0;
  if (time.hours) totalSeconds += time.hours * 60 * 60;
  if (time.minutes) totalSeconds += time.minutes * 60;
  if (time.seconds) totalSeconds += time.seconds;
  return totalSeconds;
};
