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

  searchTopics(q){
    return this.http.get(environment.dbUrl+"?quer="+q); //post
  }

  //this is a post service which isnt used yet in the code
  setTopics (topic) {
    return this.http.post(environment.dbUrl, {
    topic
  })
  .subscribe(console.log);

  }
}
