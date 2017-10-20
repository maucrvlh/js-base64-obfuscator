<h1 align="center">Base64 string obfuscator</h1>

---

:fire: Obfuscate base 64 strings


## Installation
```
yarn add js-base64-obfuscator
```
## Quickstart
```javascript
import * as b64obfuscator from 'js-base64-obfuscator';

let str = 'eyBhOiAxLCBiOiAyLCBjOiAzIH0=';
let obfuscatedStr = b64obfuscator.obfuscate(str); //eyBhOiAxLCBiCiAyLCBjOiAzIH0L
```
To get the original string back, please see <a href="https://github.com/maucrvlh/js-base64-deobfuscator/">js-base64-deobfuscator</a>

## License
MIT
