"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
require("dotenv/config");
var typeorm_1 = require("@nestjs/typeorm");
var categories_module_1 = require("./categories/categories.module");
var category_entity_1 = require("./categories/entities/category.entity");
var users_module_1 = require("./users/users.module");
var user_entity_1 = require("./users/entities/user.entity");
var product_suppliers_module_1 = require("./product-suppliers/product-suppliers.module");
var product_supplier_entity_1 = require("./product-suppliers/entities/product-supplier.entity");
var products_module_1 = require("./products/products.module");
var product_entity_1 = require("./products/entities/product.entity");
var sellers_module_1 = require("./sellers/sellers.module");
var seller_entity_1 = require("./sellers/entities/seller.entity");
var product_solds_module_1 = require("./product-solds/product-solds.module");
var product_sold_entity_1 = require("./product-solds/entities/product-sold.entity");
var product_details_module_1 = require("./product-details/product-details.module");
var platform_express_1 = require("@nestjs/platform-express");
var product_detail_entity_1 = require("./product-details/entities/product-detail.entity");
var auth_module_1 = require("./auth/auth.module");
var discount_module_1 = require("./discount/discount.module");
var discount_entity_1 = require("./discount/entities/discount.entity");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forRoot({
                    type: "mysql",
                    host: process.env.DB_HOST,
                    port: parseInt(process.env.DB_PORT),
                    username: process.env.DB_USER,
                    password: process.env.DB_PASS,
                    database: process.env.DB_NAME,
                    timezone: process.env.DB_Time,
                    synchronize: true,
                    entities: [user_entity_1.User, product_supplier_entity_1.ProductSupplier, product_entity_1.Product, category_entity_1.Category, seller_entity_1.Seller, product_sold_entity_1.ProductSold, product_detail_entity_1.ProductDetail, discount_entity_1.Discount]
                }), users_module_1.UsersModule, product_suppliers_module_1.ProductSuppliersModule, products_module_1.ProductsModule, categories_module_1.CategoriesModule, sellers_module_1.SellersModule, sellers_module_1.SellersModule, product_solds_module_1.ProductSoldsModule, product_details_module_1.ProductDetailsModule, auth_module_1.AuthModule, platform_express_1.MulterModule.register({
                    dest: './files'
                }), discount_module_1.DiscountModule],
            controllers: [],
            providers: []
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
