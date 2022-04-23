import { Component, OnInit } from '@angular/core';
import { Post } from '../_models/post';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProfileService } from '../_services/profile.service';
import { AuthenticationService, UserService } from '../_services';
import { User } from '../_models';
import {LikeService} from '../_services/like.service'
import {CommentService} from '../_services/comment.service'
import {UserListComponent} from './../user-list'
@Component({
    templateUrl: 'profile.component.html',

})
export class ProfileComponent implements OnInit {
    currentUser: User;
    users = [];
    dpUrl:string="https://eden-dev.guseden.com:8093/content/image/profiledp/";
    profilesDpUrl:string="https://eden-dev.guseden.com:8093/content/image/profiledp/";
    dpUrl2:string="https://eden-dev.guseden.com:8093/content/image/profiledp/";
    userProfileUrl:string="https://eden-dev.guseden.com:8093/profile/getAllUserProfile/";

    profiles;
    profileCount:number;
    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private http: HttpClient,
        private router: Router
    ) {

        this.currentUser = this.authenticationService.currentUserValue;

       // console.log(this.currentUser)
    }
    guest: boolean;
    isGuest:string= sessionStorage.getItem("guest");
    publicProfiles:any[];
    ngOnInit() {

        

        this.loadAllUsers();
       
        let currentUser1 = JSON.parse(sessionStorage.getItem("currentUser"));
        console.log("currentUser");
        console.log(sessionStorage.getItem("currentUser"));
        console.log(sessionStorage.getItem("username"));
      this.currentUser=currentUser1;
       this.dpUrl= this.dpUrl+currentUser1.data.username;//+"/dp.jpg";
    }

    deleteUser(id: number) {
        // this.userService.delete(id)
        //     .pipe(first())
        //     .subscribe(() => this.loadAllUsers());
    }

    
    checkPublic(d:string):boolean{
        if(d!=null)
        if( d.toUpperCase()=='PUBLIC')
        return true;
        else return false;
    }
    private loadAllUsers() {

         this.http.get<any[]>(this.userProfileUrl).subscribe(pro =>{
            this.profiles = pro;
           // alert("PROFILES LOADING ....")
           // alert(this.profiles);
            console.log(this.profiles)
         });
         console.log("load all profiles-------------------================>")
         console.log(this.profiles)
      
        //this.userService.getAll()
            //.pipe(first())
          //  .subscribe(users => this.users = users);
    }
//follow request send 
       follow(p){
           confirm("Following...")
           console.log("follwo request recievd---->")
        alert(this.currentUser.data.id)
           console.log(p)
          // console.log(this.currentUser)
           
           let reqbody ={ followerID:p,followedID:this.currentUser.data.id};

         this.http.post<any[]>("https://eden-dev.guseden.com:8094/follower/save/",reqbody).subscribe((response)=>{
            console.log("Follow result:-->")
           console.log(response)
            alert("you are now following :"+p)
         },(error)=>{console.log(error)});
           
          
       }
       //connection request 
       connect(userId:string){

           alert("sending connect request to : "+userId)
        console.log("connect request recievd---->"+userId)
        let currentuserId = sessionStorage.getItem("userId");
      
        let reqbody =   {
            "connectionuserid":currentuserId,
            "connectoruserid":userId,
            "status":"REQUEST_SEND"   
        }	
        console.log(reqbody)
        let result = this.http.post<any[]>("https://eden-dev.guseden.com:8094/connection/add/",reqbody).subscribe((response)=>{
                        confirm("connection request sent to "+userId);
        },
        (error)=>console.log(error));

        console.log("connect result:-->"+result);
       }
       showMyConnections(){}
       showMyMentors(){}
       showMyFeeds(){}
       showMyActivities(){}

      viewProfile(event){
           console.log("Route to profile of user ::>>> ")
           console.log(event)
        //    this.profiles.data.subscribe(p=>{
        //     console.log(p);
        //    });
           this.router.navigate(['/user-profile'],{​​  queryParams: {​​  id: event }​​ });
       }

}
