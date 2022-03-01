const { src, dest } = require('gulp');
const replace = require('gulp-replace');

const INDEX_JS_PATH = './dist/index.js';
const TSLIB = 'tslib';
const TSLIBCDN = 'https://cdn.jsdelivr.net/npm/tslib@2/tslib.min.js';

async function replaceImportsInIndex(){
    src(INDEX_JS_PATH, {base: './'})
        .pipe(replace(TSLIB, TSLIBCDN))
        .pipe(dest('./'));
};

exports.replaceImportsInIndex = replaceImportsInIndex;