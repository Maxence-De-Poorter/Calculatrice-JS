import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Invalide {
    
        @PrimaryGeneratedColumn()
        id: number;
    
        @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
        created_at: Date;
}
   