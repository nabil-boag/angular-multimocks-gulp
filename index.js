var through = require('through2');
var gutil = require('gulp-util');
var multimocksTask = require('./lib/multimocksTask.js');

module.exports = function(config) {

  // var logger = function (message, content) {
  //   gutil.log(message, content);
  // };

  return through.obj(function(source, encoding, callback) {
    multimocksTask.writeScenarioData(source, config);
    callback(null, source);
  });
};
