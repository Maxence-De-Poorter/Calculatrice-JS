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

    getAllInvalide(): Promise<Invalide[]> {
        return this.invalideRepository.find();
    }

}
