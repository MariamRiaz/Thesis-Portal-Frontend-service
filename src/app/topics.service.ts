import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
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

  setTopics (topic:any)  {
    return this.http.post<any>(environment.dbUrl1, topic).subscribe(console.log);
  }
}
