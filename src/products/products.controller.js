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
exports.__esModule = true;
exports.ProductsController = void 0;
var common_1 = require("@nestjs/common");
var jwt_auth_guard_1 = require("../../../../../../../../src/auth/jwt-auth.guard");
var role_guard_1 = require("../../../../../../../../src/authorization/role.guard");
var role_decorator_1 = require("../../../../../../../../src/authorization/role.decorator");
var role_enum_1 = require("../../../../../../../../src/authorization/role.enum");
var ProductsController = /** @class */ (function () {
    function ProductsController(productsService) {
        this.productsService = productsService;
    }
    ProductsController.prototype.create = function (createProductDto, res) {
        this.productsService.create(createProductDto).then(function () {
            res.status(201).json({
                message: "Product created succussfully"
            });
        })["catch"](function (error) {
            res.status(500).json({
                message: "Something went wrong",
                product: error
            });
        });
    };
    ProductsController.prototype.findAll = function (res) {
        this.productsService.findAll().then(function (result) {
            return res.status(200).json({
                data: result
            });
        })["catch"](function (error) {
            return res.status(500).json({
                message: "Something went wrong"
            });
        });
    };
    ProductsController.prototype.findOne = function (id, res) {
        this.productsService.findOne(+id).then(function (result) {
            if (result) {
                res.status(200).json(result);
            }
            else {
                return res.status(404).json({
                    message: "Product not found!"
                });
            }
        })["catch"](function (err) {
            res.status(500).json({
                message: "Something went wrong!",
                error: err
            });
        });
    };
    ProductsController.prototype.update = function (id, updateProductDto, res) {
        var _this = this;
        this.productsService.findOne(+id).then(function (result) {
            if (result) {
                _this.productsService.update(+id, updateProductDto).then(function () {
                    res.status(201).json({
                        message: "Updated Successfully"
                    });
                })["catch"](function (error) {
                    res.status(500).json({
                        message: "Something went wrong",
                        error: error
                    });
                });
            }
            else {
                return res.status(404).json({
                    message: "Product not found!"
                });
            }
        });
    };
    ProductsController.prototype.remove = function (id, res) {
        var _this = this;
        this.productsService.findOne(+id).then(function (result) {
            if (result) {
                _this.productsService.remove(+id).then(function () {
                    res.status(201).json({
                        message: "Deleted Successfully"
                    });
                })["catch"](function (error) {
                    res.status(500).json({
                        message: "Something went wrong",
                        error: error
                    });
                });
            }
            else {
                return res.status(404).json({
                    message: "Product not found!"
                });
            }
        });
    };
    __decorate([
        (0, common_1.UseGuards)(role_guard_1.RolesGuard),
        (0, role_decorator_1.Roles)(role_enum_1.Role.MANAGER),
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)()),
        __param(1, (0, common_1.Res)())
    ], ProductsController.prototype, "create");
    __decorate([
        (0, common_1.UseGuards)(role_guard_1.RolesGuard),
        (0, role_decorator_1.Roles)(role_enum_1.Role.MANAGER, role_enum_1.Role.SELLER),
        (0, common_1.Get)(),
        __param(0, (0, common_1.Res)())
    ], ProductsController.prototype, "findAll");
    __decorate([
        (0, common_1.UseGuards)(role_guard_1.RolesGuard),
        (0, role_decorator_1.Roles)(role_enum_1.Role.MANAGER, role_enum_1.Role.SELLER),
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Res)())
    ], ProductsController.prototype, "findOne");
    __decorate([
        (0, common_1.UseGuards)(role_guard_1.RolesGuard),
        (0, role_decorator_1.Roles)(role_enum_1.Role.MANAGER),
        (0, common_1.Put)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)()),
        __param(2, (0, common_1.Res)())
    ], ProductsController.prototype, "update");
    __decorate([
        (0, common_1.UseGuards)(role_guard_1.RolesGuard),
        (0, role_decorator_1.Roles)(role_enum_1.Role.MANAGER),
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Res)())
    ], ProductsController.prototype, "remove");
    ProductsController = __decorate([
        (0, common_1.UseGuards)(jwt_auth_guard_1.AuthGuard),
        (0, common_1.Controller)('products')
    ], ProductsController);
    return ProductsController;
}());
exports.ProductsController = ProductsController;
