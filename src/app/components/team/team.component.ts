import { Component, OnInit } from '@angular/core';
import { TeamService } from './team.service';
import { Team } from '../../shared/models/team.model';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import * as _ from 'underscore';

@Component({
  selector: 'esls-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  teams$: Observable<Team[]>;
  searchInputTerm: string = "";

  constructor(private _teamService: TeamService) { }

  ngOnInit() {
    this.searchTeam(this.searchInputTerm);
  }

  searchDebounce(e: Event){
    this.searchTeam(this.searchInputTerm);
  }

  searchTeam(term: string){
    this.teams$ = this._teamService.getTeams()
    .map((teams: Team[]) => {
      return teams.filter((team: Team) => {
        return team.name.toLowerCase().includes(this.searchInputTerm.toLowerCase())
      })
    })
  }
}
