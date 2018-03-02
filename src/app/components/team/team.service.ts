import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from '../../shared/models/team.model';
import { AppConfig } from '../../app-config';
import * as _ from 'underscore';


@Injectable()
export class TeamService {

  constructor(private _http: HttpClient) { }

  getTeams(): Observable<Team[]>{
    return this._http.get<Team[]>(`${AppConfig.API_PANDASCORE_URL}/teams`, {
      headers: AppConfig.API_PANDASCORE_HEADER
    });
  }

  getTeam(id: number): Observable<Team>{
    return this._http.get<Team>(`${AppConfig.API_PANDASCORE_URL}/teams/${id}`, {
      headers: AppConfig.API_PANDASCORE_HEADER
    })
  }

  // searchTeam(teams: Observable<Team[]>, term: Observable<string>){
  //   console.log(teams)
  //   return term.debounceTime(500)
  //   .distinctUntilChanged()
  //   .switchMap(term => {
  //     console.log(term);
  //     return teams.map((data: Team[]) => data.filter(data => {
  //       if(data.name.toLowerCase().match(term) || term === "")
  //         return data;
  //     }))
  //   })
  // }
}
