import { Component } from '@angular/core';
import { HeroesComponent } from './heroes.component';

@Component({
    selector : 'my-app',
    moduleId : module.id,
    template : `
    <h1>{{title}}</h1>
  <nav>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
  </nav>
  <router-outlet></router-outlet>
    `,
    styleUrls : ['app.component.css']
})
export class AppComponent {
    title: string = 'Tour of Heroes';
}