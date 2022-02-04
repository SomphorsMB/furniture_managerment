"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Product = void 0;
var category_entity_1 = require("../../../../../../../../../src/categories/entities/category.entity");
var product_detail_entity_1 = require("../../../../../../../../../src/product-details/entities/product-detail.entity");
var product_sold_entity_1 = require("../../../../../../../../../src/product-solds/entities/product-sold.entity");
var typeorm_1 = require("typeorm");
var Product = /** @class */ (function () {
    function Product() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Product.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], Product.prototype, "name");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return category_entity_1.Category; }, function (category) { return category.product; }, { onDelete: 'CASCADE' }),
        (0, typeorm_1.JoinColumn)()
    ], Product.prototype, "category");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return product_sold_entity_1.ProductSold; }, function (productSold) { return productSold.product; })
    ], Product.prototype, "product_sold");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return product_detail_entity_1.ProductDetail; }, function (productDetail) { return productDetail.product; })
    ], Product.prototype, "product_detail");
    __decorate([
        (0, typeorm_1.Column)({ type: 'datetime', "default": function () { return 'CURRENT_TIMESTAMP(6)'; } })
    ], Product.prototype, "created_at");
    __decorate([
        (0, typeorm_1.Column)({ type: 'datetime', nullable: true, "default": function () { return "CURRENT_TIMESTAMP(6)"; }, onUpdate: "CURRENT_TIMESTAMP(6)" })
    ], Product.prototype, "updated_at");
    Product = __decorate([
        (0, typeorm_1.Entity)()
    ], Product);
    return Product;
}());
exports.Product = Product;
