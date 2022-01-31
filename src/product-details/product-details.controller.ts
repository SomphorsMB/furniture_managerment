import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile, Res } from '@nestjs/common';
import { ProductDetailsService } from './product-details.service';
import { CreateProductDetailDto } from './dto/create-product-detail.dto';
import { UpdateProductDetailDto } from './dto/update-product-detail.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { editFileName, imageFileFilter } from 'src/utils/file-uploading.utils';
import { diskStorage } from 'multer';
import { Response } from 'express';

@Controller('product-details')
export class ProductDetailsController {
  constructor(private readonly productDetailsService: ProductDetailsService) {}

  @Post('create')
  @UseInterceptors(FileInterceptor('avatar',{
    storage: diskStorage ({
      destination:'./files',
      filename:editFileName
    }),
    fileFilter:imageFileFilter,
  }))
  async createPostDetail(@Body() createProductDetailDto: CreateProductDetailDto, @UploadedFile() file:any, @Res() res:Response) {
    if(file){
      createProductDetailDto.avatar=file.filename
      this.productDetailsService.create(createProductDetailDto).then(()=>{
        return res.status(201).json({message:"Product sold is created successfully!"});
      }).catch(error=>{
         return res.status(500).json({
          message:"Something went wrong!",
          error:error
         })
      });
    }else{
      res.status(400).json({message:'Please select the photo!'});
    }
  }

  @Get('image/:imagpath')
  seeUploadFile(@Param('imagpath') imagpath:string, @Res() res){
    console.log(imagpath);
    return res.sendFile(imagpath,{root:'./files'});
  }

  @Get()
  findAllProductDetail(@Res() res:Response) {
    this.productDetailsService.findAll().then(result=>{
      return res.status(200).json(result);
    }).catch(error=>{
      return res.status(500).json(error);
    });
  }

  @Get(':id')
  findOneProductDetail(@Param('id') id: string,@Res() res:Response) {
    this.productDetailsService.findOne(+id).then(result =>{
      if(result){
        return res.status(200).json({result});
      }else{
        return res.status(404).json({message:'Product detail not found!'});
      }
    }).catch(error=>{
      res.status(500).json({message:'Something went wrong!',error:error});
    });
  }

  @Patch('update/:id')
  @UseInterceptors(FileInterceptor('avatar',{
    storage: diskStorage ({
      destination:'./files',
      filename:editFileName
    }),
    fileFilter:imageFileFilter,
  }))
  updateProductDetail(@Param('id') id: string, @Body() updateProductDetailDto: UpdateProductDetailDto,@UploadedFile() file:any,@Res() res:Response) {
    if(file){
      updateProductDetailDto.avatar=file.filename
      this.productDetailsService.findOne(+id).then((result)=> {
        if(result){
          this.productDetailsService.update(+id,updateProductDetailDto).then(()=>{
            return res.status(201).json({message:'Updated product detail successfully!'});
          }).catch(error=>{
            return res.status(500).json({
              message:'Something went wrong!',
              error:error
            });
          })
        }else{
          return res.status(404).json({message:'Product detail not found!'});
        }
      });
    }else{
      this.productDetailsService.findOne(+id).then((result)=> {
        if(result){
          updateProductDetailDto.avatar=result.avatar;
          this.productDetailsService.update(+id,updateProductDetailDto).then(()=>{
            return res.status(201).json({message:'Updated product detail successfully!'});
          }).catch(error=>{
            return res.status(500).json({
              message:'Something went wrong!',
              error:error
            });
          })
        }else{
          return res.status(404).json({message:'Product detail not found!'});
        }
      });
    }
  }

  @Delete(':id')
  removeProductDetail(@Param('id') id: string,@Res() res:Response) {
    this.productDetailsService.findOne(+id).then(result=>{
      if(result){
        this.productDetailsService.remove(+id).then(()=>{
          return res.status(201).json({message:'Deleted Product detail successfully!'});
        }).catch(error=>{
          return res.status(500).json({
            message:'Something went wrong!',
            error:error
          });
        });
      }else{
        return res.status(404).json({message:'Product detail not found!'});
      }
    });
  }
}
