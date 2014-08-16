'use strict';

var fs = require('fs');

module.exports = function(file, start, length, cb) {
  // create new buffer to write chunk to
  var buffer = new Buffer(length);
  // open a file in 'read' mode
  fs.open(file, 'r', function(err, fd) {
    if (err) {
      cb(err);
      return;
    }
    // read given number of bytes and write to the buffer
    fs.read(fd, buffer, 0, length, start, function(err, bufferLength) {
      if (err){
        cb(err);
        return;
      }
      // file could be smaller than number of bytes we are interested in, so
      // truncate the buffer
      if (bufferLength < length) {
        buffer = buffer.toString('utf-8', 0, bufferLength);
      }

      fs.close(fd, function() {
        // return proper hash to callback
        cb(null, buffer);
      });
    });
  });
};
