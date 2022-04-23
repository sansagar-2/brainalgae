import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../_services/authentication.service';
import { ActivityService} from '../../_services/activity.service';
import { User } from '../../_models';
import { UserService } from 'src/app/_services';
import { StringLiteralLike } from 'typescript';
import { NotificationService } from 'src/app/_services/notification.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  public focus;
  public listTitles: any[];
  public location: Location;
  userId:string;
  notifications2: any[];
  currentUser: User;
  activities: any[];

  constructor(
    location: Location,
    private element: ElementRef,
    private router: Router,
    private http: HttpClient,
    private userService: UserService,
    private activityService:ActivityService,
    private notificationService:NotificationService,
    private authenticationService: AuthenticationService) {
    this.location = location;
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }


  dpUrl = "https://eden-dev.guseden.com:8093/content/image/profiledp/";
 
  notifications:any[];


  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    this.dpUrl=this.dpUrl+this.currentUser.data.username;
  
    this.getMyNotifications();
    this.loadAllUsers();
  }

  loadAllUsers() {
     this.userService.loadAllUsers();
  //    this.userService.profiles.data.subscribe(us=> {
          
  //     });
  }

   getMyNotifications(){
         console.log("Notification componenet ")
    
        
         this.activityService.getUserActivity(this.currentUser.data.id).subscribe(acts => {
          this.activities =acts;
          console.log("NAVBAR ACTIVITIES=============================>>>>")
          console.log(this.activities);

          
         
      ​​​​​​}​​​​​);

       this.notificationService.getUserNotification(this.currentUser.data.id).subscribe(notification => {
          this.notifications =notification;
          console.log("NAVBAR NOTIFICATIONS=============================>>>>")
          console.log(this.notifications);
      ​​​​​​}​​​​​);







    }

    getCorrectActionName(name:string):string{
      if(name=='REQUEST_SEND')
      {return 'send request';}
      else if(name=='SHARE_COMPONENT')
      {return "share";}
      else{
        return name.toLowerCase();
      }
    }
    getName(iitem:string):string{
      let name='';
     
         this.userService.profiles.data.forEach(us => {
            
             if(iitem==this.currentUser.data.id){
               name=' you ';
             }
             if(us.userprofileuuid==iitem)
             {
                 name=us.userprofiletitle+" "+us.userprofilefirstname+" "+us.userprofilesurname;
             }
             return  us.userprofileuuid==iitem?name:us.userprofileuuid;
         });
         return name;
     }
    
     reject(notification){
      alert("rejecting request")
    
       console.log(notification)
      let input = {
          "connectionuserid":notification.connectionuserid,
          "connectoruserid":notification.connectoruserid,
          "status":"DISCONNECTED"
      }
      const config = new HttpHeaders().set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      this.http.post('https://eden-dev.guseden.com:8094/connection/reject', JSON.stringify(input),{​​​​​ headers: config }​​​​​).subscribe(
              (response) => console.log(response),
              (error) => console.log(error)
          )  

  }
  accept(notification:any){
    alert("accepting request")
    console.log("----------------------------------->>>>%%%%")

    console.log("notification obj" + notification)
      let input = {
          "connectionuserid":notification.actionforuserid,
          "connectoruserid":notification.actionwithcomponentid,
          "status":"CONNECTED"
      }
      const config = new HttpHeaders().set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      this.http.post('https://eden-dev.guseden.com:8094/connection/accepted', JSON.stringify(input),{​​​​​ headers: config }​​​​​).subscribe(
              (response) => console.log(response),
              (error) => console.log(error)
          )
  }
  block(notification){
    alert("blocking user")
    alert(notification.actionforuserid)
    alert(notification.actionwithcomponentid)
    console.log(notification)
      let input = {
          "connectionuserid":notification.actionforuserid,
          "connectoruserid":notification.actionwithcomponentid,
          "status":"BLOCKED"
      }
      const config = new HttpHeaders().set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      this.http.post('https://eden-dev.guseden.com:8094/connection/block', JSON.stringify(input),{​​​​​ headers: config }​​​​​).subscribe(
              (response) => console.log(response),
              (error) => {console.log(error);alert(error);}
          )
  }



  //   reject(a:any){​​

  //     let input = {​​

  //         actionType:"REJECT",
  //         "rowId":a.rowid

  //     }​​

  //     this.updateNotification(input)



  // }​​

  // accept(a:any){​​

  //     let input = {​​

  //         actionType:"ACCEPT",
  //         "rowId":a.rowid
  //     }​​

  //     this.updateNotification(input)

  // }​​

  // block(a:any){​​

  //     let input = {​​

  //         actionType:"BLOCK",
  //         "rowId":a.rowid

  //     }​​

  //     this.updateNotification(input)

  // }​​



  // updateNotification(input){​​

  //    const config = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json')

  //     this.http.post('https://eden-dev.guseden.com:8092/notification/update-notification', JSON.stringify(input),{​​ headers: config }​​).subscribe(

  //         (response) => console.log(response),

  //         (error) => console.log(error)

  //     )  



  // }​​





    getTitle(){
           var titlee = this.location.prepareExternalUrl(this.location.path());
           if(titlee.charAt(0) === '#'){
              titlee = titlee.slice( 1 );
            }

          for(var item = 0; item < this.listTitles.length; item++){
              if(this.listTitles[item].path === titlee){
                  return this.listTitles[item].title;
              }
          }
          return 'Dashboard';
      }

      myprofile(){
        // alert("Logging out")
        this.router.navigate(['/user-profile'],{​​  queryParams: {​​  id: this.currentUser.data.id , "self":true}​​ });
        
      }
      logout(){
        alert("Logging out")
        this.authenticationService.logout();
        this.router.navigate(['/login']);
      }
}
