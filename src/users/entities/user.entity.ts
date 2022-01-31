import { Role } from "src/authorization/role.enum";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({
        unique: true
    })
    email: string;

    @Column()
    password: string;

    @Column({ type: 'enum', enum: Role })
    role: Role[];
}
