import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../../../models/team.model';

@Component({
  selector: 'esls-team-list-item',
  templateUrl: './team-list-item.component.html',
  styleUrls: ['./team-list-item.component.scss']
})
export class TeamListItemComponent implements OnInit {
  @Input() team: Team;

  constructor() { }

  ngOnInit() {
  }

}
