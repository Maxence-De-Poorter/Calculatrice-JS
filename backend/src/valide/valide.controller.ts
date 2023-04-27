import { Controller, Get, Post, Body } from '@nestjs/common';
import { ValideService } from './valide.service';
import { Valide } from './valide.entity';

@Controller('valide')
export class ValideController {

    constructor(private readonly valideService: ValideService) {}

    @Post()
    createValid(
        @Body('timeTakenMs') timeTakenMs: number,
    ): Promise<Valide> {
        return this.valideService.createValid(timeTakenMs);
    }

    @Get()
    getAllValid(): Promise<Valide[]> {
        return this.valideService.getAllValid();
    }

}
