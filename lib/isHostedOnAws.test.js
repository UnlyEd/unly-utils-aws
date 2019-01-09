'use strict';

const isHostedOnAws = require('./isHostedOnAws');

describe('isHostedOnAws', () => {
  test('should return false if we run it locally', () => {
    expect(isHostedOnAws()).toEqual(false);
  });
});
