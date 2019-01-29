'use strict';

const {
  success, unauthorized, failure, redirect,
} = require('./APIResponse');

describe('ApiResponse', () => {
  test('should return a success status code 200', () => {
    const res = success({ success: true });
    expect(res.statusCode).toEqual(200);
    expect(JSON.parse(res.body).success).toEqual(true);
  });

  test('should return a failure status code 500', () => {
    const res = failure({ success: false });
    expect(res.statusCode).toEqual(500);
    expect(JSON.parse(res.body).success).toEqual(false);
  });

  test('should return a redirect status code 302', () => {
    const res = redirect({}, { location: 'http://www.xxxxx.com' });
    expect(res.statusCode).toEqual(302);
    expect(res.headers.location).toEqual('http://www.xxxxx.com');
  });

  test('should return a success status code 200', () => {
    const res = unauthorized({ forbidden: true });
    expect(res.statusCode).toEqual(403);
    expect(JSON.parse(res.body).forbidden).toEqual(true);
  });
});
