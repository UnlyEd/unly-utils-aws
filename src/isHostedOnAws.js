'use strict';

/**
 *
 *
 * See https://docs.aws.amazon.com/lambda/latest/dg/current-supported-versions.html
 * @returns {boolean}
 */
const isHostedOnAWS = () => !!(process.env.LAMBDA_TASK_ROOT || process.env.AWS_EXECUTION_ENV);

export default isHostedOnAWS;
