import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class NavService {

  constructor() { }
 
}

@Injectable()
export class FakeNavService {

  constructor(private _http: HttpClient) { }

}