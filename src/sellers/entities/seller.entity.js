"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Seller = void 0;
var product_sold_entity_1 = require("../../../../../../../../../src/product-solds/entities/product-sold.entity");
var typeorm_1 = require("typeorm");
var Seller = /** @class */ (function () {
    function Seller() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Seller.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)()
    ], Seller.prototype, "firstName");
    __decorate([
        (0, typeorm_1.Column)()
    ], Seller.prototype, "lastName");
    __decorate([
        (0, typeorm_1.Column)()
    ], Seller.prototype, "gender");
    __decorate([
        (0, typeorm_1.Column)({ unique: true })
    ], Seller.prototype, "phone");
    __decorate([
        (0, typeorm_1.Column)()
    ], Seller.prototype, "address");
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ type: "timestamp", "default": function () { return "CURRENT_TIMESTAMP(6)"; } })
    ], Seller.prototype, "created_at");
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({ type: "timestamp", "default": function () { return "CURRENT_TIMESTAMP(6)"; }, onUpdate: "CURRENT_TIMESTAMP(6)" })
    ], Seller.prototype, "updated_at");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return product_sold_entity_1.ProductSold; }, function (productSold) { return productSold.seller; })
    ], Seller.prototype, "product_sold");
    Seller = __decorate([
        (0, typeorm_1.Entity)()
    ], Seller);
    return Seller;
}());
exports.Seller = Seller;
