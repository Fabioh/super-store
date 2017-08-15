import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class NodeStrService {

  private apiPath = 'https://nodestrweb.azurewebsites.net/';

  constructor(private http: Http) { }

  public loadApiVersion() {
    const promise = new Promise((resolve, reject) => {
      this.http.get(this.apiPath)
        .toPromise()
        .then(
          res => {
            const apiResult: any = res.json();
            resolve(apiResult);
          },
          msg => { // Error
            reject(msg);
          }
        );
    });
    return promise;
  }
}
