import { Test, TestingModule } from '@nestjs/testing';
import { ProductSoldsController } from './product-solds.controller';
import { ProductSoldsService } from './product-solds.service';

describe('ProductSoldsController', () => {
  let controller: ProductSoldsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductSoldsController],
      providers: [ProductSoldsService],
    }).compile();

    controller = module.get<ProductSoldsController>(ProductSoldsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
