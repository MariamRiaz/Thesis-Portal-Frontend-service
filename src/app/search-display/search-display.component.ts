import { Component, OnInit } from '@angular/core';
import { TopicsService } from '../topics.service';
import { EventEmitterService } from '../event-emitter.service';

@Component({
  selector: 'app-search-display',
  templateUrl: './search-display.component.html',
  styleUrls: ['./search-display.component.css']
})
export class SearchDisplayComponent implements OnInit {
  topics: any = [];
  showContent : boolean = false;
  togglePanel: boolean[] ;


  constructor(private topicService: TopicsService, private eventEmitterService: EventEmitterService) {
    this.togglePanel = []
    console.log(this.togglePanel)
   }

   ngOnInit() {
    // this.searchTopics()
    this.setToggle()
    this.togglePanel = []

    if (this.eventEmitterService.subsVar==undefined) {    
      this.eventEmitterService.subsVar = this.eventEmitterService.    
      invokeFirstComponentFunction.subscribe((name:string) => {    
        this.firstFunction(name);    
      });    
    }    
  }

  firstFunction(name){
      console.log("Request arrived");
      console.log("name : "+name)
      this.topicService.searchTopics(name).subscribe((x) => {
        this.topics = x
        this.setToggle()
        // console.log(x)
      });
      console.log(this.topics)
  }



  setTopics(T: any){
    console.log("setting topic in search display")
    this.topics = T
  }

  // searchTopics() {
  //   console.log("searching")
  //   this.topicService.searchTopics().subscribe((x) => {
  //     this.topics = x
  //     this.setToggle()
  //   });
  // }

  setToggle(){
    for(var i=0; i<this.topics.length; i++){
      this.togglePanel[i] = false;
    }    
  }

  toggler(i){ 
    if(this.togglePanel[i] == true)
      this.togglePanel[i] = false
    else 
      this.togglePanel[i] = true
  }

  

}
