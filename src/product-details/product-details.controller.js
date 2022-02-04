"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.ProductDetailsController = void 0;
var common_1 = require("@nestjs/common");
var platform_express_1 = require("@nestjs/platform-express");
var file_uploading_utils_1 = require("../../../../../../../../src/utils/file-uploading.utils");
var multer_1 = require("multer");
var ProductDetailsController = /** @class */ (function () {
    function ProductDetailsController(productDetailsService) {
        this.productDetailsService = productDetailsService;
    }
    ProductDetailsController.prototype.createPostDetail = function (createProductDetailDto, file, res) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (file) {
                    createProductDetailDto.avatar = file.filename;
                    this.productDetailsService.create(createProductDetailDto).then(function () {
                        return res.status(201).json({ message: "Product sold is created successfully!" });
                    })["catch"](function (error) {
                        return res.status(500).json({
                            message: "Something went wrong!",
                            error: error
                        });
                    });
                }
                else {
                    res.status(400).json({ message: 'Please select the photo!' });
                }
                return [2 /*return*/];
            });
        });
    };
    ProductDetailsController.prototype.seeUploadFile = function (imagpath, res) {
        console.log(imagpath);
        return res.sendFile(imagpath, { root: './files' });
    };
    ProductDetailsController.prototype.findAllProductDetail = function (res) {
        this.productDetailsService.findAll().then(function (result) {
            return res.status(200).json(result);
        })["catch"](function (error) {
            return res.status(500).json(error);
        });
    };
    ProductDetailsController.prototype.findOneProductDetail = function (id, res) {
        this.productDetailsService.findOne(+id).then(function (result) {
            if (result) {
                return res.status(200).json({ result: result });
            }
            else {
                return res.status(404).json({ message: 'Product detail not found!' });
            }
        })["catch"](function (error) {
            res.status(500).json({ message: 'Something went wrong!', error: error });
        });
    };
    ProductDetailsController.prototype.updateProductDetail = function (id, updateProductDetailDto, file, res) {
        var _this = this;
        if (file) {
            updateProductDetailDto.avatar = file.filename;
            this.productDetailsService.findOne(+id).then(function (result) {
                if (result) {
                    _this.productDetailsService.update(+id, updateProductDetailDto).then(function () {
                        return res.status(201).json({ message: 'Updated product detail successfully!' });
                    })["catch"](function (error) {
                        return res.status(500).json({
                            message: 'Something went wrong!',
                            error: error
                        });
                    });
                }
                else {
                    return res.status(404).json({ message: 'Product detail not found!' });
                }
            });
        }
        else {
            this.productDetailsService.findOne(+id).then(function (result) {
                if (result) {
                    updateProductDetailDto.avatar = result.avatar;
                    _this.productDetailsService.update(+id, updateProductDetailDto).then(function () {
                        return res.status(201).json({ message: 'Updated product detail successfully!' });
                    })["catch"](function (error) {
                        return res.status(500).json({
                            message: 'Something went wrong!',
                            error: error
                        });
                    });
                }
                else {
                    return res.status(404).json({ message: 'Product detail not found!' });
                }
            });
        }
    };
    ProductDetailsController.prototype.removeProductDetail = function (id, res) {
        var _this = this;
        this.productDetailsService.findOne(+id).then(function (result) {
            if (result) {
                _this.productDetailsService.remove(+id).then(function () {
                    return res.status(201).json({ message: 'Deleted Product detail successfully!' });
                })["catch"](function (error) {
                    return res.status(500).json({
                        message: 'Something went wrong!',
                        error: error
                    });
                });
            }
            else {
                return res.status(404).json({ message: 'Product detail not found!' });
            }
        });
    };
    __decorate([
        (0, common_1.Post)(),
        (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('avatar', {
            storage: (0, multer_1.diskStorage)({
                destination: './files',
                filename: file_uploading_utils_1.editFileName
            }),
            fileFilter: file_uploading_utils_1.imageFileFilter
        })),
        __param(0, (0, common_1.Body)()),
        __param(1, (0, common_1.UploadedFile)()),
        __param(2, (0, common_1.Res)())
    ], ProductDetailsController.prototype, "createPostDetail");
    __decorate([
        (0, common_1.Get)('image/:imagpath'),
        __param(0, (0, common_1.Param)('imagpath')),
        __param(1, (0, common_1.Res)())
    ], ProductDetailsController.prototype, "seeUploadFile");
    __decorate([
        (0, common_1.Get)(),
        __param(0, (0, common_1.Res)())
    ], ProductDetailsController.prototype, "findAllProductDetail");
    __decorate([
        (0, common_1.Get)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Res)())
    ], ProductDetailsController.prototype, "findOneProductDetail");
    __decorate([
        (0, common_1.Patch)(':id'),
        (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('avatar', {
            storage: (0, multer_1.diskStorage)({
                destination: './files',
                filename: file_uploading_utils_1.editFileName
            }),
            fileFilter: file_uploading_utils_1.imageFileFilter
        })),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)()),
        __param(2, (0, common_1.UploadedFile)()),
        __param(3, (0, common_1.Res)())
    ], ProductDetailsController.prototype, "updateProductDetail");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Res)())
    ], ProductDetailsController.prototype, "removeProductDetail");
    ProductDetailsController = __decorate([
        (0, common_1.Controller)('product-details')
    ], ProductDetailsController);
    return ProductDetailsController;
}());
exports.ProductDetailsController = ProductDetailsController;
