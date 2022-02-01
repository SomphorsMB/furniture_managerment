import { Category } from "src/categories/entities/category.entity";
import { ProductDetail } from "src/product-details/entities/product-detail.entity";
import { ProductSold } from "src/product-solds/entities/product-sold.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, TableForeignKey } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(()=> Category, category=> category.product, {onDelete:'CASCADE'})
    @JoinColumn()
    category: Category;

    @OneToMany(()=> ProductSold, productSold=> productSold.product)
    product_sold: ProductSold[];

    @OneToMany(()=> ProductDetail, productDetail=> productDetail.product)
    product_detail: ProductDetail[];

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP(6)' })
    created_at: Date;

    @Column({ type: 'datetime', nullable: true, default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    updated_at: Date;
}
