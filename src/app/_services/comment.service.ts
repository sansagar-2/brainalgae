import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class CommentService {
    constructor(private http: HttpClient) { }

    commentComponent(body) {

      
        return this.http.post("https://eden-dev.guseden.com:8094/comments/add",body);//09b190dd-1605-4786-b4a8-82b5d99bf9db`);
    }

    
}