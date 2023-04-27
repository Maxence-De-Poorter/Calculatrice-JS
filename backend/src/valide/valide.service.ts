import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Valide } from './valide.entity';
import { Repository } from 'typeorm';


@Injectable()
export class ValideService {

    constructor(
        @InjectRepository(Valide)
        private valideRepository: Repository<Valide>,
    ) {}

    createValid(timeTakenMs: number): Promise<Valide> {
        const valid = new Valide();
        valid.timeTakenMs = timeTakenMs;
        return this.valideRepository.save(valid);
    }

    getAllValid(): Promise<Valide[]> {
        return this.valideRepository.find();
    }
}
