const fs = require('node:fs');
const path = require('node:path');

// Some managed Windows devices block native .node addons. Rollup's official
// WebAssembly distribution keeps the Astro toolchain usable in that case.
const target = path.join(__dirname, '..', 'node_modules', 'rollup', 'dist', 'native.js');
const fallback = "module.exports = require('@rollup/wasm-node/dist/native.js');\n";

if (fs.existsSync(target)) fs.writeFileSync(target, fallback);
