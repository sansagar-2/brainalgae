import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../_services';
import { User } from '../../_models';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  questions: any;
  questionsByTopic: any;
  currentUser: User;

//   constructor(private route: ActivatedRoute,  private authenticationService: AuthenticationService,
//     private router: Router, private http: HttpClient,) {
// this.route.params.subscribe(params => {
// console.log(params);
// if (params['topicId']) { 
// this.searchQuestionsByTopic(params['topicId'])
// }
// }); (1)
// }

constructor(private route: ActivatedRoute,  private authenticationService: AuthenticationService,
  private router: Router, private http: HttpClient,) {
// this.route.params.subscribe(params => {
// console.log(params);
// if (params['topicId']) { 
// this.searchQuestionsByTopic(params['topicId'])
// }
// }); (1)
}

  ngOnInit(): void {
    
  console.log("questions init")
  this.route.queryParams.subscribe(params => {
    console.log(params);
if (params['topicId']) { 
this.searchQuestionsByTopic(params['topicId'])
}
});
  this.http.get<any[]>('https://eden-dev.guseden.com:8094/questions/getAllQuestion').subscribe(data => {
    this.questions = data
    console.log("data:::")
    console.log(this.questions)
})
  }
  searchQuestionsByTopic(topicId) {
   console.log("in searchQuestionsByTopic::::"+topicId);
    this.http.get<any[]>('https://eden-dev.guseden.com:8094/questions/getAllQuestionByTopicId/'+topicId).subscribe(data => {
        this.questionsByTopic = data
        console.log("data111:::")
        console.log(this.questionsByTopic.data)
    })
}
}
