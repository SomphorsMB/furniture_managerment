import { ProductDetail } from "src/product-details/entities/product-detail.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Discount {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({default:0})
    discount: number;

    @OneToOne(() => ProductDetail,{onDelete: "CASCADE"})
    @JoinColumn()
    product: ProductDetail

    @Column()
    start_at: Date;

    @Column()
    end_at: Date;
}
