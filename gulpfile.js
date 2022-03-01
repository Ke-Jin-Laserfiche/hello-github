const { src, dest } = require('gulp');
const replace = require('gulp-replace');

const INDEX_JS_PATH = './dist/index.js';
const TYPES_IMPORTS = /import.*/g;

async function replaceImportsInIndex(){
    src(INDEX_JS_PATH, {base: './'})
        .pipe(replace(TYPES_IMPORTS, ''))
        .pipe(dest('./'));
};

exports.replaceImportsInIndex = replaceImportsInIndex;