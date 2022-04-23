import { Component, OnInit } from '@angular/core';
import { Post } from '../../_models/post';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService, UserService } from '../../_services';
import { FeedService } from '../../_services/feed.service';
import { ActivityService} from '../../_services/activity.service';
import {NotificationService} from '../../_services/notification.service';
import { User } from '../../_models';
import { LikeService } from 'src/app/_services/like.service';
import {CommentService} from 'src/app/_services/comment.service';
import { ShareService } from 'src/app/_services/share.service';
import { UserListComponent } from 'src/app/user-list';
@Component({
    templateUrl: 'feed.component.html',

})
export class FeedComponent implements OnInit {

    currentUser: User;
    contents: any[];
    guest: boolean;
    isGuest= sessionStorage.getItem("guest");
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private authenticationService: AuthenticationService,
        private feedService:FeedService,
        private activityService:ActivityService,
        private notificationService:NotificationService,
     
        private http: HttpClient,

        private userService: UserService,
        private shareService: ShareService,
        private likeService: LikeService,
        private commentService: CommentService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    items;
    activities;
    show: boolean = true;
    hidFunction;
    attachUrl= "https://eden-dev.guseden.com:8092/content/download-content/"

    // "https://eden-dev.guseden.com:8093/content/download-content/";

    showFunction(){
        this.hidFunction=true;

    }

    userId;


notifications;

ngOnInit() { 

        ///alert("Inside feed service")

        this.route.queryParams.subscribe(params => {​​
          if(params != null && params['guest'])
            {
                alert("Welcome Guest User to Eden Social !!")
                this.guest=params['guest']
            }       
         });

if(this.guest)
{

   // alert("Inside Guest Public feeds")
    this.userId="9999-9999-9999-9999";  
    sessionStorage.setItem("userId",this.userId);
    sessionStorage.setItem("username","Guest User");
    sessionStorage.setItem("currentUser",null);
    sessionStorage.setItem("guest","true");
    
    this.feedService.getAllPublicFeed(this.userId).subscribe(feeds => {
       
        this.items =feeds;
      
        console.log("items----->")
        console.log(this.items.dataObj)
	     
    ​​​​​​}​​​​​);
}
else
{
        this.authenticationService.currentUser.subscribe(a => {
            this.userId=a.data.id;
        });
        this.feedService.getAllFeed(this.currentUser.data.id).subscribe(feeds => {
            this.items =feeds;
       ​​​​​​}​​​​​);
    
        this.items=this.feedService.getAllFeed(this.currentUser.data.id);

        this.activityService.getUserActivity(this.userId).subscribe(acts => {
            this.activities =acts;
            console.log(this.activities)
        ​​​​​​}​​​​​);

         this.notificationService.getUserNotification(this.userId).subscribe(notification => {
            this.notifications =notification;
            console.log(this.notifications)
        ​​​​​​}​​​​​);

        //console.log(this.activities)
    }
    if (this.currentUser == null) {
        this.show = false;
    }
    this.loadAllUsers();

    }

    loadAllUsers() {
       this.userService.loadAllUsers();
    //    this.userService.profiles.data.subscribe(us=> {
            
    //     });
    }

    // activityUsername(act:any){
       
    //         this.userService.profiles.data.forEach(us => {
                
             
    //             if(us.userprofileuuid==act.userid)
    //             {
    //                 act.userid=us.userprofiletitle+" "+us.userprofilefirstname;
    //             }
    //             return  us.userprofileuuid==act.userid?us.username:us.userprofileuuid;
    //         });
       
    // }

    feedUserName(iitem:any):string{
     let name='';
        this.userService.profiles.data.forEach(us => {
           
          
            if(us.userprofileuuid==iitem.feedUserId)
            {
                name=us.userprofiletitle+" "+us.userprofilefirstname+" "+us.userprofilesurname;
            }
            return  us.userprofileuuid==iitem.feedUserId?name:us.userprofileuuid;
        });
        return name;
    }

    feedUserImg(id:any){
        let usernm;
        this.userService.profiles.data.forEach(us => {
           
            // console.log("feed user name==================>>>>>>>>>>>>>>>>>")
            // console.log(us.username)
            usernm=  us.userprofileuuid==id?us.username:us.userprofileuuid;
        });
        return this.http.get<any[]>(`https://eden-dev.guseden.com:8093/content/image/profiledp-id/`+usernm);
        
    }

    correctUrl(url:string):string{
         let correctedUrl=url.replace('s3://edensocialcontent/','');
         correctedUrl=correctedUrl.replace('https://edensocialcontent.s3.amazonaws.com/','');
        return correctedUrl;
    }


    deleteContents(item) {
        if(item.feedUserId==this.currentUser.data.id){
            var txt;
            var r = confirm("Are you sure, you want to delete content ?");
            if (r == true) {
                txt = "You pressed OK!";
                this.http.delete<any[]>(`https://eden-dev.guseden.com:8092/content/delete/` + item.rowid).subscribe(data => {
                    this.contents = data
                    console.log(this.contents)
                })
            } else {
                txt = "You pressed Cancel!";
            }
            console.log(txt);

        }
       
    }

   
    selectedValue: '';
    postBody;
    postTitle;
    filepathUrl:string[];
    addNewPost() {
    
  
        let res=JSON.parse(sessionStorage.getItem('fileUploadRes'));
        this.filepathUrl=JSON.parse(res).data;
        console.log(JSON.parse(res).data);
        let input = {​​​​​
            userid:sessionStorage.getItem('userId'),
            posttype:this.selectedValue.toUpperCase(),
            postbody:this.postBody,
            posttitle:this.postTitle,
            tags:["#tag1","#tag2","#ta11"],
            filepath:this.filepathUrl
        }​​​​​
        const config = new HttpHeaders().set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
    
        this.http.post('https://eden-dev.guseden.com:8094/post/create', JSON.stringify(input),{​​​​​ headers: config }​​​​​).subscribe(
            (response) =>{ console.log(response);confirm("Post created successfully!");},
            (error) => console.log(error),
            
        )
      
    }

    likeContent(post) {
        console.log("liking post----------------------->")
        console.log(post)
        console.log(post.feedOfComponentId)
       

        let input = {
            componentid: post.feedOfComponentId,
            userid: sessionStorage.getItem('userId')
        }
        this.likeService.likeComponent(input).subscribe(data => {
            console.log(data)
            confirm("you has liked the post: "+post.feedOfComponentId);
        })
    }
    comment;
    commentContent(item) {
        console.log("Adding comments------------------>")
        console.log(item)
        console.log(this.comment)

        let input = {
            componentid: item.feedOfComponentId,
            userid: sessionStorage.getItem('userId').replace('\"','').replace('\"',''),
            message: this.comment
        }
        this.commentService.commentComponent(input).subscribe(data => {
            console.log(data)
        })
    }
    shareV:string;
    sharePost(event,item:any){
        
        console.log(item)
       
        let input = {
                "componentid": item.feedOfComponentId,
                "sharedwith": event.toUpperCase(),
                "sharedwithcomponentid": event.toUpperCase(),
                "sharedComponentType":"POST",
                "userid": sessionStorage.getItem('userId')
        }
        this.shareService.shareComponent(input).subscribe((response) => {
            console.log(response);
            confirm("post has been shared to "+event);

        },
        (error)=>{console.log(error);})
    }
}