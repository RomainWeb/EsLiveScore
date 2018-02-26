import { Component, OnInit, HostBinding, ElementRef, Renderer } from '@angular/core';
import { MatchService } from './match.service';
import { Observable } from 'rxjs';
import "rxjs/add/operator/take";

import { Match } from '../../shared/models/match.model';

@Component({
  selector: 'esls-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss']
})
export class MatchComponent implements OnInit {
  @HostBinding('attr.flex') flex="";

  matchesUpcoming: Observable<Match[]>;
  matchesPast: Observable<Match[]>;

  constructor(
    private _matchService: MatchService,
    private elRef: ElementRef
  ) { }

  ngOnInit() {
    this.matchesUpcoming = this._matchService.getMatchesUpcoming().take(5);
    this.matchesPast = this._matchService.getMatchesPast();
  }
}
