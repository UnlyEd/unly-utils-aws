'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Extract the device used for a request, based on its headers.
 * XXX Strongly linked to CloudFront headers rewriting. Won't work if using another web server.
 *
 * @param headers
 * @returns {string|null}
 */

var getDevice = function getDevice(headers) {
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

var getMainIpAddress = function getMainIpAddress(xForwardedFor) {
  var sep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ', ';

  if (!xForwardedFor || !xForwardedFor.length) {
    return null;
  } // Return the first IP address, which is supposed to be the real IP address


  return xForwardedFor.split(sep)[0] || null;
};
/**
 * Extract forwarded IP addresses from string, provided using "X-Forwarded-For" header.
 *
 * @param xForwardedFor
 * @param sep
 * @returns {Array<string>|null}
 */

var getForwardedIpAddresses = function getForwardedIpAddresses(xForwardedFor) {
  var sep = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ', ';

  if (!xForwardedFor || !xForwardedFor.length) {
    return null;
  } // Convert the string to an array


  var forwardedIpAddresses = xForwardedFor.split(sep); // Strip the array from its first IP address, which is supposed to be the real IP address

  forwardedIpAddresses.shift();
  return forwardedIpAddresses;
};
/**
 * Extract interesting data from an event headers, typically for tracking/storing for further analytics capabilities.
 *
 * @param headers
 * @returns {{device: string, country: string|null, userAgent: string|null, ipAddress: string, forwardedIpAddress: Array<string>}}
 */

var getHeadersUsefulData = function getHeadersUsefulData() {
  var headers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    device: getDevice(headers),
    country: headers['CloudFront-Viewer-Country'] || null,
    userAgent: headers['User-Agent'] || null,
    ipAddress: getMainIpAddress(headers['X-Forwarded-For']),
    forwardedIpAddress: getForwardedIpAddresses(headers['X-Forwarded-For'])
  };
};

exports.getDevice = getDevice;
exports.getMainIpAddress = getMainIpAddress;
exports.getForwardedIpAddresses = getForwardedIpAddresses;
exports.getHeadersUsefulData = getHeadersUsefulData;
