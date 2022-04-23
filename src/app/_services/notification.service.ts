import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class NotificationService {
    constructor(private http: HttpClient) { }

    getUserNotification(id:string) {

      let userids=sessionStorage.getItem('userId');
    console.log("getUserNotification====================="+id)
        return this.http.get<any[]>("https://eden-dev.guseden.com:8095/notification/fetchAll/"+id);//09b190dd-1605-4786-b4a8-82b5d99bf9db`);
    }

    
}