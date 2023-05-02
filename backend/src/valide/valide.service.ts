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

    getMoyenne(): Promise<any> {
        //Récupérer toutes les valeurs de la table valide
        return this.valideRepository.find().then((valide) => {
            //Calculer la moyenne et le pourcentage de calcul plus rapide que le dernier calcul
            let sum = 0;
            valide.forEach((element) => {
                sum += element.timeTakenMs;
            });
            let moyenne = sum/valide.length;

            let count=0;
            valide.forEach((element) => {
                if(element.timeTakenMs < valide[valide.length-1].timeTakenMs){
                    count++;
                }
            });
            let pourcentage = count/valide.length;

            //Créer un objet avec les valeurs calculées
            let result = {
                "moyenne": moyenne,
                "pourcentage": pourcentage
            }

            //Retourner l'objet
            return result;
        });
    }
}
