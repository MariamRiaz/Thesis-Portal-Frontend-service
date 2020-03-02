import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  searchResults: any = [];

  constructor(private http: HttpClient){
    // this.searchTerm = ""
   }


  getTopics () {
    return this.http.get(environment.dbUrl+environment.getContext);
    
  }

  searchTopics(term: string){
    console.log("searching...")
    return this.http.get(environment.searchUrl+term);
  }

  setTopics (topic:any)  {
    return this.http.post<any>(environment.dbUrl+environment.postContext, topic).subscribe(console.log);
  }

  setSearchTerm(term: string){
    // this.searchTerm = term
    console.log("Search term copied")
    this.searchTopics(term).subscribe((x) =>{
      console.log(x)
      this.searchResults = x
    });
  }
}
