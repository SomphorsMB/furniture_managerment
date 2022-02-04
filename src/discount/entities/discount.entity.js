"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Discount = void 0;
var product_detail_entity_1 = require("../../../../../../../../../src/product-details/entities/product-detail.entity");
var typeorm_1 = require("typeorm");
var Discount = /** @class */ (function () {
    function Discount() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Discount.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], Discount.prototype, "discount");
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return product_detail_entity_1.ProductDetail; }),
        (0, typeorm_1.JoinColumn)()
    ], Discount.prototype, "product");
    __decorate([
        (0, typeorm_1.Column)()
    ], Discount.prototype, "start_at");
    __decorate([
        (0, typeorm_1.Column)()
    ], Discount.prototype, "end_at");
    Discount = __decorate([
        (0, typeorm_1.Entity)()
    ], Discount);
    return Discount;
}());
exports.Discount = Discount;
