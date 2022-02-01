import { Controller, Get, Post, Body, Patch, Param, Delete, Res, BadRequestException,UseGuards } from '@nestjs/common';
import { ProductSuppliersService } from './product-suppliers.service';
import { CreateProductSupplierDto } from './dto/create-product-supplier.dto';
import { UpdateProductSupplierDto } from './dto/update-product-supplier.dto';
import { Response } from 'express';
import { AuthGuard } from 'src/auth/jwt-auth.guard';
import { RolesGuard } from 'src/authorization/role.guard';
import { Roles } from 'src/authorization/role.decorator';
import { Role } from 'src/authorization/role.enum';

@UseGuards(AuthGuard)
@Controller('product-suppliers')
export class ProductSuppliersController {
  constructor(private readonly productSuppliersService: ProductSuppliersService) {}

  @UseGuards(RolesGuard)
  @Roles(Role.MANAGER)
  @Post()
  create(@Body() createProductSupplierDto: CreateProductSupplierDto, @Res() res: Response) {
    this.productSuppliersService.create(createProductSupplierDto).then(result => {
        res.status(201).json({
          message: "Created Sucessfully"
        })
    }).catch(error => {
      res.status(500).json({
        message: "Something went wrong",
        error: error
      });
    });
  }

  @UseGuards(RolesGuard)
  @Roles(Role.MANAGER, Role.SELLER)
  @Get()
  findAll( @Res() res: Response) {
    return this.productSuppliersService.findAll().then(result => {
      res.status(200).json({
        data: result
      })
    }).catch(error=> {
      res.status(500).json({
        message: "Something went wrong",
        error: error
      });
    });
  }

  @UseGuards(RolesGuard)
  @Roles(Role.MANAGER, Role.SELLER)
  @Get(':id')
  findOne(@Param('id') id: string, @Res() res: Response) {
    this.productSuppliersService.findOne(+id).then(result => {
      if(result){
        res.status(200).json(result);
    }else {
        return res.status(404).json({
            message: "Product_Supplier not found!"
        });
    }
    }).catch(error => {
      res.status(500).json({
          message: "Something went wrong!",
          error: error
      })
  });
  }

  @UseGuards(RolesGuard)
  @Roles(Role.MANAGER)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductSupplierDto: UpdateProductSupplierDto, @Res() res: Response) {
    this.productSuppliersService.findOne(+id).then(result => {
      if (result){
        this.productSuppliersService.update(+id, updateProductSupplierDto).then(() => {
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
          message: "Product_Supplier not found!"
      });
      }
    })
  }

  @UseGuards(RolesGuard)
  @Roles(Role.MANAGER)
  @Delete(':id')
  remove(@Param('id') id: string, @Res() res: Response) {
    this.productSuppliersService.findOne(+id).then(result => {
      if (result){
        this.productSuppliersService.remove(+id).then(() => {
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
          message: "Product_Supplier not found!"
      });
      }
    })
  }
}
