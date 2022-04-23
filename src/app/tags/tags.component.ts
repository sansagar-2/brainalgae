import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService, UserService } from '../_services';

@Component({
    templateUrl: 'tags.component.html',

})
export class TagsComponent  {
    public copy: string;
    currentUser;
    myStatsUrl: any="https://eden-dev.guseden.com:8094/userstats/getMyStats/";
    
    followers;
    followings;
    connections;
    notification;
    posts;
    myStats: any[];
  
    constructor(
      private authenticationService: AuthenticationService,
      private userService: UserService,
      private http: HttpClient,
      private router: Router
  ) {
  
      this.currentUser = this.authenticationService.currentUserValue;
  
  }
  
    ngOnInit() {
      //this.getAllConnection(this.currentUser.data.id);
      //this.myStatsUrl=this.myStatsUrl+this.currentUser.data.id;
       //       this.myStatsUrl= this.myStatsUrl.replace('undefined','');
  
              this.getMyStats().subscribe(stats => {
                  this.myStats = stats;
                //    console.log("mystats")
                //    alert("mystats");
                //    console.log(this.myStats)
  
  
                 // stats.dataObj.followers
  
  
  
                //   this.followers=stats.dataObj.followers;
                //   this.followings=this.myStats.dataObj.followings;
                //   this.connections=this.myStats.dataObj.connections;
                //   this.notification=this.myStats.dataObj.notification;
                //   this.posts=this.myStats.dataObj.posts;
                  // console.log(this.posts)
              });
    }
  
  
  
  
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
  
   }
  
   getName(id:string):string{
    let name ='';
    this.userService.profiles.data.forEach(us => {
            if(us.userprofileuuid==id)
            {
                name=us.userprofiletitle+" "+us.userprofilefirstname+" "+us.userprofilesurname;
            }
            return  us.userprofileuuid==id?name:us.userprofileuuid;
        });
    return name;
   }
   
   getUsername(id:string):string{
    let name ='';
    this.userService.profiles.data.forEach(us => {
            if(us.userprofileuuid==id)
            {
                name=us.username;
            }
            //return  us.userprofileuuid==id?name:us.userprofileuuid;
        });
    return name;
   }
  
   getMyStats(){
        
    this.myStatsUrl = this.myStatsUrl + this.currentUser.data.id;
   // alert(this.myStatsUrl);
    return  this.http.get<any[]>(this.myStatsUrl);
  }
  viewProfile(event){
    console.log("Route to profile of user ::>>> ")
    console.log(event)
  
    this.router.navigate(['/user-profile'],{​​  queryParams: {​​  id: event }​​ });
  }

  deleteFollower(follo:any){
    console.log(follo);
  // alert(follo)
      const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
        body:{
          "followeruserid": follo.followeruserid,
          "followuserid": follo.followuserid,
          "rowId": follo.rowid
          },
      };
      
    this.http.delete('https://eden-dev.guseden.com:8094/follower/delete',options) .subscribe((res) => {
     // obj.followed = false
        console.log(res);
        confirm("Follower deleted")
      });
          
  }
  unfollow(id){

  }
}