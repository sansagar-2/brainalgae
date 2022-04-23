import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({ providedIn: 'root' })
export class FeedService {
    
    constructor(private http: HttpClient) { }
   
    getAllFeed(id:string):Observable<any[]> {
        let loggedInUser = sessionStorage.getItem('userId');
       console.log("session user---->"+loggedInUser)
       
       return  this.http.get<any[]>(`https://eden-dev.guseden.com:8094/userstats/getAllFeeds/`+id);
    }
  
    getAllPublicFeed(userId: any) :Observable<any[]> {
        return  this.http.get<any[]>(`https://eden-dev.guseden.com:8094/userstats/getAllPublicFeeds`);
    }
}