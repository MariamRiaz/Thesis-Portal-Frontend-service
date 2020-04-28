import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  private searcher = new BehaviorSubject<any>([]);
  searchResults = this.searcher.asObservable();

  constructor(private http: HttpClient){
   }

  getTopics () {
    return this.http.get(environment.dbUrl+environment.getContext);    
  }

  searchTopics(term: string){
    // console.log("searching..." +term)
    return this.http.get(environment.searchUrl+term).subscribe((x) => {
      // console.log(x)
      this.searcher.next(x)
    });
  }

  setTopics (topic:any)  {
    return this.http.post<any>(environment.dbUrl+environment.postContext, topic).subscribe(console.log);
  }
}
