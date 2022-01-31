import { EntityRepository, Repository } from "typeorm";
import { ProductSupplier } from "./entities/product-supplier.entity";

@EntityRepository(ProductSupplier)
export class ProductSupplierRepository extends Repository<ProductSupplier>{}