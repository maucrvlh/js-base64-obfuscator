const assert = require('assert');
const b64obfuscator = require('../dist/index');

let str = 'eyBhOiAxLCBiOiAyLCBjOiAzIH0=';
let obj = Buffer.from(JSON.stringify({ a: 1, b: 2, c: 3 }), 'ascii').toString('base64');


describe('js-base64-obfuscator', function(done) {
    it('should diff from original string', function() {
        assert.notEqual(b64obfuscator.obfuscate(str), str);
    });
    it('should diff from original stringfied object', function() {
        assert.notEqual(b64obfuscator.obfuscate(obj), obj);
    });
});