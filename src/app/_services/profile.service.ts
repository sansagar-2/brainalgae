import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({ providedIn: 'root' })
export class ProfileService {
    constructor(private http: HttpClient) { }

    getUser(id:string):Observable<any[]> {

        return this.http.get<any[]>("https://eden-dev.guseden.com:8093/profile/user-profile-by-id/"+id);
       
    }

    getAllMyPosts():Observable<any[]>{
        let userId = sessionStorage.getItem('userId')
        // let userId = '09b190dd-1605-4786-b4a8-82b5d99bf9db';
        return this.http.get<any[]>(`https://eden-dev.guseden.com:8094/post/getAllPost/`+userId);
    
    }
    addPost(formData){

        console.log(formData)

        return this.http.post(`https://eden-dev.guseden.com:8094/post/create`, formData);
    }
    
   
}