"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductSoldsModule = void 0;
var common_1 = require("@nestjs/common");
var product_solds_service_1 = require("./product-solds.service");
var product_solds_controller_1 = require("./product-solds.controller");
var typeorm_1 = require("@nestjs/typeorm");
var product_sold_entity_1 = require("./entities/product-sold.entity");
var product_solds_repository_1 = require("./product-solds.repository");
var ProductSoldsModule = /** @class */ (function () {
    function ProductSoldsModule() {
    }
    ProductSoldsModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature([product_sold_entity_1.ProductSold, product_solds_repository_1.ProductSoldRepository])],
            controllers: [product_solds_controller_1.ProductSoldsController],
            providers: [product_solds_service_1.ProductSoldsService]
        })
    ], ProductSoldsModule);
    return ProductSoldsModule;
}());
exports.ProductSoldsModule = ProductSoldsModule;
