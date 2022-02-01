import { ProductSupplier } from "src/product-suppliers/entities/product-supplier.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProductDetail {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    product:number

    @Column()
    avatar:string

    @Column()
    size:string

    @Column()
    unit:number;

    @Column()
    color:string;

    @Column()
    rawMaterial:string;
    
    @Column()
    price:number;


    @ManyToOne(()=> ProductSupplier, productSupplier=> productSupplier.product_detail, {onDelete:'CASCADE'})
    @JoinColumn()
    supplier: ProductSupplier;
}
