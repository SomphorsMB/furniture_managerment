"use strict";
exports.__esModule = true;
exports.editFileName = exports.imageFileFilter = void 0;
var posix_1 = require("path/posix");
var imageFileFilter = function (req, file, callback) {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return callback(new Error('Only image file are allowed'), false);
    }
    callback(null, true);
};
exports.imageFileFilter = imageFileFilter;
var editFileName = function (req, file, callback) {
    var name = file.originalname.split('.')[0];
    var fileExtName = (0, posix_1.extname)(file.originalname);
    var randomName = Array(4)
        .fill(null)
        .map(function () { return Math.round(Math.random() * 16).toString(16); })
        .join('');
    callback(null, "".concat(name, "-").concat(randomName).concat(fileExtName));
};
exports.editFileName = editFileName;
