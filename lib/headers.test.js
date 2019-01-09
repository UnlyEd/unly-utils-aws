'use strict';

const {
  getDevice,
  getForwardedIpAddresses,
  getHeadersUsefulData,
  getMainIpAddress,
} = require('./headers');

const devices = ['mobile', 'tablet', 'smart-tv', 'desktop', 'null'];
const headers = [
  {
    'CloudFront-Is-Desktop-Viewer': 'true',
    'CloudFront-Viewer-Country': 'FR',
    'User-Agent': 'chrome',
    'X-Forwarded-For': 'ip, ipOne, ipTwo, ipThree',
  },
  { 'CloudFront-Is-Mobile-Viewer': 'true' },
  { 'CloudFront-Is-SmartTV-Viewer': 'true' },
  { 'CloudFront-Is-Tablet-Viewer': 'true' },
];

describe('getDevice', () => {
  test(`should return all the following ${devices.join(', ')}`, () => {
    expect(getDevice(Object.assign({}, headers[0]))).toEqual(devices[3]);
    expect(getDevice({})).toEqual(null);
    expect(getDevice(Object.assign({}, headers[1]))).toEqual(devices[0]);
    expect(getDevice(Object.assign({}, headers[3]))).toEqual(devices[1]);
    expect(getDevice(Object.assign({}, headers[2]))).toEqual(devices[2]);
  });
});

describe('getForwardedIpAddresses', () => {
  test('should an Array of String without the first value }', () => {
    expect(getForwardedIpAddresses('ip, ipOne, ipTwo, ipThree')).toEqual(['ipOne', 'ipTwo', 'ipThree']);
  });

  test('should return null if we don\'t provided params }', () => {
    expect(getForwardedIpAddresses()).toEqual(null);
  });
});

describe('getMainIpAdress', () => {
  test('should return the first ip address', () => {
    expect(getMainIpAddress('ip, ipOne, ipTwo, ipThree')).toEqual('ip');
  });

  test('should return null if we don\'t provided params }', () => {
    expect(getMainIpAddress()).toEqual(null);
  });
});

describe('getHeadersUsefulData', () => {
  test('should return the first ip address ', () => {
    expect(getHeadersUsefulData(headers[0])).toEqual(
      expect.objectContaining({
        device: getDevice(headers[0]),
        country: headers[0]['CloudFront-Viewer-Country'] || null,
        userAgent: headers[0]['User-Agent'] || null,
        ipAddress: getMainIpAddress(headers[0]['X-Forwarded-For']),
        forwardedIpAddress: getForwardedIpAddresses(headers[0]['X-Forwarded-For']),
      }),
    );
  });
});
