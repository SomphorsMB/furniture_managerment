import { Controller, Get, Post, Body, Patch, Param, Delete, Res, ParseIntPipe } from '@nestjs/common';
import { SellersService } from './sellers.service';
import { CreateSellerDto } from './dto/create-seller.dto';
import { UpdateSellerDto } from './dto/update-seller.dto';
import { Response } from 'express';

@Controller('sellers')
export class SellersController {
  constructor(private readonly sellersService: SellersService) {}

  @Post('create')
  async createSeller(@Body() createSellerDto: CreateSellerDto, @Res() res:Response) {
    const isSellerExist = await this.sellersService.checkSeller(createSellerDto);
    const isPhoneExist = await this.sellersService.checkPhone(createSellerDto.phone);
    if(isSellerExist){
      return res.status(409).json({message:'Seller already exist!'});
    }else if(isPhoneExist){
      return res.status(409).json({message:'Phone number already exist!'});
    }else{
      this.sellersService.create(createSellerDto).then(() =>{
        return res.status(201).json({message:'Seller created successfully!'});
        }).catch(error=>{
            return res.status(500).json({
                  message:'Something went wrong!',
                  post:error});
        });
    }
   
  }

  @Get()
  findAllSeller(@Res() res:Response) {
    this.sellersService.findAll().then(result=>{
      return res.status(200).json(result);
    }).catch(error=>{
      return res.status(500).json(error);
    })
  }

  @Get(':id')
  findOneSeller(@Param('id',ParseIntPipe) id: string,@Res() res:Response) {
    this.sellersService.findOne(+id).then(result =>{
      if(result){
        return res.status(200).json({result});
      }else{
        return res.status(404).json({message:'Seller not found!'});
      }
    }).catch(error=>{
      res.status(500).json({message:'Something went wrong!',error:error});
    });
  }

  @Patch('update/:id')
  async updateSeller(@Param('id',ParseIntPipe) id: string, @Body() updateSellerDto: UpdateSellerDto,@Res() res:Response) {
    const isSellerExist = await this.sellersService.checkSeller(updateSellerDto);
    const isPhoneExist = await this.sellersService.checkPhone(updateSellerDto.phone);
    this.sellersService.findOne(+id).then(result=>{
      if(result){
        if(isSellerExist){
          return res.status(409).json({message:'Seller already exist!'});
        }else if(isPhoneExist){
          return res.status(409).json({message:'Phone number already exist!'});
        }else{
          this.sellersService.update(+id,updateSellerDto).then(()=>{
            return res.status(201).json({message:'Updated seller successfully!'});
          }).catch(error=>{
            return res.status(500).json({
              message:'Something went wrong!',
              error:error
            });
          });
        }
        
      }else{
        return res.status(404).json({message:'Seller not found!'});
      }
    });
  }

  @Delete(':id')
  removeSeller(@Param('id',ParseIntPipe) id: string,@Res() res:Response) {
    this.sellersService.findOne(+id).then(result=>{
      if(result){
        this.sellersService.remove(+id).then(()=>{
          return res.status(201).json({message:'Deleted seller successfully!'});
        }).catch(error=>{
          return res.status(500).json({
            message:'Something went wrong!',
            error:error
          });
        });
      }else{
        return res.status(404).json({message:'seller not found!'});
      }
    });

  }
  
}
