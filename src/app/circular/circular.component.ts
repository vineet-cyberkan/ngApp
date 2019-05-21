import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circular',
  templateUrl: './circular.component.html',
  styleUrls: ['./circular.component.less']
})
export class CircularComponent implements OnInit {
  
  public lifeText = "life is a full time learning class";

  public myToDos = [
  	'wash coffie mug',
  	'take a shower',
  	'say hi to new hire',
  	'wash your hands'
  ]

  constructor() { }

  ngOnInit() {
  	this.lifeText ="you have to learn on each step something new";
  }

  moreImprove(){
  	this.lifeText = 'in this process i am working on first chapter';
  }
}
