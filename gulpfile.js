"use strict";

var gulp = require('gulp')
var source = require('vinyl-source-stream')
var browserify = require('browserify')
var karma = require('karma').server
var plugins = require('gulp-load-plugins')()
var hbsfy = require("hbsfy")

/**
 * Watch for file changes and re-run tests on each change
 */
gulp.task('tdd', function (done) {
  karma.start({
    configFile: __dirname + '/karma.conf.js'
  }, done)
})

/**
 * Browserify the index.js to bundle.js
 */
gulp.task('browserify', function () {

  hbsfy.configure({
    extensions: ['hbs']
  })

  var bundleStream = browserify('./index.js').transform(hbsfy).bundle()

  bundleStream
    .pipe(source('index.js'))
    .pipe(plugins.plumber())
    .pipe(plugins.rename('bundle.js'))
    .pipe(gulp.dest('./'))
})

gulp.task('default', ['browserify']);