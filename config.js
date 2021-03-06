/**
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 * @license GNU GENERAL PUBLIC LICENSE Version 3
 */

'use strict';

var path      = require('path'),
    extend    = require('extend'),
    config    = require('spa-plugin/config'),
    srcPath   = path.join(config.source, 'sass'),
    dstPath   = path.join(config.target, 'css'),
    //cachePath = path.join(srcPath, '.cache'),
    profiles  = {};
    //jsCache;


// map
//jsCache = path.join(config.source, 'js', '.cache', 'default.json');

// main
profiles.release = extend(true, {}, config, {
    // source files location
    source: srcPath,

    // output files location
    target: dstPath,

    // dir for temp files
    //cache: cachePath,

    // js require map file
    //jsCache: jsCache,

    //varsFile: 'vars.scss',
    //mainFile: 'main.scss',

    // local variables available in source files
    //variables: {
    //    DEVELOP: false
    //},

    // compiler config
    sass: {
        // path to a file for LibSass to render
        file: path.join(srcPath, 'release.scss'),

        // the intended location of the output file
        outFile: path.join(dstPath, 'release.app.css'),

        // paths to resolve @import declarations
        includePaths: [],

        // output format of the final CSS style
        // options: nested, expanded, compact, compressed
        outputStyle: 'nested',

        // whether to use space or tab character for indentation
        indentType: 'space',

        // the number of spaces or tabs to be used for indentation
        indentWidth: 4,

        // whether to use cr, crlf, lf or lfcr sequence for line break
        linefeed: 'lf',

        // how many digits after the decimal will be allowed
        precision: 2,

        // additional debugging information in the output file as CSS comments
        sourceComments: false,

        // the writing location for the source map file
        // options: file name, true - inline source map, false - disable
        sourceMap: false,

        // whether to include the source files content in the source map
        // bigger map file but no need to serve source scss files
        sourceMapContents: false,

        // whether to embed the source map as a data URI
        sourceMapEmbed: false
    },

    // false to prevent watch task creation
    // otherwise array of globs to monitor
    watch: [path.join(srcPath, '**', '*.scss')], /*{
        build: [path.join(srcPath, '**', '*.scss')],
        cache: [jsCache]
    }*/

    // info channels
    notifications: {
        popup: {
            info: {icon: path.join(__dirname, 'media', 'info.png')},
            warn: {icon: path.join(__dirname, 'media', 'warn.png')},
            fail: {icon: path.join(__dirname, 'media', 'fail.png')}
        }
    }
});

// map
//jsCache = path.join(config.source, 'js', '.cache', 'develop.json');

profiles.develop = extend(true, {}, profiles.release, {
    // js require map file
    //jsCache: jsCache,

    // local variables available in source files
    //variables: {
    //    DEVELOP: true
    //},

    // compiler config
    sass: {
        // path to a file for LibSass to render
        file: path.join(srcPath, 'develop.scss'),

        // the intended location of the output file
        outFile: path.join(dstPath, 'develop.app.css'),

        // output format of the final CSS style
        // options: nested, expanded, compact, compressed
        //outputStyle: 'nested',

        // the writing location for the source map file
        // options: file name, true - inline source map, false - disable
        sourceMap: path.join(dstPath, 'develop.app.map')
    }

    // false to prevent watch task creation
    // otherwise array of globs to monitor
    //watch: {
    //    cache: [jsCache]
    //}
});


// public
module.exports = profiles;
