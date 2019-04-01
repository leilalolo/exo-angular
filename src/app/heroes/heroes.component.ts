import { Component, OnInit } from '@angular/core';
import { Hero } from '../classes/hero';
import { HEROES } from '../classes/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES;

  selectedHero : Hero;

  redElement = false;

  
  constructor() { }
  
   ngOnInit() {
  //   console.log(
  //     this.sum(5, 10),
  //     this.sum(55, 300)
  //   );
  }
  
  // sum(a: number, b: number): number {
  //   return a + b;
  // }


  onSelect(param: Hero): void {
    this.selectedHero = param;
  }

  fromChild(): void {
    if(redElement = true){
      redElement = false;
    } else if(redElement = false){
      redElement = true;
    }
    console.log("coucou")
  }

}

