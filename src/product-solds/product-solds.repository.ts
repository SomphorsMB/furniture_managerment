import { EntityRepository, Repository } from "typeorm";
import { ProductSold } from "./entities/product-sold.entity";
@EntityRepository(ProductSold)
export class ProductSoldRepository extends Repository<ProductSold>{}