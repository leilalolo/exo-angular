import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../classes/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  btn = false;

  @Input() hero : Hero;

  @Output() change = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }


  clickFunction(){
    console.log("salut")
    this.change.emit();
  }
 

}
