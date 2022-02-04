"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateProductDetailDto = void 0;
var class_validator_1 = require("class-validator");
var CreateProductDetailDto = /** @class */ (function () {
    function CreateProductDetailDto() {
    }
    __decorate([
        (0, class_validator_1.IsNotEmpty)()
    ], CreateProductDetailDto.prototype, "product");
    __decorate([
        (0, class_validator_1.IsNotEmpty)()
    ], CreateProductDetailDto.prototype, "supplier");
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.MinLength)(2),
        (0, class_validator_1.IsAlpha)()
    ], CreateProductDetailDto.prototype, "size");
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsNumberString)()
    ], CreateProductDetailDto.prototype, "unit");
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.MinLength)(3),
        (0, class_validator_1.IsAlpha)()
    ], CreateProductDetailDto.prototype, "color");
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.MinLength)(2),
        (0, class_validator_1.IsAlpha)()
    ], CreateProductDetailDto.prototype, "rawMaterial");
    __decorate([
        (0, class_validator_1.IsNotEmpty)(),
        (0, class_validator_1.IsNumberString)()
    ], CreateProductDetailDto.prototype, "price");
    return CreateProductDetailDto;
}());
exports.CreateProductDetailDto = CreateProductDetailDto;
