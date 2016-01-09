/**
 * Configuration for sass gulp task.
 */

'use strict';

// public
module.exports = {
    // turn on/off compilation
    active: true,

    // set of named configs for corresponding gulp tasks
    // e.g. profile "develop" will inherit all options from "default"
    // and create gulp task "sass:develop"
    profiles: {
        // config to be extended by other profiles
        default: {
            // directory to look for source files
            // default: <project root>/src/sass
            srcPath: 'sass',

            // main source entry point
            srcFile: 'main.scss',

            // directory to store output files
            // default: <project root>/app/css
            outPath: 'css',

            // whether to use space or tab character for indentation
            indentType: 'space',

            // the number of spaces or tabs to be used for indentation
            indentWidth: 4,

            // whether to use cr, crlf, lf or lfcr sequence for line break
            linefeed: 'lf',

            // how many digits after the decimal will be allowed
            precision: 2
        },

        // config for sass:develop task
        develop: {
            // intended output file name
            outFile: 'develop.css',

            // output format of the final CSS style
            // options: nested, expanded, compact, compressed
            outputStyle: 'nested',

            // additional debugging information in the output file as CSS comments
            sourceComments: false,

            // the writing location for the source map file
            // options: file name, true - inline source map, false - disable
            sourceMap: 'develop.map',

            // whether to include the source files content in the source map
            // bigger map file but no need to serve source scss files
            sourceMapContents: false,

            // create task sass:develop:watch
            // to automatically rebuild on source files change
            watch: true
        },

        // config for sass:release task
        release: {
            // intended output file name
            outFile: 'release.css',

            // output format of the final CSS style
            // options: nested, expanded, compact, compressed
            outputStyle: 'compressed'
        }
    }
};