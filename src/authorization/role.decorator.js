"use strict";
exports.__esModule = true;
exports.Roles = exports.ROLES_KEY = void 0;
var common_1 = require("@nestjs/common");
exports.ROLES_KEY = 'roles';
var Roles = function () {
    var role = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        role[_i] = arguments[_i];
    }
    return (0, common_1.SetMetadata)(exports.ROLES_KEY, role);
};
exports.Roles = Roles;
