'use strict';

var jsonfile = require('jsonfile');
var file = 'version.json';
var obj = {
    version: $.dev ? '' : `?rel=${$.package.version}`,
    suffix: $.dev ? '' : '.min'
};

module.exports = function () {
    $
        .gulp
        .task('create:version', function (cb) {
            jsonfile
                .writeFile(file, obj, function (err) {
                    cb();
                });
        });
};