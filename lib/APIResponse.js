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
var APIResponse_1 = APIResponse.buildCSVResponse;
var APIResponse_2 = APIResponse.buildJSONResponse;
var APIResponse_3 = APIResponse.success;
var APIResponse_4 = APIResponse.failure;
var APIResponse_5 = APIResponse.redirect;
var APIResponse_6 = APIResponse.unauthorized;

exports.default = APIResponse;
exports.buildCSVResponse = APIResponse_1;
exports.buildJSONResponse = APIResponse_2;
exports.success = APIResponse_3;
exports.failure = APIResponse_4;
exports.redirect = APIResponse_5;
exports.unauthorized = APIResponse_6;
