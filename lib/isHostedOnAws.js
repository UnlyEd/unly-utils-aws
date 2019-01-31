'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 *
 *
 * See https://docs.aws.amazon.com/lambda/latest/dg/current-supported-versions.html
 * @returns {boolean}
 */

var isHostedOnAWS = function isHostedOnAWS() {
  return !!(process.env.LAMBDA_TASK_ROOT || process.env.AWS_EXECUTION_ENV);
};

exports.default = isHostedOnAWS;
