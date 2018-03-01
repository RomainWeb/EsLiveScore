import { Component, OnInit } from '@angular/core';
import { TeamService } from './team.service';
import { Team } from '../../shared/models/team.model';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Component({
  selector: 'esls-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  teams: Observable<Team[]>;

  constructor(private _teamService: TeamService) { }

  ngOnInit() {
    this.teams = this._teamService
        .getTeams()
        .map(data => {
          return data.filter(data => {
            return !!data.name;
          })
        });
  }

}
