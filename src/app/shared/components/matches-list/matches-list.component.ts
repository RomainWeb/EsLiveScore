import { Component, OnInit, Input } from '@angular/core';
import { Match } from '../../models/match.model';

@Component({
  selector: 'esls-matches-list',
  templateUrl: './matches-list.component.html',
  styleUrls: ['./matches-list.component.scss']
})
export class MatchesListComponent implements OnInit {
  @Input() matchesList: Match[];

  constructor() { }

  ngOnInit() {
  }
}
