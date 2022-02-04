"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductSupplier = void 0;
var product_detail_entity_1 = require("../../../../../../../../../src/product-details/entities/product-detail.entity");
var typeorm_1 = require("typeorm");
var ProductSupplier = /** @class */ (function () {
    function ProductSupplier() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], ProductSupplier.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], ProductSupplier.prototype, "brand");
    __decorate([
        (0, typeorm_1.Column)()
    ], ProductSupplier.prototype, "country");
    __decorate([
        (0, typeorm_1.Column)(null)
    ], ProductSupplier.prototype, "logo");
    __decorate([
        (0, typeorm_1.Column)({ type: 'datetime', "default": function () { return 'CURRENT_TIMESTAMP'; } })
    ], ProductSupplier.prototype, "created_at");
    __decorate([
        (0, typeorm_1.Column)({ type: 'datetime', nullable: true, onUpdate: 'CURRENT_TIMESTAMP' })
    ], ProductSupplier.prototype, "updated_at");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return product_detail_entity_1.ProductDetail; }, function (product) { return product.supplier; })
    ], ProductSupplier.prototype, "product_detail");
    ProductSupplier = __decorate([
        (0, typeorm_1.Entity)()
    ], ProductSupplier);
    return ProductSupplier;
}());
exports.ProductSupplier = ProductSupplier;
