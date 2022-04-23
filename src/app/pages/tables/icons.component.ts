import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserService } from '../../_services';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  public copy: string;
  currentUser;
  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private http: HttpClient,
    private router: Router
) {

    this.currentUser = this.authenticationService.currentUserValue;

}

  ngOnInit() {
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
 //    this.userService.profiles.data.subscribe(us=> {
         
 //     });
 }
}
