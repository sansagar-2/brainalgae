import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/_models';
import { AuthenticationService, UserService } from 'src/app/_services';
import { CommentService } from 'src/app/_services/comment.service';
import { LikeService } from 'src/app/_services/like.service';
import { ProfileService } from 'src/app/_services/profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  
  currentUser: User;
   

  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private userService: UserService,
      private profileService: ProfileService,
      private authenticationService: AuthenticationService, private http: HttpClient,
      private likeService: LikeService, private commentService:CommentService
  ) {
      this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }


  myStatsUrl:string="https://eden-dev.guseden.com:8094/userstats/getMyStats/";
  myStats:any=this.getMyStats();



  show: boolean = true;
  

  followers;
  followings;
  connections;
  notification;
  posts;
  users;
  visitedUser;
  loggedInUser;
  dpUrl:string="https://eden-dev.guseden.com:8093/content/image/profiledp/";
  postImgUrl="https://eden-dev.guseden.com:8092/content/download-content/";
  showPostAreas: boolean = false;

  showFeeds: boolean = false;
  showConnections: boolean = false;
  showPostAdd: boolean = false;

  showAddPost() {
      this.showPostAdd = true;

  }
  heading: '';
  desc: '';
  selectedValue: '';
  
  addNewPost() {


      let input = {​​​​​
          userid:sessionStorage.getItem('userId'),
          posttype:this.selectedValue,
          postbody:this.desc,
          posttitle:this.heading,
          tags:["#tag1","#tag2","#ta11"],
          filepath:["126/2020-10-28T12-19-28.907Z/d.jpg","126/2020-10-28T12-19-28.907Z/d.jpg"]
      }​​​​​
      const config = new HttpHeaders().set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
  
      this.http.post('https://eden-dev.guseden.com:8094/post/create', JSON.stringify(input),{​​​​​ headers: config }​​​​​).subscribe(
          (response) => console.log(response),
          (error) => console.log(error)
      )
    
  }

  showMyFeeds() {
      this.showFeeds = true;
      this.showPostAreas = true;
  }
  showMyConnections(){
      this.showConnections = true;

  }
  //to be shown
  connectedUser;
  getAllConnection(id:string){
    let userId = sessionStorage.getItem('userId')
    this.http.get('https://eden-dev.guseden.com:8094/connection/getAllConnection/'+id).subscribe(
      (response) => {
          this.connectedUser = response;
          console.log("connected user list ------------------------------------->>")
          console.log(this.connectedUser);
          this.loadAllUsers();

          this.connectedUser.data.forEach(element => {
            console.log("elements-----");
            console.log(element)
            this.userService.profiles.data.forEach(us => {
                
                if(us.userprofileuuid==element.connectoruserid)
                {
                  console.log("id match==================>>>>>>>>>>>>>>>>>")
                
                  element.connectoruserid=us.userprofiletitle+" "+us.userprofilefirstname+" "+us.userprofilesurname;
                    console.log(element)
                }
            });
          });
        },
      (error) => console.log(error)
  )
    
  }  
  
  
  loadAllUsers() {
    this.userService.loadAllUsers();
 //    this.userService.profiles.data.subscribe(us=> {
         
 //     });
 }
  isGuest= sessionStorage.getItem("guest");
  showMyPost: boolean = false;
  username = sessionStorage.getItem('username')
  userId;
  self:boolean = false;
  full:boolean=false;
  guest:string=sessionStorage.getItem('guest');
  ngOnInit() {
      
    //this.route.
    this.route.queryParams.subscribe(params => {​​
        this.self=false;
        this.userId=params['id'];
        
         if(this.guest!='true'){
            if(this.userId==this.currentUser.data.id){
                this.self=true;
            }
        }

        this.profileService.getUser(this.userId).subscribe(e=>{
            console.log(e);
            this.users = e;


            this.dpUrl= this.dpUrl+this.users.data.username;
            
            console.log("Sans reach here ")
            console.log(this.users.data.userprofileuuid)
            // this.myStatsUrl=this.myStatsUrl+this.users.data.userprofileuuid;
            // this.myStatsUrl= this.myStatsUrl.replace('undefined','');
            // console.log(this.myStatsUrl)
            this.getMyStats().subscribe(stats => {
                this.myStats = stats;
              //  console.log("mystats")
               // alert("mystats");
                console.log(this.myStats)
                this.followers=this.myStats.dataObj.followers;
                this.followings=this.myStats.dataObj.following;
                this.connections=this.myStats.dataObj.connections;
                this.notification=this.myStats.dataObj.notification;
                this.posts=this.myStats.posts;
              //  console.log(this.posts)

              this.followers.forEach(element => {
                if(this.currentUser.data.id==element.followeruserid){
                    this.full=true;
                }
                if(this.currentUser.data.id==element.followuserid){
                    this.full=true; 
                }
              });
              this.followings.forEach(element => {
               
                    if(this.currentUser.data.id==element.followeruserid){
                        this.full=true;
                    }
                    if(this.currentUser.data.id==element.followuserid){
                        this.full=true; 
                    }
                });
                this.connections.forEach(element => {
                    console.log(element)
                    if(this.currentUser.data.id==element.connectionuserid){
                        this.full=true;
                    }
                    if(this.currentUser.data.id==element.connectoruserid){
                        this.full=true; 
                    }
                });

            });
        });        
    }​​);

   // console.log(this.users)

      if (this.currentUser == null) {
          this.show = false;     
      }

     let user = JSON.stringify(this.currentUser);
     console.log("currentuser")
     console.log(user);

  }


  
  getMyStats(){
      
      this.myStatsUrl = this.myStatsUrl + this.userId;
      console.log(this.myStatsUrl);
      return  this.http.get<any[]>(this.myStatsUrl);
  }
  
  showAllMyPosts() {
      this.showMyPost = true;
      console.log(this.showMyPost)
      this.getAllMyPosts()
  }
  myPosts: any = [];
  getAllMyPosts() {
      this.profileService.getAllMyPosts().subscribe(data => {
          this.myPosts = data
          console.log("This My Posts :::")
          console.log(this.myPosts);
      })
  }
  


  dateConversion(millis) {
      console.log(new Date(millis).toLocaleDateString())
      return new Date(millis).toLocaleTimeString();
  }
  getChar(data){
      return data.replace('s3://edensocialcontent/',"")
  }
  visibility;
  aboutMe :string;
  firstname;
  lastname;
  city;
  state;
  pincode;

  SaveProfile(){
    confirm("saving profile...")

    if(this.visibility==null)
    this.visibility="NETWORK";

    let reqbody ={ 
        "userprofileuuid":this.currentUser.data.id,
        "userprofilevisibility":this.visibility.toUpperCase(),
        "userprofilefirstname":this.firstname,
        "userprofilesurname":this.lastname,
        "userprofilepincode":this.pincode,
        "userprofilestate":this.state,
        "userprofilecity":this.city,
        "userprofilewanttobe":this.aboutMe
    };
    console.log(reqbody);
     this.http.put<any[]>("https://eden-dev.guseden.com:8093/profile/update-profile/"+this.currentUser.data.profile.email,reqbody).subscribe((res)=>{
         alert("profile updated");
        },
        (error)=>{
            console.log(error);
        });

  }
  
  //follow request send 
  follow(p){
   
      console.log("follwo request recievd---->")
        confirm("Follow request sending to : "+p.userprofilefirstname)
      console.log(p)
      console.log(this.currentUser)
      
      let reqbody ={ followerID:p.userprofileuuid,followedID:this.currentUser.data.id};
      let result = this.http.post<any[]>("https://eden-dev.guseden.com:8094/follower/save/",reqbody);
      console.log("Follow result:-->")
      console.log(result);
      alert("You are now Following : "+p.userprofilefirstname)
      //convert follow to following
  }
  //connection request 
  connect(userId){
   confirm("connect request sending to :"+userId)
   let currentUserId=this.currentUser.data.id;
   let reqbody =   {
       "connectionuserid":userId,
       "connectoruserid":currentUserId,
       "status":"Pending"
    }	

   let result = this.http.post<any[]>("https://eden-dev.guseden.com:8094/connection/add/",reqbody);

   console.log("connect result:-->"+result);
   alert("connection request sent .")
  }

}
