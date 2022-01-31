import { EntityRepository, Repository } from "typeorm";
import { ProductDetail } from "./entities/product-detail.entity";

@EntityRepository(ProductDetail)
export class ProductDetailRepository extends Repository<ProductDetail>{}