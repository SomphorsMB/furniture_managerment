import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ProductDetail {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    product:number

    @Column()
    productSupplier:number

    @Column()
    avatar:string

    @Column()
    size:string

    @Column()
    unit:number;

    @Column()
    color:string;

    @Column()
    rawMaterial:string;
    
    @Column()
    price:number;
}
