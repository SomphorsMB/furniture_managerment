"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductSoldsService = void 0;
var common_1 = require("@nestjs/common");
var product_sold_entity_1 = require("./entities/product-sold.entity");
var ProductSoldsService = /** @class */ (function () {
    function ProductSoldsService(_productSoldRepository) {
        this._productSoldRepository = _productSoldRepository;
    }
    ProductSoldsService.prototype.create = function (createProductSoldDto) {
        return this._productSoldRepository
            .createQueryBuilder()
            .insert()
            .values(__assign({}, createProductSoldDto))
            .execute();
    };
    ProductSoldsService.prototype.findAll = function () {
        return this._productSoldRepository
            .createQueryBuilder()
            .getMany();
    };
    ProductSoldsService.prototype.findOne = function (id) {
        return this._productSoldRepository
            .createQueryBuilder('productSold')
            .select('productSold')
            .where('productSold.id=:id', { id: id })
            .getOne();
    };
    ProductSoldsService.prototype.update = function (id, updateProductSoldDto) {
        return this._productSoldRepository
            .createQueryBuilder()
            .update()
            .set(__assign({}, updateProductSoldDto))
            .where('id=:id', { id: id })
            .execute();
    };
    ProductSoldsService.prototype.remove = function (id) {
        return this._productSoldRepository
            .createQueryBuilder()["delete"]()
            .from(product_sold_entity_1.ProductSold)
            .where('id=:id', { id: id })
            .execute();
    };
    ProductSoldsService = __decorate([
        (0, common_1.Injectable)()
    ], ProductSoldsService);
    return ProductSoldsService;
}());
exports.ProductSoldsService = ProductSoldsService;
