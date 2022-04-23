import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    dpUrl:string="https://eden-dev.guseden.com:8093/content/image/profiledp/";
    profilesDpUrl:string="https://eden-dev.guseden.com:8093/content/image/profiledp/";
    dpUrl2:string="https://eden-dev.guseden.com:8093/content/image/profiledp/";
    userProfileUrl:string="https://eden-dev.guseden.com:8093/profile/getAllUserProfile/";

    profiles;  
    profileCount:number;


    
    public loadAllUsers() {

        this.http.get<any[]>(this.userProfileUrl).subscribe(pro =>{
           this.profiles = pro;
          
         
        });
        console.log("load all profiles-------------------================>")
        console.log(this.profiles)
        sessionStorage.setItem("profiles",this.profiles.data);
       //this.userService.getAll()
           //.pipe(first())
         //  .subscribe(users => this.users = users);
   }

    // getAll() {
    //     return this.http.get<User[]>(`${config.apiUrl}/users`);
    // }

    // register(user: User) {
    //     return this.http.post(`${config.apiUrl}/users/register`, user);
    // }

    // delete(id: number) {
    //     return this.http.delete(`${config.apiUrl}/users/${id}`);
    // }
}