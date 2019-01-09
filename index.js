const APIResponse = require('./lib/APIResponse');
const headers = require('./lib/headers');
const isHostedOnAws = require('./lib/isHostedOnAws');

module.exports = {
  isHostedOnAws,
  headers,
  APIResponse,
};
