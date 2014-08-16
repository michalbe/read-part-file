'use strict';

var assert = require('assert');
var rpf = require('../');

var pathToTestFile = './LICENSE';

// Grab first 10 bytes of the source file
rpf(pathToTestFile, 0, 10, function(err, data) {
  assert.equal(err, undefined);
  assert.equal(data.toString(), 'The MIT Li');
});

// Start greater than zero
rpf(pathToTestFile, 50, 10, function(err, data) {
  assert.equal(data.toString(), 'Budzyński');
});

// Grab 1MB (should be trancated to 1095 characters)
rpf(pathToTestFile, 0, 1024 * 1024, function(err, data) {
  assert.equal(data.toString().length, 1095);
});

// File doesn't exists
rpf('hwdp.jczc', 1024*1024, 100, function(err, data) {
  assert(err.message.indexOf('ENOENT') > -1);
});
