import { Component, OnInit } from '@angular/core';
import { Post } from '../_models/post';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../_services';
import { FeedService } from '../_services/feed.service';
import { ActivityService} from '../_services/activity.service';
import {NotificationService} from '../_services/notification.service';
import { User } from '../_models';
@Component({
    templateUrl: 'feed.component.html',

})
export class FeedComponent implements OnInit {

    currentUser: User;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService,
        private feedService:FeedService,
        private activityService:ActivityService,
        private notificationService:NotificationService,
        private http: HttpClient
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    items;
    activities;
    show: boolean = true;
    
    notifications;
    ngOnInit() { 

     this.feedService.getAllFeed(this.currentUser.data.id).subscribe(feeds => {
        console.log(sessionStorage.getItem("userId"))
        sessionStorage.setItem("userId",sessionStorage.getItem("userId"));
        
        this.items =feeds;
      
        console.log("items----->")
        console.log(this.items)
	     
    ​​​​​​}​​​​​);
    
   this.items=this.feedService.getAllFeed(this.currentUser.data.id);

     this.activityService.getUserActivity(this.currentUser.data.id).subscribe(acts => {
            this.activities =acts;
            console.log(this.activities)
        ​​​​​​}​​​​​);;

         this.notificationService.getUserNotification(this.currentUser.data.id).subscribe(notification => {
            this.notifications =notification;
            console.log(this.notifications)
        ​​​​​​}​​​​​);;

        if (this.currentUser == null) {
            this.show = false;
        }
       

        console.log(this.activities)
        
        // this.loadAllUsers();
    }

}