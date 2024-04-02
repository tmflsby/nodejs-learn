const zlib = require('zlib');

const input = "hello world";
const output = zlib.gzipSync(input);

console.log('gziped content: ' + output);

const out = zlib.gunzipSync(output);

console.log('gunziped content: ' + out);
