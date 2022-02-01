import { Category } from "src/categories/entities/category.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, TableForeignKey } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @ManyToOne(()=> Category, category=> category.product, {onDelete:'CASCADE'})
    @JoinColumn()
    category: Category;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP(6)' })
    created_at: Date;

    @Column({ type: 'datetime', nullable: true, default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    updated_at: Date;
}
