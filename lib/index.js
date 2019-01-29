'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var APIResponse = require('./APIResponse');

var headers = require('./headers');

var isHostedOnAws = require('./isHostedOnAws');

var index = {
  APIResponse: APIResponse,
  headers: headers,
  isHostedOnAws: isHostedOnAws
};

exports.default = index;
