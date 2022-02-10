import { ProductDetail } from "src/product-details/entities/product-detail.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProductCart {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    unit: number;

    @ManyToOne(()=> ProductDetail, product=> product.productCart)
    @JoinColumn()
    product: ProductDetail;
}
