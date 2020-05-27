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

    const auth_token = this.cookieService.get("tp_loginToken")
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': "Bearer " +auth_token
    }

    return this.http.post<any>(environment.dbUrl+environment.saveTopicContext, topic, {headers});
  }

  getCurrentResearchGroup(): Observable<any> {
    const auth_token = this.cookieService.get("tp_loginToken")
    const reserchgroupId = this.cookieService.get("tp_researchGroupId")
    // console.log(auth_token)
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': "Bearer " +auth_token
    }
    return this.http.get<any>(environment.dbUrl+environment.researchGroupIdContext+environment.researchGroupIdArgument+reserchgroupId, {headers})
    // return this.http.get<any>("http://admin.thesis.cs.ovgu.de/core/topic/all")
  } 

  getResearchGroupTopics(): Observable<any>{
    const auth_token = this.cookieService.get("tp_loginToken")
    const reserchgroupId = this.cookieService.get("tp_researchGroupId")
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': "Bearer " +auth_token
    }
    return this.http.get<any>(environment.dbUrl+environment.researchGroupGetTopicsContext+environment.researchGroupIdArgument+reserchgroupId, {headers})
  }

  deleteTopic(id): Observable<any>{
    const auth_token = this.cookieService.get("tp_loginToken")
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': "Bearer " +auth_token
    }
    return this.http.delete<any>(environment.dbUrl+environment.deleteTopicContext+environment.idArgument+id, {headers})
  }

  
  editTopics (topic:any)  {

    const auth_token = this.cookieService.get("tp_loginToken")
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': "Bearer " +auth_token
    }

    return this.http.post<any>(environment.dbUrl+environment.updateTopicContext, topic, {headers});
  }


}
