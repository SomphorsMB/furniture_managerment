"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductDetailsModule = void 0;
var common_1 = require("@nestjs/common");
var product_details_service_1 = require("./product-details.service");
var product_details_controller_1 = require("./product-details.controller");
var product_detail_entity_1 = require("./entities/product-detail.entity");
var product_details_repository_1 = require("./product-details-repository");
var typeorm_1 = require("@nestjs/typeorm");
var ProductDetailsModule = /** @class */ (function () {
    function ProductDetailsModule() {
    }
    ProductDetailsModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature([product_detail_entity_1.ProductDetail, product_details_repository_1.ProductDetailRepository])],
            controllers: [product_details_controller_1.ProductDetailsController],
            providers: [product_details_service_1.ProductDetailsService]
        })
    ], ProductDetailsModule);
    return ProductDetailsModule;
}());
exports.ProductDetailsModule = ProductDetailsModule;
