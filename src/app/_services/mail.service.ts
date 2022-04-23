import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class MailService {
    constructor(private http: HttpClient) { }

    sendMail(body) {

      //https://eden-dev.guseden.com:8096/inbox/send-message
        return this.http.post<any[]>(`https://eden-dev.guseden.com:8097/inbox/send-message`,body);
    }

    
}