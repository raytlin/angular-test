import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-heroes',
  moduleId : module.id,
  templateUrl : 'heroes.component.html',
  styleUrls : ["heroes.component.css"]
})

export class HeroesComponent implements OnInit {
  
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService, private router: Router) {
  }

  ngOnInit() {
    this.heroService.getHeroes().then(
      (heroes) => {
        this.heroes = heroes;
        console.log("this is multiline block");
      }
    );
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail() {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}