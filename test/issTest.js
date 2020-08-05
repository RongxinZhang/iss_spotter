const { fetchMyIP, fetchCoordsByIP } = require('../iss');
const { assert } = require('chai');

describe('iss', () => {
  it('should return correct ip', (done) => {
    
    fetchMyIP((err,ip) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      // compare returned description
      assert.isString(ip);

      done();
    });
  });

  it('should return create geolocation', (done) => {
    const IP = '8.8.8.8';
    fetchCoordsByIP(IP, (err, coord) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      // compare returned description
      assert.isString(coord.latitude);
      assert.isString(coord.longitude);

      done();
    });
  });
});