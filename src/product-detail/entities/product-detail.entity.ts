import { Column, PrimaryGeneratedColumn } from "typeorm";

export class ProductDetail {
    @PrimaryGeneratedColumn()
    id: number;

    // @TableForeignKey()
    @Column()
    product_id: number;

    // @TableForeignKey()
    @Column()
    product_supplier_id: number;

    @Column()
    image: string;

    @Column()
    unit: number;

    @Column()
    color: string;

    @Column()
    raw_material: string;

    @Column()
    price: string;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP(6)' })
    created_at: Date;

    @Column({ type: 'datetime', nullable: true, default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    updated_at: Date;
}
