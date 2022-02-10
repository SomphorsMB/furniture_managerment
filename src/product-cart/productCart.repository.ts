import { EntityRepository, Repository } from "typeorm";
import { ProductCart } from "./entities/product-cart.entity";

@EntityRepository(ProductCart)
export class ProductCartRepository extends Repository<ProductCart>{}