import { ProductDetail } from "src/product-details/entities/product-detail.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Discount {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    discount: number;

    @OneToOne(() => ProductDetail)
    @JoinColumn()
    product: ProductDetail

    @Column()
    start_at: Date;

    @Column()
    end_at: Date;
}
