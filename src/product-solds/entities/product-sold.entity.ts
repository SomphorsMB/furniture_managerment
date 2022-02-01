import { Product } from "src/products/entities/product.entity";
import { Seller } from "src/sellers/entities/seller.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class ProductSold {
    @PrimaryGeneratedColumn()
    id:number
    
    @ManyToOne(()=> Seller, seller=> seller.product_sold, {onDelete:'CASCADE'})
    @JoinColumn()
    seller:Seller

    @ManyToOne(()=> Product, product=> product.product_sold, {onDelete:'CASCADE'})
    @JoinColumn()
    product: Product;

    @Column()
    unit:number

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    readonly created_at: Date;

    @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    readonly updated_at: Date;
}
