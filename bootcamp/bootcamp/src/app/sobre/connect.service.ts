import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ConnectService {

private restUrl = 'https://jsonplaceholder.typicode.com/users';
constructor(private _http: HttpClient) { }

  public getUsers(): Observable<any> {
    return this._http.get(this.restUrl);
  }
}
