const APIResponse = require('./src/APIResponse');
const headers = require('./src/headers');
const isHostedOnAws = require('./src/isHostedOnAws');

module.exports = {
  isHostedOnAws,
  headers,
  APIResponse,
};
