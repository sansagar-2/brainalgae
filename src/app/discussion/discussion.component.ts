import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../_models/post';
import { Router } from '@angular/router';

import { AuthenticationService } from '../_services';
import { User } from '../_models';

export class DiscussionComponent implements OnInit  {

    currentUser: User;
  contents: any;
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private http: HttpClient,
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    items: Post[] = [{
        id: 1,
        username: "Kundan Kumar",
        postComment: 1,
        postDesc: "DevOps Insights is a cloud-based solution that provides comprehensive insights from popular continuous integration and continuous delivery tools to increase the speed, quality and control of your applications. View test results and trend information about your builds, deployments and tests to understand changes over time",
        postImage: "fs",
        postLike: 2,
        postTime: new Date(),
        postHeading: "Devops - Devops Practices",
        postShare: 3,
        profileImg: "sdf",
        status: 1
    },
    {
        id: 1,
        username: "Mohit Kumar",
        postComment: 2,
        postDesc: "DevOps Insights is a cloud-based solution that provides comprehensive insights from popular continuous integration and continuous delivery tools to increase the speed, quality and control of your applications. View test results and trend information about your builds, deployments and tests to understand changes over time",
        postImage: "fs",
        postLike: 3,
        postTime: new Date(),
        postHeading: "Sysops - Sysops Insights",
        postShare: 0,
        profileImg: "sdf",
        status: 1
    }];
    show: boolean = true;
    activities = [{
        desc: "you liked the post",
        time: new Date()
    },
    {
        desc: "you Commented the post",
        time: new Date()
    }]

    ngOnInit() {

      if (this.currentUser == null) {
          this.show = false;
      }
      console.log(this.items)
      console.log(this.currentUser)
      this.http.get<any[]>('http://13.232.49.221:8094/topics/getAllTopic').subscribe(data => {
          this.contents = data
          console.log("data:::")
          console.log(this.contents)
          for (var index in this.contents.data) {
            console.log("content loop::"+this.contents.data[index].topicId);
          }
      })
      
     
      // this.loadAllUsers();
      //this.listAllTopics();
  }

  listAllTopics() {
   
          this.http.get<any[]>(`http://13.232.49.221:8094/topics/getAllTopic`).subscribe(data => {
              this.contents = data
              console.log("data:::")
              console.log(this.contents.data)
          })
         
     }
     searchQuestion(topicId:string) {
       console.log("in searchQuestion....");
    //   this.router.navigate(['questions', {topicId: topicId}]); (1)
    this.router.navigate(['/questions'], {  queryParams: {  topicId: topicId } });
 }
}