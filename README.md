# read-part-file by [@michalbe](http://github.com/michalbe) #
Get just part of the file in easy way

### How to use: ###
```
npm install read-part-file
```
then:
```javascript
var rpf = require('read-part-file');

// Arguments are: filename, first byte, number of bytes, callback
rpf('./LICENSE', 0, 15, function(err, result) {
  console.log(result); // First 15 bytes of the file: 'The MIT License'
});
```
