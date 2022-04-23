import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class ShareService {
    constructor(private http: HttpClient) { }

    shareComponent(body) {

      
        return this.http.post("https://eden-dev.guseden.com:8094/share/create",body);
    }

    
}