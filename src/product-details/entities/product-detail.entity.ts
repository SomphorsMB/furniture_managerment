import { ProductCart } from "src/product-cart/entities/product-cart.entity";
import { ProductSupplier } from "src/product-suppliers/entities/product-supplier.entity";
import { Product } from "src/products/entities/product.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProductDetail {
    @PrimaryGeneratedColumn()
    id:number;

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

    @ManyToOne(()=> Product, product=> product.product_detail, {onDelete:'CASCADE'})
    @JoinColumn()
    product: Product;

    @ManyToOne(()=> ProductSupplier, productSupplier=> productSupplier.product_detail, {onDelete:'CASCADE'})
    @JoinColumn()
    supplier: ProductSupplier;

    @OneToMany(()=> ProductCart, productCart=> productCart.product)
    productCart: ProductCart[];
}
