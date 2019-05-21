import { Component, OnInit } from '@angular/core';

import { GithubService } from '../github/github.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.less'],
  providers: [GithubService]
})
export class SearchComponent implements OnInit {

  constructor( private githubservice: GithubService) { }

  ngOnInit() {
  	this.githubservice.getUser();
  }

}
