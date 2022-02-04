"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductDetail = void 0;
var product_supplier_entity_1 = require("../../../../../../../../../src/product-suppliers/entities/product-supplier.entity");
var product_entity_1 = require("../../../../../../../../../src/products/entities/product.entity");
var typeorm_1 = require("typeorm");
var ProductDetail = /** @class */ (function () {
    function ProductDetail() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], ProductDetail.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], ProductDetail.prototype, "avatar");
    __decorate([
        (0, typeorm_1.Column)()
    ], ProductDetail.prototype, "size");
    __decorate([
        (0, typeorm_1.Column)()
    ], ProductDetail.prototype, "unit");
    __decorate([
        (0, typeorm_1.Column)()
    ], ProductDetail.prototype, "color");
    __decorate([
        (0, typeorm_1.Column)()
    ], ProductDetail.prototype, "rawMaterial");
    __decorate([
        (0, typeorm_1.Column)()
    ], ProductDetail.prototype, "price");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return product_entity_1.Product; }, function (product) { return product.product_detail; }, { onDelete: 'CASCADE' }),
        (0, typeorm_1.JoinColumn)()
    ], ProductDetail.prototype, "product");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return product_supplier_entity_1.ProductSupplier; }, function (productSupplier) { return productSupplier.product_detail; }, { onDelete: 'CASCADE' }),
        (0, typeorm_1.JoinColumn)()
    ], ProductDetail.prototype, "supplier");
    ProductDetail = __decorate([
        (0, typeorm_1.Entity)()
    ], ProductDetail);
    return ProductDetail;
}());
exports.ProductDetail = ProductDetail;
