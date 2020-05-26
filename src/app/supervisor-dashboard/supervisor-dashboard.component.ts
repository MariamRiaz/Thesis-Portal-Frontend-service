import { Component, OnInit } from '@angular/core';
import { TopicsService } from '../topics.service';
import { CookieService }from 'ngx-cookie-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-supervisor-dashboard',
  templateUrl: './supervisor-dashboard.component.html',
  styleUrls: ['./supervisor-dashboard.component.css']
})
export class SupervisorDashboardComponent implements OnInit {

  constructor(private router: Router,private cookieService: CookieService, private topicsService: TopicsService) { }

  public researchGroup:string
  public user:string

  ngOnInit() {
    
    if(this.cookieService.get("tp_user")){
      // console.log("user present")
    }
    else {
      this.router.navigate(['/', 'login']).then(nav => {
        console.log(nav); // true if navigation is successful
      }, err => {
        console.log(err) // when there's an error
      });
      // console.log("user not present")
    }

    this.getResearchGroup()
    this.user = this.cookieService.get("tp_user")


  }

  getResearchGroup() {
    this.topicsService.getCurrentResearchGroup().subscribe((x) => {
      console.log(x)
      this.researchGroup = x.researchGroup
      console.log(this.researchGroup)
    });
  }

}
