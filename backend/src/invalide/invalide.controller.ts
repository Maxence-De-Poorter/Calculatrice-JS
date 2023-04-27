import { Controller, Get, Post} from '@nestjs/common';
import { InvalideService } from './invalide.service';
import { Invalide } from './invalide.entity';

@Controller('invalide')
export class InvalideController {

    constructor(private readonly invalideService: InvalideService ) {}

    @Post()
    createInvalide(
    ): Promise<Invalide> {
        return this.invalideService.createInvalide();
    }

    @Get()
    getAllInvalide(): Promise<Invalide[]> {
        return this.invalideService.getAllInvalide();
    }
}
