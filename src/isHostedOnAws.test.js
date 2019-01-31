'use strict';

import isHostedOnAWS from './isHostedOnAws';

describe('isHostedOnAws', () => {
  test('should return false if we run it locally', () => {
    expect(isHostedOnAWS()).toEqual(false);
  });
});
