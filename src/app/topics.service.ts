import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { CookieService }from 'ngx-cookie-service';



@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  private searcher = new BehaviorSubject<any>([]);
  searchResults = this.searcher.asObservable();

  constructor(private http: HttpClient, private cookieService: CookieService){
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

  // getAllResearchGroups(){
  //   // return this.http.get<any>(environment.dbUrl+environment.researchGroupAllContext);
  //       return this.http.get<any>("http://admin.thesis.cs.ovgu.de/core/topic/all")

  // }

  getAllResearchGroups(): Observable<any> {
    const auth_token = this.cookieService.get("tp_loginToken")
    console.log(auth_token)
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': auth_token
    })
    // return this.http.get<any>(environment.dbUrl+environment.researchGroupAllContext)
    return this.http.get<any>("http://admin.thesis.cs.ovgu.de/core/topic/all")
  } 
}
