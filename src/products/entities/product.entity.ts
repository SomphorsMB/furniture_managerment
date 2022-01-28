import { Column, Entity, PrimaryGeneratedColumn, TableForeignKey } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    // @TableForeignKey()
    @Column()
    category_id: number;

    @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP(6)' })
    created_at: Date;

    @Column({ type: 'datetime', nullable: true, default: () => "CURRENT_TIMESTAMP(6)", onUpdate: "CURRENT_TIMESTAMP(6)" })
    updated_at: Date;
}
