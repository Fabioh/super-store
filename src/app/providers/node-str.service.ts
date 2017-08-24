import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { ApiVersion } from '../model/api-version';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NodeStrService {

  private apiPath = 'https://nodestrweb.azurewebsites.net/';
  private result: Observable<ApiVersion>;

  constructor(private http: Http) { }

  public loadApiVersion(): Observable<ApiVersion> {
    return this.http.get(this.apiPath)
    .map(
      (res: Response) => {
        return res.json();
      }
    );
  }
}
