/**
 * @param number - The number to pad.
 * @returns A string representing the number padded with zeros.
 */
const padNumber = (number: number) => {
  return String(Math.floor(number)).padStart(2, '0');
};

/**
 * @param seconds - The number of seconds to convert to a human readable string.
 * @returns A string representing the number of seconds in the format of mm:ss.
 */
export const humanReadableTime = (seconds: number) => {
  if (!seconds) return '-';
  if (seconds < 60) return seconds;
  if (seconds < 60 * 60) {
    return `${padNumber(seconds / 60)}:${padNumber(seconds % 60)}`;
  }
  // TODO calculate hours and siplay with human readable format
  return `${padNumber(seconds / 60)}:${padNumber(seconds % 60)}`;
};
