'use strict';

/**
 *
 * @param statusCode
 * @param body
 * @param headers
 * @returns {{headers: any, body: string, statusCode: *}}
 */
export const buildJSONResponse = (statusCode, body, headers) => ({
  statusCode,
  headers: Object.assign({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
  }, headers),
  body: JSON.stringify(body),
});

/**
 *
 * @param data
 * @param statusCode
 * @param filename
 * @param charset
 * @returns {{headers: {'content-disposition': string, 'content-type': string}, body: string, statusCode: number}}
 */
export const buildCSVResponse = ({
  data, statusCode = 200, filename = 'file', charset = 'utf-8',
}) => ({
  statusCode,
  headers: {
    'content-disposition': `attachment; filename=${filename}.csv`,
    'content-type': `text/csv; charset=${charset}`,
  },
  body: `\ufeff${data}`, // XXX Hack, manually insert UTF-8 BOM, so that Windaube will understand proper UTF-8 and display accents correctly
});

/**
 *
 * @param data
 * @param headers
 * @returns {{headers: any, body: string, statusCode: *}}
 */
export const success = (data, headers = {}) => buildJSONResponse(200, data, headers);

/**
 *
 * @param data
 * @param headers
 * @returns {{headers, body, statusCode}}
 */
export const failure = (data, headers = {}) => buildJSONResponse(500, data, headers);

/**
 *
 * @param data
 * @param headers
 * @returns {{headers, body, statusCode}}
 */
export const redirect = (data, headers = {}) => buildJSONResponse(302, data, headers);

/**
 *
 * @param data
 * @param headers
 * @returns {{headers, body, statusCode}}
 */
export const unauthorized = (data, headers = {}) => buildJSONResponse(403, data, headers);
