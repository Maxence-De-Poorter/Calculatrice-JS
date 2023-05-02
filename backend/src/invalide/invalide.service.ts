import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Invalide } from './invalide.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InvalideService {

    constructor(
        @InjectRepository(Invalide)
        private invalideRepository: Repository<Invalide>,
    ) {}

    createInvalide(): Promise<Invalide> {
        const invalide = new Invalide();
        return this.invalideRepository.save(invalide);
    }

    getAllInvalide(): Promise<any> {
        return this.invalideRepository.find().then((invalide) => {
            
            let result = {
                "nombre": invalide.length,
                "date de la dernière invalidation": invalide[invalide.length-1].created_at
            }
            return result;
        });
    }

}
