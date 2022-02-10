import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { ProductCartService } from './product-cart.service';
import { CreateProductCartDto } from './dto/create-product-cart.dto';
import { UpdateProductCartDto } from './dto/update-product-cart.dto';
import { Response } from 'express';

@Controller('product-cart')
export class ProductCartController {
  constructor(private readonly productCartService: ProductCartService) {}

  @Post()
  create(@Body() createProductCartDto: CreateProductCartDto,@Res() res:Response) {

    this.productCartService.findOne(+createProductCartDto.product).then(result=> {
      console.log(result)
      if (result){
        // if (result.unit+createProductCartDto.unit)
        this.productCartService.update(result.id,{product: createProductCartDto.product, unit: createProductCartDto.unit+result.unit});
      }else{
        this.productCartService.create(createProductCartDto).then(()=>{
          return res.status(201).json({message:"Product Cart created successfully!"});
        }).catch(error=>{
          return res.set(500).json({
            message:"Something went wrong!",
            ProductSold:error
          });
        });
      }
    })
    
  }

  @Get()
  findAll(@Res() res:Response) {
    this.productCartService.findAll().then(result => {
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
    return this.productCartService.findOne(+id).then(result => {
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

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductCartDto: UpdateProductCartDto, @Res() res: Response) {
    console.log(id, updateProductCartDto)
    this.productCartService.update(+id, updateProductCartDto).then((result) => {
      res.status(201).json({
        message: "Updated Successfully",
        data: result
      })
    }).catch(error => {
      res.status(500).json({
          message: "Something went wrong",
          error: error
      })
    });
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Res() res: Response) {
    this.productCartService.remove(+id).then(() => {
      res.status(201).json({
        message: "Deleted Successfully"
      })
    }).catch(error => {
      res.status(500).json({
          message: "Something went wrong",
          error: error
      })
  });
  }

  @Delete()
  deleteAll( @Res() res: Response) {
    this.productCartService.deleteAll().then(() => {
      res.status(201).json({
        message: "Deleted Successfully"
      })
    }).catch(error => {
      res.status(500).json({
          message: "Something went wrong",
          error: error
      })
  });
  }
}
