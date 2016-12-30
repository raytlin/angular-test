import { Injectable } from '@angular/core'
import { Hero } from './hero'

const HEROES: Hero[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];

@Injectable()
export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            // Simulate server latency with 1 second delay
            setTimeout(() => resolve(this.getHeroes()), 1000);
        });
    }

    getHero(id: number): Promise<Hero> {
        return new Promise(
            (resolve, reject) => {
                this.getHeroes().then(
                    (heroes) => {
                        resolve(heroes.find(
                            (hero, index, object) => {
                                return hero.id === id;
                            }
                        ));
                    }
                )
            }
        );
    }

    // getHero(id: number): Promise<Hero> {
    //     return this.getHeroes()
    //         .then(heroes => heroes.find(hero => hero.id === id));
    // }


}