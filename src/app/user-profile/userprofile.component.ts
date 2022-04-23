import { Component, OnInit } from '@angular/core';
import { Post } from '../_models/post';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProfileService } from '../_services/profile.service';
import { AuthenticationService } from '../_services';
import { User } from '../_models';
@Component({
    templateUrl: 'userprofile.component.html',

})
export class UserProfileComponent implements OnInit {

    currentUser: User;

    constructor(
        private router: Router,
        private profileService: ProfileService,
        private authenticationService: AuthenticationService, private http: HttpClient,
        private route: ActivatedRoute
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }
    userId: string;
    subject: string = "";
    body: string = "";
    profiles = {
        userprofiletitle: "kundan",
        userprofilefirstname: "Kumar",
        userprofiledesignation: "Software Developer",
        email: "kkk@gmail.com",
        userprofilecity: "NOIDA",
        userprofilestate: "U.P.",
        userprofilepincode: "231332",
        userid: "123"
    }
    ngOnInit() {
        this.userId = this.route.snapshot.params['id'];
    }
    sendMessage() {
        console.log(this.body)
        console.log(this.subject)
        console.log(this.userId)
        let input = {
            "sendToUserId": this.userId,
            "msgbody": this.body,
            "msgsubject": this.subject,
            "sendByUserId": sessionStorage.getItem('userId')
        }
        const config = new HttpHeaders().set('Content-Type', 'application/json')
        .set('Accept', 'application/json')
        this.http.post('https://eden-dev.guseden.com:8095/inbox/send-message', JSON.stringify(input),{​​​​​ headers: config }).subscribe(
            (response) => console.log(response),
            (error) => console.log(error)
        )

    }


}