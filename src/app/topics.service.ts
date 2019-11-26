import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
 
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  constructor(private http: HttpClient){ }


  getTopics () {
    return this.http.get(environment.dbUrl);
  }

  //this is a post service which isnt used yet in the code
  setTopics (name,department,details) {
    return this.http.post(environment.dbUrl, {
    name,
    department,
    details
  })
  .subscribe(console.log);

  }
}
