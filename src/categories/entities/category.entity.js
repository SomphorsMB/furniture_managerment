"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.Category = void 0;
var product_entity_1 = require("../../../../../../../../../src/products/entities/product.entity");
var typeorm_1 = require("typeorm");
var Category = /** @class */ (function () {
    function Category() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)()
    ], Category.prototype, "id");
    __decorate([
        (0, typeorm_1.Column)({ unique: true })
    ], Category.prototype, "name");
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ type: "timestamp", "default": function () { return "CURRENT_TIMESTAMP(6)"; } })
    ], Category.prototype, "created_at");
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({ type: "timestamp", "default": function () { return "CURRENT_TIMESTAMP(6)"; }, onUpdate: "CURRENT_TIMESTAMP(6)" })
    ], Category.prototype, "updated_at");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return product_entity_1.Product; }, function (product) { return product.category; })
    ], Category.prototype, "product");
    Category = __decorate([
        (0, typeorm_1.Entity)()
    ], Category);
    return Category;
}());
exports.Category = Category;
