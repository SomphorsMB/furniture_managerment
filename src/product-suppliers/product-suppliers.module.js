"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProductSuppliersModule = void 0;
var common_1 = require("@nestjs/common");
var product_suppliers_service_1 = require("./product-suppliers.service");
var product_suppliers_controller_1 = require("./product-suppliers.controller");
var typeorm_1 = require("@nestjs/typeorm");
var product_supplier_entity_1 = require("./entities/product-supplier.entity");
var product_suppliers_repository_1 = require("./product-suppliers.repository");
var ProductSuppliersModule = /** @class */ (function () {
    function ProductSuppliersModule() {
    }
    ProductSuppliersModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature([product_supplier_entity_1.ProductSupplier, product_suppliers_repository_1.ProductSupplierRepository])],
            controllers: [product_suppliers_controller_1.ProductSuppliersController],
            providers: [product_suppliers_service_1.ProductSuppliersService]
        })
    ], ProductSuppliersModule);
    return ProductSuppliersModule;
}());
exports.ProductSuppliersModule = ProductSuppliersModule;
