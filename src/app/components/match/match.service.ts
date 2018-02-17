import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Match } from '../../shared/models/match.model';

@Injectable()
export class MatchService {

  constructor(private _http: HttpClient) { }
  
  getMatches(): Observable<Match[]>{
    return null;
  }
}
