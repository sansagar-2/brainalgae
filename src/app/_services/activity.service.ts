import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class ActivityService {
    constructor(private http: HttpClient) { }

    getUserActivity(id:string) {

      
        return this.http.get<any[]>(`https://eden-dev.guseden.com:8095/activity/fetchAllRecent/`+id);
    }

    
}