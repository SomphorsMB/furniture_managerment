import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { ProductSoldsService } from './product-solds.service';
import { CreateProductSoldDto } from './dto/create-product-sold.dto';
import { UpdateProductSoldDto } from './dto/update-product-sold.dto';
import { Response } from 'express';

@Controller('product-solds')
export class ProductSoldsController {
  constructor(private readonly productSoldsService: ProductSoldsService) {}

  @Post('create')
  createProductSold(@Body() createProductSoldDto: CreateProductSoldDto,@Res() res:Response) {
    this.productSoldsService.create(createProductSoldDto).then(()=>{
      return res.status(201).json({message:"Product sold created successfully!"});
    }).catch(error=>{
      return res.set(500).json({
        message:"Something went wrong!",
        ProductSold:error
      });
    });
  }

  @Get()
  findAllProductSold(@Res() res:Response) {
    this.productSoldsService.findAll().then(result=>{
      return res.status(200).json(result);
    }).catch(error=>{
      return res.status(500).json(error);
    });
  }

  @Get(':id')
  findOneProductSold(@Param('id') id: string,@Res() res:Response) {
    this.productSoldsService.findOne(+id).then(result =>{
      if(result){
        return res.status(200).json({result});
      }else{
        return res.status(404).json({message:'Product sold not found!'});
      }
    }).catch(error=>{
      res.status(500).json({message:'Something went wrong!',error:error});
    });
  }

  @Patch('update/:id')
  async updateProductSold(@Param('id') id: string, @Body() updateProductSoldDto: UpdateProductSoldDto,@Res() res:Response) {
    this.productSoldsService.findOne(+id).then((result)=> {
      if(result){
         this.productSoldsService.update(+id,updateProductSoldDto).then(()=>{
          return res.status(201).json({message:'Updated product sold successfully!'});
        }).catch(error=>{
          return res.status(500).json({
            message:'Something went wrong!',
            error:error
          });
        })
      }else{
        return res.status(404).json({message:'Product sold not found!'});
      }
    });
  }

  @Delete(':id')
  removeProductSold(@Param('id') id: string,@Res() res:Response) {
    this.productSoldsService.findOne(+id).then(result=>{
      if(result){
        this.productSoldsService.remove(+id).then(()=>{
          return res.status(201).json({message:'Deleted Product sold successfully!'});
        }).catch(error=>{
          return res.status(500).json({
            message:'Something went wrong!',
            error:error
          });
        });
      }else{
        return res.status(404).json({message:'Product sold not found!'});
      }
    });
  }
}
