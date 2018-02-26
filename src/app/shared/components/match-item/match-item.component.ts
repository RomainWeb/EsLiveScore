import { Component, OnInit, Input } from '@angular/core';

import { Match } from '../../models/match.model';

@Component({
  selector: 'esls-match-item',
  templateUrl: './match-item.component.html',
  styleUrls: ['./match-item.component.scss']
})
export class MatchItemComponent implements OnInit {
  @Input() match: Match;
  isFavorite: boolean;

  constructor() { }

  ngOnInit() {
  }

  changeFav(event:Event){
    event.stopPropagation();
    this.isFavorite = !this.isFavorite;
  }
  

}
