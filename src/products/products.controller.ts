import { Controller, Get, Post, Body, Patch, Param, Delete, Put, Res, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Response } from 'express';
import { AuthGuard } from 'src/auth/jwt-auth.guard';

@UseGuards(AuthGuard)
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto, @Res() res:Response) {
    this.productsService.create(createProductDto).then(() => {
        res.status(201).json({
        })
    }).catch(error => {
      res.status(500).json({
        message: "Something went wrong",
        product: error
      });
    });
    }

  @Get()
  findAll(@Res() res:Response) {
    this.productsService.findAll().then(result => {
      return res.status(200).json({
        data: result
      })
    }).catch(error=> {
      return res.status(500).json({
        message: "Something went wrong",
      });
    });
  }

  @Get(':id')
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

  @Put(':id')
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
