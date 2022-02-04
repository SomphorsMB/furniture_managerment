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
exports.ProductDetailsService = void 0;
var common_1 = require("@nestjs/common");
var product_detail_entity_1 = require("./entities/product-detail.entity");
var ProductDetailsService = /** @class */ (function () {
    function ProductDetailsService(_productDetailRepository) {
        this._productDetailRepository = _productDetailRepository;
    }
    ProductDetailsService.prototype.create = function (createProductDetailDto) {
        return this._productDetailRepository
            .createQueryBuilder()
            .insert()
            .values(__assign({}, createProductDetailDto))
            .execute();
    };
    ProductDetailsService.prototype.findAll = function () {
        return this._productDetailRepository
            .createQueryBuilder()
            .getMany();
    };
    ProductDetailsService.prototype.findOne = function (id) {
        return this._productDetailRepository
            .createQueryBuilder('productDetail')
            .select('productDetail')
            .where("productDetail.id=:id", { id: id })
            .getOne();
    };
    ProductDetailsService.prototype.update = function (id, updateProductDetailDto) {
        return this._productDetailRepository
            .createQueryBuilder()
            .update()
            .set(__assign({}, updateProductDetailDto))
            .where("id=:id", { id: id })
            .execute();
    };
    ProductDetailsService.prototype.remove = function (id) {
        return this._productDetailRepository
            .createQueryBuilder()["delete"]()
            .from(product_detail_entity_1.ProductDetail)
            .where("id=:id", { id: id })
            .execute();
    };
    ProductDetailsService = __decorate([
        (0, common_1.Injectable)()
    ], ProductDetailsService);
    return ProductDetailsService;
}());
exports.ProductDetailsService = ProductDetailsService;
