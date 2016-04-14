'use strict';

var path = require('path');
var gulp = require('gulp');
var multimocksGulp = require('angular-multimocks-gulp');

/**
 */
gulp.task('multimocks', function () {
  var source = 'mocks';
  return gulp.src(source)
    .pipe(multimocksGulp({

    }))
    .pipe(gulp.dest('mocks/multimocksGulp.js'));
});


