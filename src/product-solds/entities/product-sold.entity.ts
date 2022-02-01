import { Product } from "src/products/entities/product.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class ProductSold {
    @PrimaryGeneratedColumn()
    id:number
    
    @Column()
    seller:number

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
