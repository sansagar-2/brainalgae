import { Component, OnInit } from '@angular/core';
import { Post } from '../_models/post';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProfileService } from '../_services/profile.service';
import { UserService } from '../_services/user.service';
import { AuthenticationService } from '../_services/authentication.service';
import { User } from '../_models';
import {LikeService} from '../_services/like.service'
import {CommentService} from '../_services/comment.service'
import {UserListComponent} from '../user-list'

// @Component({
//     templateUrl: 'connected.component.html'
// })

export class ConnectedComponent implements OnInit {
    currentUser: User;
    users = [];
    dpUrl:string="http://https://eden-dev.guseden.com:8093/content/image/profiledp/";
    profilesDpUrl:string="http://https://eden-dev.guseden.com:8093/content/image/profiledp/";
    dpUrl2:string="http://https://eden-dev.guseden.com:8093/content/image/profiledp/";
    userProfileUrl:string="http://https://eden-dev.guseden.com:8093/profile/getAllUserProfile/";
    connectedUserUrl:string="https://eden-dev.guseden.com:8094/connection/getAllConnection/";
    connectedUserList;

    profiles;
    profileCount:number;
    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private http: HttpClient,
        private router: Router
    ) {

        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);

    }

    ngOnInit() {
           this.connectedUserUrl=this.connectedUserUrl+this.currentUser.data.id;
           this.getAllConnected().subscribe(e=>{
            this.connectedUserList=e;
            console.log(this.connectedUserList)
           });
       //this.dpUrl= this.dpUrl+this.currentUser.data.username;
    }
    getAllConnected() {
        return this.http.get<any[]>( this.connectedUserUrl);
    }

   
    
      viewProfile(event){
           console.log("Route to profile of user ::>>> ")
           console.log(event)
        //    this.profiles.data.subscribe(p=>{
        //     console.log(p);
        //    });
           this.router.navigate(['/user-profile'],{​​  queryParams: {​​  id: event }​​ });
       }

}