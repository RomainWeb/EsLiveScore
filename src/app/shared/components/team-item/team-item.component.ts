import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../../models/team.model';

@Component({
  selector: 'esls-team-item',
  templateUrl: './team-item.component.html',
  styleUrls: ['./team-item.component.scss']
})
export class TeamItemComponent implements OnInit {
  @Input() team: Team;

  constructor() { }

  ngOnInit() {
  }

}
