/**
 * Script to minify a single file
 *
 * Usage: node bin/single.js <source> <destination>
 */

const path = require('path');
const Minifier = require('../index');

const src = path.parse(process.argv[2]);
const dest = path.parse(process.argv[3]);

const minifier = new Minifier({src: src.dir, dest: dest.dir});

minifier.minify({
    [dest.base]: src.base
});
