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
exports.DiscountController = void 0;
var common_1 = require("@nestjs/common");
var role_decorator_1 = require("../../../../../../../../src/authorization/role.decorator");
var role_enum_1 = require("../../../../../../../../src/authorization/role.enum");
var role_guard_1 = require("../../../../../../../../src/authorization/role.guard");
var DiscountController = /** @class */ (function () {
    function DiscountController(discountService) {
        this.discountService = discountService;
    }
    DiscountController.prototype.create = function (createDiscountDto, res) {
        this.discountService.create(createDiscountDto).then(function (result) {
            res.status(201).json({
                message: "Created Sucessfully"
            });
        })["catch"](function (error) {
            res.status(500).json({
                message: "Something went wrong",
                error: error
            });
        });
    };
    DiscountController.prototype.findAll = function (res) {
        this.discountService.findAll().then(function (result) {
            res.status(200).json({
                data: result
            });
        })["catch"](function (error) {
            res.status(500).json({
                message: "Something went wrong",
                error: error
            });
        });
        ;
    };
    DiscountController.prototype.findOne = function (id, res) {
        this.discountService.findOne(+id).then(function (result) {
            if (result) {
                res.status(200).json(result);
            }
            else {
                return res.status(404).json({
                    message: "Discount not found!"
                });
            }
        })["catch"](function (error) {
            res.status(500).json({
                message: "Something went wrong!",
                error: error
            });
        });
    };
    DiscountController.prototype.update = function (id, updateDiscountDto, res) {
        return this.discountService.update(+id, updateDiscountDto).then(function () {
            res.status(201).json({
                message: "Updated Successfully"
            });
        })["catch"](function (error) {
            res.status(500).json({
                message: "Something went wrong",
                error: error
            });
        });
    };
    DiscountController.prototype.remove = function (id, res) {
        var _this = this;
        this.discountService.findOne(+id).then(function (result) {
            if (result) {
                _this.discountService.remove(+id).then(function () {
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
                    message: "Discount not found!"
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
    ], DiscountController.prototype, "create");
    __decorate([
        (0, common_1.UseGuards)(role_guard_1.RolesGuard),
        (0, role_decorator_1.Roles)(role_enum_1.Role.MANAGER),
        (0, common_1.Get)(),
        __param(0, (0, common_1.Res)())
    ], DiscountController.prototype, "findAll");
    __decorate([
        (0, common_1.UseGuards)(role_guard_1.RolesGuard),
        (0, role_decorator_1.Roles)(role_enum_1.Role.MANAGER),
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Res)())
    ], DiscountController.prototype, "findOne");
    __decorate([
        (0, common_1.UseGuards)(role_guard_1.RolesGuard),
        (0, role_decorator_1.Roles)(role_enum_1.Role.MANAGER),
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)()),
        __param(2, (0, common_1.Res)())
    ], DiscountController.prototype, "update");
    __decorate([
        (0, common_1.UseGuards)(role_guard_1.RolesGuard),
        (0, role_decorator_1.Roles)(role_enum_1.Role.MANAGER),
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Res)())
    ], DiscountController.prototype, "remove");
    DiscountController = __decorate([
        (0, common_1.Controller)('discount')
    ], DiscountController);
    return DiscountController;
}());
exports.DiscountController = DiscountController;
