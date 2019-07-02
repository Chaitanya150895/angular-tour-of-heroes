import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  heroes = HEROES;
  
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  selectedHero :Hero;

  constructor() { 
 
   // this.hero = new Hero();
   // this.hero.id = 1;
   // this.hero.name = 'windstrom';
   //this above is a way to declare the value of a variable as string was converted to the object
  }

  ngOnInit() {
  }

  selectHero(hero:Hero){
    this.selectedHero = hero;
  }
}
