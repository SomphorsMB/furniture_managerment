import { ProductDetail } from "src/product-details/entities/product-detail.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProductSupplier {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    brand: string;

    @Column()
    country: string;

    @Column(null)
    logo: string;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Column({ type: 'datetime', nullable: true, onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;

    @OneToMany(()=> ProductDetail, product=> product.supplier)
    product_detail: ProductDetail[];
}
