import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circular',
  templateUrl: './circular.component.html',
  styleUrls: ['./circular.component.less']
})
export class CircularComponent implements OnInit {
  
  public lifeText = "life is a full time learning class";

  constructor() { }

  ngOnInit() {
  }

}
