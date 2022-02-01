import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { DiscountService } from './discount.service';
import { CreateDiscountDto } from './dto/create-discount.dto';
import { UpdateDiscountDto } from './dto/update-discount.dto';
import { Response } from 'express';
@Controller('discount')
export class DiscountController {
  constructor(private readonly discountService: DiscountService) {}

  @Post()
  create(@Body() createDiscountDto: CreateDiscountDto, @Res() res: Response) {
    this.discountService.create(createDiscountDto).then(result => {
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

  @Get()
  findAll(@Res() res: Response) {
    this.discountService.findAll().then(result => {
      res.status(200).json({
        data: result
      })
    }).catch(error=> {
      res.status(500).json({
        message: "Something went wrong",
        error: error
      });
    });;
  }

  @Get(':id')
  findOne(@Param('id') id: string,@Res() res: Response) {
    this.discountService.findOne(+id).then(result => {
      if(result){
        res.status(200).json(result);
    }else {
        return res.status(404).json({
            message: "Discount not found!"
        });
    }
    }).catch(error => {
      res.status(500).json({
          message: "Something went wrong!",
          error: error
      })
  })
}
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDiscountDto: UpdateDiscountDto, @Res() res: Response) {
    return this.discountService.update(+id, updateDiscountDto).then(() => {
      res.status(201).json({
        message: "Updated Successfully"
      })
    }).catch(error => {
      res.status(500).json({
          message: "Something went wrong",
          error: error
      })
    })
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Res() res: Response) {
    this.discountService.findOne(+id).then(result => {
      if (result){
        this.discountService.remove(+id).then(() => {
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
          message: "Discount not found!"
      });
      }
    })
  }
}
