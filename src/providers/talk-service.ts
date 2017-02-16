import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class TalkService {

  endpoint = 'http://data.agenda.wedeploy.io/talks'

  constructor(public http: Http) {
    console.log('Hello TalkService Provider');
  }

  retrieveAllTalks()  {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    //    this.http.get('http://data.agenda.wedeploy.io/talks')
    //    .subscribe(response => this.talks = response.json())
    return this.http.get( this.endpoint, options)
      .do(x => console.log(x))
      .map(res => res.json());

  }

}
