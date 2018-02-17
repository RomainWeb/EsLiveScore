import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Match } from '../../shared/models/match.model';
import { AppConfig } from '../../app-config';

@Injectable()
export class MatchService {
    constructor(private _http: HttpClient) { }
  
  getMatchesUpcoming(): Observable<any>{
    return this._http
              .get<any>(`${AppConfig.API_PANDASCORE_URL}/matches/upcoming`, {
                headers: AppConfig.API_PANDASCORE_HEADER
              });
  }
}
