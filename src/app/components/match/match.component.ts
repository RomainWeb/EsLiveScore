import { Component, OnInit } from '@angular/core';
import { MatchService } from './match.service';
import { Observable } from 'rxjs';

import { Match } from '../../shared/models/match.model';

@Component({
  selector: 'esls-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {
  matchesUpcoming: Observable<any>;

  constructor(
    private _matchService: MatchService
  ) { }

  ngOnInit() {
    this.matchesUpcoming = this._matchService.getMatchesUpcoming();
  }
}
