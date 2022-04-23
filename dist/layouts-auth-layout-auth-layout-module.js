(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["layouts-auth-layout-auth-layout-module"],{

/***/ "/fh3":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/register/register.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header bg-gradient-danger py-7 py-lg-8\">\r\n  <div class=\"container\">\r\n    <div class=\"header-body text-center mb-7\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-lg-5 col-md-6\">\r\n          <h1 class=\"text-white\">Welcome!</h1>\r\n          <p class=\"text-lead text-light\">Use these awesome forms to login or create new account in your project for free.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"separator separator-bottom separator-skew zindex-100\">\r\n    <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n      <polygon class=\"fill-default\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n    </svg>\r\n  </div>\r\n</div>\r\n<!-- Page content -->\r\n<div class=\"container mt--8 pb-5\">\r\n  <!-- Table -->\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-lg-6 col-md-8\">\r\n      <div class=\"card bg-secondary shadow border-0\">\r\n        <div class=\"card-header bg-transparent pb-5\">\r\n          <div class=\"text-muted text-center mt-2 mb-4\"><small>Sign up with</small></div>\r\n          <div class=\"text-center\">\r\n            <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon mr-4\">\r\n              <span class=\"btn-inner--icon\"><img src=\"assets/img/icons/common/github.svg\"></span>\r\n              <span class=\"btn-inner--text\">Github</span>\r\n            </a>\r\n            <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\r\n              <span class=\"btn-inner--icon\"><img src=\"assets/img/icons/common/google.svg\"></span>\r\n              <span class=\"btn-inner--text\">Google</span>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body px-lg-5 py-lg-5\">\r\n          <div class=\"text-center text-muted mb-4\">\r\n            <small>Or sign up with credentials</small>\r\n          </div>\r\n          <form role=\"form\">\r\n            <div class=\"form-group\">\r\n              <div class=\"input-group input-group-alternative mb-3\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"ni ni-hat-3\"></i></span>\r\n                </div>\r\n                <input class=\"form-control\" placeholder=\"Name\" type=\"text\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div class=\"input-group input-group-alternative mb-3\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\r\n                </div>\r\n                <input class=\"form-control\" placeholder=\"Email\" type=\"email\">\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div class=\"input-group input-group-alternative\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\r\n                </div>\r\n                <input class=\"form-control\" placeholder=\"Password\" type=\"password\">\r\n              </div>\r\n            </div>\r\n            <div class=\"text-muted font-italic\"><small>password strength: <span class=\"text-success font-weight-700\">strong</span></small></div>\r\n            <div class=\"row my-4\">\r\n              <div class=\"col-12\">\r\n                <div class=\"custom-control custom-control-alternative custom-checkbox\">\r\n                  <input class=\"custom-control-input\" id=\"customCheckRegister\" type=\"checkbox\">\r\n                  <label class=\"custom-control-label\" for=\"customCheckRegister\">\r\n                    <span class=\"text-muted\">I agree with the <a href=\"#!\">Privacy Policy</a></span>\r\n                  </label>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"text-center\">\r\n              <button type=\"button\" class=\"btn btn-primary mt-4\">Create account</button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "D8EZ":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./login.component.html */ "ywSW");
/* harmony import */ var _login_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.scss */ "KEbp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_services */ "J9tS");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, authenticationService, alertService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
        this.logoUrl = "https://eden-dev.guseden.com:8093/content/image/dp/logo.png";
        this.showGuestUserDiv = false;
        // redirect to home if already logged in
        if (this.authenticationService.currentUserValue) {
            this.router.navigate(['/feed']);
        }
    }
    LoginComponent.prototype.ngOnInit = function () {
        // alert("inside login ts")
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        // this.logoUrl = this.logoUrl+"logo.png";
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/feed';
    };
    LoginComponent.prototype.ngOnDestroy = function () {
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: function () { return this.loginForm.controls; },
        enumerable: false,
        configurable: true
    });
    LoginComponent.prototype.guestUserLink = function () {
        this.showGuestUserDiv = true;
    };
    LoginComponent.prototype.submitEmail = function () {
        console.log(this.guestUserEmail);
        sessionStorage.setItem('guestUserEmail', this.guestUserEmail);
        this.router.navigate(['/feed'], { queryParams: { "guest": true } });
    };
    LoginComponent.prototype.signIn = function () {
        // console.log("reached sign in ")
        // console.log(this.username)
        // console.log(this.password)
        var _this = this;
        // console.log(this.f.username.value)
        // console.log(this.f.password.value)
        this.authenticationService.login(this.username, this.password)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (data) {
            console.log("reached data success ");
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            console.log("reached error ");
            console.log(error);
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] },
        { type: _services__WEBPACK_IMPORTED_MODULE_6__["AlertService"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"],
            _services__WEBPACK_IMPORTED_MODULE_6__["AlertService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "Eq68":
/*!************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.routing.ts ***!
  \************************************************************/
/*! exports provided: AuthLayoutRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutRoutes", function() { return AuthLayoutRoutes; });
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pages/login/login.component */ "D8EZ");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/register/register.component */ "fNfI");


var AuthLayoutRoutes = [
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"] },
    { path: 'register', component: _pages_register_register_component__WEBPACK_IMPORTED_MODULE_1__["RegisterComponent"] }
];


/***/ }),

/***/ "HdeD":
/*!********************************************************!*\
  !*** ./src/app/pages/register/register.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "KEbp":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "PTPi":
/*!***********************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.module.ts ***!
  \***********************************************************/
/*! exports provided: AuthLayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutModule", function() { return AuthLayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _auth_layout_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth-layout.routing */ "Eq68");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/login/login.component */ "D8EZ");
/* harmony import */ var _pages_register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pages/register/register.component */ "fNfI");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AuthLayoutModule = /** @class */ (function () {
    function AuthLayoutModule() {
    }
    AuthLayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_auth_layout_routing__WEBPACK_IMPORTED_MODULE_4__["AuthLayoutRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
                //NgbModule
            ],
            declarations: [
                _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _pages_register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]
            ]
        })
    ], AuthLayoutModule);
    return AuthLayoutModule;
}());



/***/ }),

/***/ "fNfI":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./register.component.html */ "/fh3");
/* harmony import */ var _register_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.component.scss */ "HdeD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.ctorParameters = function () { return []; };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-register',
            template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_register_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "ywSW":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header py-7 py-lg-8\" style=\"background: #f1f1f1;\">\r\n  <div class=\"container\">\r\n    <div class=\"header-body text-center mb-7\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-lg-5 col-md-6\">\r\n          <h1>Welcome!</h1>\r\n          <p> Use below form to login or create new account to start using Eden Social Network. You can use Guest Login to see public posts & content</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"separator separator-bottom separator-skew zindex-100\">\r\n    <svg x=\"0\" y=\"0\" viewBox=\"0 0 2560 100\" preserveAspectRatio=\"none\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\r\n      <polygon class=\"fill-default\" points=\"2560 0 2560 100 0 100\"></polygon>\r\n    </svg>\r\n  </div>\r\n</div>\r\n<!-- Page content -->\r\n<div class=\"container mt--8 pb-5\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-lg-5 col-md-7\">\r\n      <div class=\"card bg-secondary shadow border-0\">\r\n        <div class=\"card-header bg-transparent pb-5\">\r\n          <div class=\"text-muted text-center mt-2 mb-3\"><small>Sign in with</small></div>\r\n          <div class=\"btn-wrapper text-center\">\r\n            <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\r\n              <span class=\"btn-inner--icon\"><img src=\"../assets/img/icons/common/github.svg\"></span>\r\n              <span class=\"btn-inner--text\">Facebook</span>\r\n            </a>\r\n            <a href=\"javascript:void(0)\" class=\"btn btn-neutral btn-icon\">\r\n              <span class=\"btn-inner--icon\"><img src=\"../assets/img/icons/common/google.svg\"></span>\r\n              <span class=\"btn-inner--text\">Google</span>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-body px-lg-5 py-lg-5\">\r\n          <div class=\"text-center text-muted mb-4\">\r\n            <small>Or sign in with credentials</small>\r\n          </div>\r\n          <form role=\"form\" (ngSubmit)=\"signIn()\">\r\n            <div class=\"form-group mb-3\">\r\n              <div class=\"input-group input-group-alternative\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\r\n                </div>\r\n                <input class=\"form-control\" name=\"username\" placeholder=\"username\"  type=\"text\"  [(ngModel)]=\"username\" />\r\n                <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.username.errors.required\">Username is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group\">\r\n              <div class=\"input-group input-group-alternative\">\r\n                <div class=\"input-group-prepend\">\r\n                  <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\r\n                </div>\r\n                <input class=\"form-control\"  name=\"password\" placeholder=\"Password\" type=\"password\" [(ngModel)]=\"password\" />\r\n                \r\n                <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"custom-control custom-control-alternative custom-checkbox\">\r\n              <input class=\"custom-control-input\" id=\" customCheckLogin\" type=\"checkbox\">\r\n              <label class=\"custom-control-label\" for=\" customCheckLogin\">\r\n                <span class=\"text-muted\">Remember me</span>\r\n              </label>\r\n            </div>\r\n            <div class=\"text-center\">\r\n              <button type=\"submit\" class=\"btn btn-primary my-4\" (click)=\"signIn()\">Sign in</button>\r\n            </div>\r\n            <div *ngIf=\"showGuestUserDiv\">\r\n\r\n                  <p>Enter Email :<input type=\"text\" [(ngModel)]=\"guestUserEmail\" name=\"guestUserEmail\" /></p>\r\n              \r\n                  <p> <button style=\"margin-left: 20px;\" (click)=\"submitEmail()\"  class=\"btn btn-primary\">Login</button></p>\r\n              \r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <!-- <button [disabled]=\"loading\" class=\"btn btn-primary\">\r\n                        <span *ngIf=\"loading\" class=\"spinner-border spinner-border-sm mr-1\"></span>\r\n                        Login\r\n                    </button> -->\r\n                    <button style=\"margin-left: 20px;\"  (click)=\"guestUserLink()\"  class=\"btn btn-primary\">\r\n                             Guest Login\r\n                  </button>\r\n                     <!-- <a routerLink=\"/feed\" class=\"btn btn-link\">Unregistered User</a>  -->\r\n                </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <div class=\"row mt-3\">\r\n        <div class=\"col-6\">\r\n          <a href=\"javascript:void(0)\" class=\"text-light\"><small>Forgot password?</small></a>\r\n        </div>\r\n        <div class=\"col-6 text-right\">\r\n          <a href=\"javascript:void(0)\" class=\"text-light\"><small>Create new account</small></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ })

}]);
//# sourceMappingURL=layouts-auth-layout-auth-layout-module.js.map