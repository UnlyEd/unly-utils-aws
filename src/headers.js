'use strict';

/**
 * Extract the device used for a request, based on its headers.
 * XXX Strongly linked to CloudFront headers rewriting. Won't work if using another web server.
 *
 * @param headers
 * @returns {string|null}
 */
export const getDevice = (headers) => {
  if (headers['CloudFront-Is-Desktop-Viewer'] === 'true') {
    return 'desktop';
  }
  if (headers['CloudFront-Is-Mobile-Viewer'] === 'true') {
    return 'mobile';
  }
  if (headers['CloudFront-Is-SmartTV-Viewer'] === 'true') {
    return 'smart-tv';
  }
  if (headers['CloudFront-Is-Tablet-Viewer'] === 'true') {
    return 'tablet';
  }
  return null;
};

/**
 * Extract main IP address from string, provided using "X-Forwarded-For" header.
 *
 * @param xForwardedFor
 * @param sep
 * @returns {string|null}
 */
export const getMainIpAddress = (xForwardedFor, sep = ', ') => {
  if (!xForwardedFor || !xForwardedFor.length) {
    return null;
  }

  // Return the first IP address, which is supposed to be the real IP address
  return xForwardedFor.split(sep)[0] || null;
};

/**
 * Extract forwarded IP addresses from string, provided using "X-Forwarded-For" header.
 *
 * @param xForwardedFor
 * @param sep
 * @returns {Array<string>|null}
 */
export const getForwardedIpAddresses = (xForwardedFor, sep = ', ') => {
  if (!xForwardedFor || !xForwardedFor.length) {
    return null;
  }

  // Convert the string to an array
  const forwardedIpAddresses = xForwardedFor.split(sep);

  // Strip the array from its first IP address, which is supposed to be the real IP address
  forwardedIpAddresses.shift();
  return forwardedIpAddresses;
};

/**
 * Extract interesting data from an event headers, typically for tracking/storing for further analytics capabilities.
 *
 * @param headers
 * @returns {{device: string, country: string|null, userAgent: string|null, ipAddress: string, forwardedIpAddress: Array<string>}}
 */
export const getHeadersUsefulData = (headers = {}) => ({
  device: getDevice(headers),
  country: headers['CloudFront-Viewer-Country'] || null,
  userAgent: headers['User-Agent'] || null,
  ipAddress: getMainIpAddress(headers['X-Forwarded-For']),
  forwardedIpAddress: getForwardedIpAddresses(headers['X-Forwarded-For']),
});
