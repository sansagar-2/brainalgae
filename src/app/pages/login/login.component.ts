import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AlertService, AuthenticationService } from '../../_services';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  logoUrl="https://eden-dev.guseden.com:8093/content/image/dp/logo.png";
 constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService
    ) {
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/feed']);
        }
    }


    username:string;
    password:string;

  ngOnInit() {
     // alert("inside login ts")
     
 this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
       // this.logoUrl = this.logoUrl+"logo.png";
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/feed';
  }

  ngOnDestroy() {
  }

  get f() { return this.loginForm.controls; }
  showGuestUserDiv:boolean =false;

  guestUserLink(){
      this.showGuestUserDiv =true;
  }

  guestUserEmail:string
  submitEmail(){
    console.log(this.guestUserEmail)
    sessionStorage.setItem('guestUserEmail', this.guestUserEmail);       
    this.router.navigate(['/feed'],{​​  queryParams: {​​ "guest":true}​​ });
  }

  signIn() {

    // console.log("reached sign in ")
    // console.log(this.username)
    // console.log(this.password)

    // console.log(this.f.username.value)
    // console.log(this.f.password.value)
    
    this.authenticationService.login(this.username, this.password)
        .pipe(first())
        .subscribe(
            data => {
                console.log("reached data success ")
              
                this.router.navigate([this.returnUrl]);
            },
            error => {
                console.log("reached error ")
               
                console.log(error)
                this.alertService.error(error);
                this.loading = false;
            });
}
}