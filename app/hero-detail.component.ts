import { Component, Input, OnInit } from '@angular/core';
import { Hero } from './hero';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from './hero.service';

import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'my-hero-detail',
  moduleId : module.id,
  templateUrl : 'hero-detail.component.html'

})

export class HeroDetailComponent implements OnInit {
  @Input()
  hero: Hero;

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private heroService: HeroService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        var index: number = parseInt(params['id']);
        this.heroService.getHero(index).then(
          (hero) => {
            this.hero = hero;
          }
        )
      }
    )
  }

  goBack(): void {
    this.location.back();
  }

}