'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 *
 * @param statusCode
 * @param body
 * @param headers
 * @returns {{headers: any, body: string, statusCode: *}}
 */

var buildJSONResponse = function buildJSONResponse(statusCode, body, headers) {
  return {
    statusCode: statusCode,
    headers: Object.assign({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true
    }, headers),
    body: JSON.stringify(body)
  };
};
/**
 *
 * @param data
 * @param statusCode
 * @param filename
 * @param charset
 * @returns {{headers: {'content-disposition': string, 'content-type': string}, body: string, statusCode: number}}
 */


var buildCSVResponse = function buildCSVResponse(_ref) {
  var data = _ref.data,
      _ref$statusCode = _ref.statusCode,
      statusCode = _ref$statusCode === void 0 ? 200 : _ref$statusCode,
      _ref$filename = _ref.filename,
      filename = _ref$filename === void 0 ? 'file' : _ref$filename,
      _ref$charset = _ref.charset,
      charset = _ref$charset === void 0 ? 'utf-8' : _ref$charset;
  return {
    statusCode: statusCode,
    headers: {
      'content-disposition': "attachment; filename=".concat(filename, ".csv"),
      'content-type': "text/csv; charset=".concat(charset)
    },
    body: "\uFEFF".concat(data) // XXX Hack, manually insert UTF-8 BOM, so that Windaube will understand proper UTF-8 and display accents correctly

  };
};
/**
 *
 * @param data
 * @param headers
 * @returns {{headers: any, body: string, statusCode: *}}
 */


var success = function success(data) {
  var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return buildJSONResponse(200, data, headers);
};
/**
 *
 * @param data
 * @param headers
 * @returns {{headers, body, statusCode}}
 */


var failure = function failure(data) {
  var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return buildJSONResponse(500, data, headers);
};
/**
 *
 * @param data
 * @param headers
 * @returns {{headers, body, statusCode}}
 */


var redirect = function redirect(data) {
  var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return buildJSONResponse(302, data, headers);
};
/**
 *
 * @param data
 * @param headers
 * @returns {{headers, body, statusCode}}
 */


var unauthorized = function unauthorized(data) {
  var headers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return buildJSONResponse(403, data, headers);
};

var APIResponse = {
  buildCSVResponse: buildCSVResponse,
  buildJSONResponse: buildJSONResponse,
  success: success,
  failure: failure,
  redirect: redirect,
  unauthorized: unauthorized
};

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

var headers = {
  getDevice: getDevice,
  getForwardedIpAddresses: getForwardedIpAddresses,
  getHeadersUsefulData: getHeadersUsefulData,
  getMainIpAddress: getMainIpAddress
};

/**
 *
 *
 * See https://docs.aws.amazon.com/lambda/latest/dg/current-supported-versions.html
 * @returns {boolean}
 */

var isHostedOnAWS = function isHostedOnAWS() {
  return !!(process.env.LAMBDA_TASK_ROOT || process.env.AWS_EXECUTION_ENV);
};

var isHostedOnAws = isHostedOnAWS;

var src = {
  APIResponse: APIResponse,
  headers: headers,
  isHostedOnAws: isHostedOnAws
};
var src_1 = src.APIResponse;
var src_2 = src.headers;
var src_3 = src.isHostedOnAws;

exports.default = src;
exports.APIResponse = src_1;
exports.headers = src_2;
exports.isHostedOnAws = src_3;
