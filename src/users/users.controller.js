"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.UsersController = void 0;
var common_1 = require("@nestjs/common");
var bcrypt = require("bcrypt");
var jwt_auth_guard_1 = require("../../../../../../../../src/auth/jwt-auth.guard");
var role_decorator_1 = require("../../../../../../../../src/authorization/role.decorator");
var role_enum_1 = require("../../../../../../../../src/authorization/role.enum");
var role_guard_1 = require("../../../../../../../../src/authorization/role.guard");
var UsersController = /** @class */ (function () {
    function UsersController(usersService) {
        this.usersService = usersService;
    }
    UsersController.prototype.create = function (createUserDto) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, email;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = createUserDto;
                        return [4 /*yield*/, bcrypt.hash(createUserDto.password, 12)];
                    case 1:
                        _a.password = _b.sent();
                        return [4 /*yield*/, this.usersService.findUserByEmail(createUserDto.email)];
                    case 2:
                        email = _b.sent();
                        if (email) {
                            throw new common_1.HttpException('The email has already been taken !', common_1.HttpStatus.CONFLICT);
                        }
                        return [2 /*return*/, this.usersService.create(createUserDto)];
                }
            });
        });
    };
    UsersController.prototype.findAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usersService.findAll()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UsersController.prototype.update = function (userId, req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body;
                        return [4 /*yield*/, bcrypt.hash(req.body.password, 12)];
                    case 1:
                        _a.password = _b.sent();
                        this.usersService.update(userId, req.body)
                            .then(function () {
                            res.status(200).json({
                                message: 'User has been updated successfully',
                                user: req.body
                            });
                        })["catch"](function (err) {
                            return res.status(500).json({
                                message: 'Internal server error, user cannot be updated!',
                                error: err
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        (0, common_1.Post)('register'),
        __param(0, (0, common_1.Body)())
    ], UsersController.prototype, "create");
    __decorate([
        (0, common_1.UseGuards)(jwt_auth_guard_1.AuthGuard, role_guard_1.RolesGuard),
        (0, role_decorator_1.Roles)(role_enum_1.Role.MANAGER),
        (0, common_1.Get)()
    ], UsersController.prototype, "findAll");
    __decorate([
        (0, common_1.Patch)('update/:userId'),
        __param(0, (0, common_1.Param)('userId')),
        __param(1, (0, common_1.Req)()),
        __param(2, (0, common_1.Res)())
    ], UsersController.prototype, "update");
    UsersController = __decorate([
        (0, common_1.Controller)('users')
    ], UsersController);
    return UsersController;
}());
exports.UsersController = UsersController;
