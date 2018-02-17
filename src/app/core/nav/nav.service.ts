import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Navigation } from '../../shared/models/navigation';

@Injectable()
export class NavService {

  constructor() { }

  getNavigation(): Observable<Navigation>{
    return null
  }
}

@Injectable()
export class FakeNavService {

  constructor(private _http: HttpClient) { }

  getNavigation(): Observable<Navigation>{
    return null
  }
}