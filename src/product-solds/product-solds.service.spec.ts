import { Test, TestingModule } from '@nestjs/testing';
import { ProductSoldsService } from './product-solds.service';

describe('ProductSoldsService', () => {
  let service: ProductSoldsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductSoldsService],
    }).compile();

    service = module.get<ProductSoldsService>(ProductSoldsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
