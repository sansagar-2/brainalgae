import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import{ Constants } from '../_models/constants';
import { User } from '../_models/user';
import { constants } from 'buffer';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        console.log("auth >> ")
        console.log(this.currentUserSubject)
        return this.currentUserSubject.value;
    }

    login(username, password) {
    
        console.log("WELCOME auth service")
        console.log(username)
        console.log(password)
    
        return this.http.post<any>(`https://eden-dev.guseden.com:8093/user/login`, { username, password })
            .pipe(map(user => {  
               
                console.log(user)               
              
                sessionStorage.setItem('userId', user.data.id);
                sessionStorage.setItem('accessToken', JSON.stringify(user.jwt));
                sessionStorage.setItem('username', user.data.username);
                sessionStorage.setItem('currentUser',JSON.stringify(user));
                sessionStorage.setItem("guest","false");
                this.currentUserSubject.next(user);
               
                return user;         
                
            }
        ));
       
    }
   

    logout() {
        // remove user from local storage and set current user to null
        sessionStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}