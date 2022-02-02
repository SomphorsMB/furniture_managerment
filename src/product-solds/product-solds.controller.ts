import { Controller, Get, Post, Body, Patch, Param, Delete, Res, UseGuards } from '@nestjs/common';
import { ProductSoldsService } from './product-solds.service';
import { CreateProductSoldDto } from './dto/create-product-sold.dto';
import { UpdateProductSoldDto } from './dto/update-product-sold.dto';
import { Response } from 'express';
import { AuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/authorization/role.guard';
import { Roles } from 'src/authorization/role.decorator';
import { Role } from 'src/authorization/role.enum';

@UseGuards(AuthGuard)
@Controller('product-solds')
export class ProductSoldsController {
  constructor(private readonly productSoldsService: ProductSoldsService) {}

  @UseGuards(RolesGuard)
  @Roles(Role.MANAGER, Role.SELLER)
  @Post()
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

  @UseGuards(RolesGuard)
  @Roles(Role.MANAGER, Role.SELLER)
  @Get()
  findAllProductSold(@Res() res:Response) {
    this.productSoldsService.findAll().then(result=>{
      return res.status(200).json(result);
    }).catch(error=>{
      return res.status(500).json(error);
    });
  }

  @UseGuards(RolesGuard)
  @Roles(Role.MANAGER, Role.SELLER)
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

  @UseGuards(RolesGuard)
  @Roles(Role.MANAGER)
  @Patch(':id')
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

  @UseGuards(RolesGuard)
  @Roles(Role.MANAGER)
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
