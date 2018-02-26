import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Team } from '../../shared/models/team.model';
import { AppConfig } from '../../app-config';

@Injectable()
export class TeamService {

  constructor(private _http: HttpClient) { }

  getTeamsList(): Observable<Team[]>{
    return this._http.get<Team[]>(`${AppConfig.API_PANDASCORE_URL}/teams`, {
      headers: AppConfig.API_PANDASCORE_HEADER
    });
  }
}
