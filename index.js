var through = require('through2');
var gutil = require('gulp-util');
var MultimocksTask = require('./tasks/multimocksTask.js');

module.exports = function(config) {

  var logger = function (message, content) {
    gutil.log(message, content);
  };

  return through.obj(function(file, encoding, callback) {
    var multimocksTask = new MultimocksTask(logger);
    multimocksTask.writeScenarioData(file);
    callback(null, file);
  });
};
