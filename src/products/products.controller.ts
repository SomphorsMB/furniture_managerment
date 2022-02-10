import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Res, UseGuards, Query, DefaultValuePipe, ParseIntPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Response } from 'express';
import { AuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/authorization/role.guard';
import { Roles } from 'src/authorization/role.decorator';
import { Role } from 'src/authorization/role.enum';
import { Product } from './entities/product.entity';
import { Pagination } from 'nestjs-typeorm-paginate';

@UseGuards(AuthGuard)
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('')
  async index(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number = 1,
    @Query('limit', new DefaultValuePipe(12), ParseIntPipe) limit: number = 10
  ): Promise<Pagination<Product>> {
    limit = limit > 100 ? 100 : limit;
    return this.productsService.findAll({
      page,
      limit,
      route: 'http://localhost:5000/api/products/'
    })
  }

  @UseGuards(RolesGuard)
  @Roles(Role.MANAGER)
  @Post()
  create(@Body() createProductDto: CreateProductDto, @Res() res:Response) {
    this.productsService.create(createProductDto).then((product) => {
        return res.status(201).json({
          message: "Product created succussfully",
          productId:product.identifiers[0].id

        })
    }).catch(error => {
      return res.status(500).json({
        message: "Something went wrong",
        product: error
      });
    });
    }

  @UseGuards(RolesGuard)
  @Roles(Role.MANAGER, Role.SELLER)
  @Get('getAll')
  findAll(@Res() res:Response) {
    this.productsService.findAllProduct().then(result => {
      return res.status(200).json({
        data: result
      })
    }).catch(error=> {
      return res.status(500).json({
        message: "Something went wrong",
      });
    });
  }

  @UseGuards(RolesGuard)
  @Roles(Role.MANAGER, Role.SELLER)
  @Get('oneProduct/:id')
  findOne(@Param('id') id: string, @Res() res:Response) {
    this.productsService.findOne(+id).then(result => {
      if(result){
        res.status(200).json(result);
    }else {
        return res.status(404).json({
            message: "Product not found!"
        });
    }
    }).catch(err => {
      res.status(500).json({
          message: "Something went wrong!",
          error: err
      })
  });
  }

  @UseGuards(RolesGuard)
  @Roles(Role.MANAGER, Role.SELLER)
  @Get('/product-discount')
  findProductDiscount(@Res() res:Response) {
    this.productsService.getProductDiscount().then(result => {
      return res.status(200).json({
        data: result
      })
    }).catch(error=> {
      return res.status(500).json({
        message: "Something went wrong",
      });
    });
  }

  @UseGuards(RolesGuard)
  @Roles(Role.MANAGER)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto, @Res() res: Response) {
    this.productsService.findOne(+id).then(result => {
      if (result){
        this.productsService.update(+id, updateProductDto).then(() => {
          res.status(201).json({
            message: "Updated Successfully"
          })
        }).catch(error => {
          res.status(500).json({
              message: "Something went wrong",
              error: error
          })
      });
      }else{
        return res.status(404).json({
          message: "Product not found!"
      });
      }
    })

  }

  @UseGuards(RolesGuard)
  @Roles(Role.MANAGER)
  @Delete(':id')
  remove(@Param('id') id: string, @Res() res: Response) {
    this.productsService.findOne(+id).then(result => {
      if (result){
        this.productsService.remove(+id).then(() => {
          res.status(201).json({
            message: "Deleted Successfully"
          })
        }).catch(error => {
          res.status(500).json({
              message: "Something went wrong",
              error: error
          })
      });
      }else{
        return res.status(404).json({
          message: "Product not found!"
      });
      }
    })
  }
}
