/**
 * Utility for logging data in a standardized format
 * @param {string} event - The event name
 * @param {object} data - The data to log
 */
export function logData(event, data = {}) {
  const timestamp = new Date().toISOString();
  console.log(JSON.stringify({
    timestamp,
    event,
    data
  }));
}

/**
 * Debug logging utility
 * @param {string} event - The debug event name
 * @param {object} data - The data to log
 */
export function logDebug(event, data = {}) {
  if (process.env.DEBUG === 'true') {
    logData(`DEBUG:${event}`, data);
  }
} 