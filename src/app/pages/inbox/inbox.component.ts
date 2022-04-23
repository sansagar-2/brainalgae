import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { AuthenticationService, UserService } from '../../_services';
import { User } from '../../_models';
import { MailService } from 'src/app/_services/mail.service';
import { newArray } from '@angular/compiler/src/util';

@Component({
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})


export class InboxComponent implements OnInit {
  inboxAllMessage: any;

  constructor(
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private mailService: MailService,
    private userService: UserService,
    private router: Router, 
    private http: HttpClient)
    {

  }
  connectedUser;
  profiles;

  ngOnInit(): void {
   this.showAllMyInbox();
   
   this.getAllConnection();
}

  
    loadAllUsers() {
       this.userService.loadAllUsers();
      //  sessionStorage.forEach(element => {
      //    console.log(element)
      //  });
        this.profiles=sessionStorage.getItem('profiles');
        console.log(this.profiles);
    }

  
  getAllConnection(){
    let userId = sessionStorage.getItem('userId')
    this.http.get('https://eden-dev.guseden.com:8094/connection/getAllConnection/'+userId​​​​​).subscribe(
      (response) => {
          this.connectedUser = response;
          console.log("connected user list ------------------------------------->>")
          console.log(this.connectedUser);
          this.loadAllUsers();

          // this.connectedUser.data.forEach(element => {
          //   console.log("elements-----");
          //   console.log(element)
           
          // });
        },
      (error) => console.log(error)
  )
    
  }  
  showInbox:boolean = false;
  showAllMyInbox(){
         this.showInbox = true;
 
         const config = new HttpHeaders().set('Content-Type', 'application/json')
         .set('Accept', 'application/json')
     
         let userId = sessionStorage.getItem('userId')
 
         this.http.get('https://eden-dev.guseden.com:8097/inbox/load-inbox-by-userid/'+userId​​​​​).subscribe(
             (response) => {
                 this.inboxAllMessage = response;
                 console.log(this.inboxAllMessage);
                },
             (error) => console.log(error)
         )
 
     }
     sendToUserId;
     sendTo(c){
      this.sendToUserId=c.connectoruserid;
      return;
     }

     mailSub;
     mailtxt;
     sendMail() {
      console.log("Sending mail to------------------>"+this.sendToUserId);
      
      console.log(this.mailtxt);
  
      let input = {
        "sendToUserId":this.sendToUserId,
        "msgbody":this.mailtxt,
        "msgsubject":this.mailSub,
        "sendByUserId":sessionStorage.getItem('userId')
      }

      console.log(input)
      this.mailService.sendMail(input).subscribe( (response) => {
          confirm("Mail Sent successfully");

       },
       (error) => console.log(error)
    );
  }


getMailPersonName(c:any) :string{
   let name='';
    this.userService.profiles.data.forEach(us => {
          if (us.userprofileuuid == c) {
            name= us.userprofiletitle + " " + us.userprofilefirstname + " " + us.userprofilesurname;

          }
         
      });
    return name;
  }
  getPersonName(c:any):string{
     console.log(c)
     let name='';
    this.userService.profiles.data.forEach(us => {
       
      //  console.log("mail user name==================>>>>>>>>>>>>>>>>>")
      //  console.log(us.username)
        if(us.userprofileuuid==c.connectoruserid)
        {
        //  console.log("id match==================>>>>>>>>>>>>>>>>>")
         
            name=us.userprofiletitle+" "+us.userprofilefirstname+" "+us.userprofilesurname;
          //  console.log(c.connectoruserid)
        }
        return  us.userprofileuuid==c.connectoruserid?name:us.userprofileuuid;
    });
    return name;
}
 
}
