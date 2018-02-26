import { Component, OnInit, Input } from '@angular/core';
import { Team } from '../../models/team.model';

@Component({
  selector: 'esls-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {
  @Input() teams: Team[];
 
  constructor() { }

  ngOnInit() {
  }

}
