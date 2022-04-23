import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../_models/post';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../_services';
import { User } from '../../_models';
import { LikeService } from 'src/app/_services/like.service';
@Component({
    templateUrl: 'discussion.component.html',

})
export class DiscussionComponent implements OnInit  {

  currentUser: User;
  topics: any;
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private http: HttpClient,
        private likeService: LikeService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

   
    show: boolean = true;
  
    ngOnInit() {

      if (this.currentUser == null) {
          this.show = false;
      }
      
      console.log(this.currentUser)
    
      this.listAllTopics();
  }

  listAllTopics() {
   
          this.http.get<any[]>(`https://eden-dev.guseden.com:8098/topics/getAllTopic`).subscribe(data => {
              this.topics = data
              console.log("data:::")
              console.log(this.topics.data)

          })
         
     
 }

questions:any;
listQuestions(topicId:string){
       this.http.get<any[]>(`https://eden-dev.guseden.com:8098/questions/getAllQuestionByTopicId/`+topicId).subscribe(e=>{
        this.questions=e;
       });
}
answers:any;
listAnswers(quesId:string):any{
       this.http.get<any[]>(`https://eden-dev.guseden.com:8098/answers/getAllAnswerByQuestionId/`+quesId).subscribe(e=>{
        this.answers=e;
       });
       return this.answers;
}
popularPeople;
listPopularPeople(){

}

likeContent(post) {
        console.log("liking post----------------------->")
        console.log(post)
       

        let input = {
            componentid: post.questionId,
            userid: sessionStorage.getItem('userId')
        }
        this.likeService.likeComponent(input).subscribe(data => {
            console.log(data)
        })
    }

    answer;
    addAnswer(q:any,a:any){
        // console.log("liking post----------------------->")
        // console.log(post)
       

        // let input = {
        //     componentid: post.questionId,
        //     userid: sessionStorage.getItem('userId')
        // }
        // this.likeService.likeComponent(input).subscribe(data => {
        //     console.log(data)
        // })    
    }

}