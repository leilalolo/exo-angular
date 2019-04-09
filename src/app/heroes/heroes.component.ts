import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { HEROES } from '../classes/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes = Hero[];

  selectedHero : Hero;

  redElement = false;

  
  constructor(private heroService: HeroService) { }
  
   ngOnInit() {
  //   console.log(
  //     this.sum(5, 10),
  //     this.sum(55, 300)
  //   );

    this.getHeroes();
  }
  
  // sum(a: number, b: number): number {
  //   return a + b;
  // }


  onSelect(param: Hero): void {
    this.selectedHero = param;
  }

  fromChild(): void {
    // if(this.redElement === true){
    //   this.redElement = false;
    // } else if(this.redElement === false){
    //   this.redElement = true;
    // }

    this.redElement = !this.redElement;

    console.log("coucou")
  }

  getHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  }

}

