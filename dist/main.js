(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\gus\CodeBase\DEMO\20-11-2020\kundan_20-11-2020\social-app\eden-frontend-latest\src\main.ts */"zUnb");


/***/ }),

/***/ "3TnI":
/*!**************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.component.ts ***!
  \**************************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var _raw_loader_auth_layout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./auth-layout.component.html */ "WSaj");
/* harmony import */ var _auth_layout_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth-layout.component.scss */ "FkQd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent(router) {
        this.router = router;
        this.test = new Date();
        this.isCollapsed = true;
    }
    AuthLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var html = document.getElementsByTagName("html")[0];
        html.classList.add("auth-layout");
        var body = document.getElementsByTagName("body")[0];
        body.classList.add("bg-default");
        this.router.events.subscribe(function (event) {
            _this.isCollapsed = true;
        });
    };
    AuthLayoutComponent.prototype.ngOnDestroy = function () {
        var html = document.getElementsByTagName("html")[0];
        html.classList.remove("auth-layout");
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("bg-default");
    };
    AuthLayoutComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AuthLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-auth-layout',
            template: _raw_loader_auth_layout_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_auth_layout_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "AK6u":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/admin-layout/admin-layout.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Sidenav -->\r\n<app-sidebar></app-sidebar>\r\n<div class=\"main-content\">\r\n  <!-- Top navbar -->\r\n  <app-navbar></app-navbar>\r\n  <!-- Pages -->\r\n  <router-outlet></router-outlet>\r\n  <div class=\"container-fluid\">\r\n    <app-footer></app-footer>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "FkQd":
/*!****************************************************************!*\
  !*** ./src/app/layouts/auth-layout/auth-layout.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "J9tS":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: AlertService, AuthenticationService, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.service */ "f5O9");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"]; });

/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "pW6c");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "VITL");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]; });






/***/ }),

/***/ "KKA+":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sidebar/sidebar.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-vertical navbar-expand-md navbar-light bg-white\" id=\"sidenav-main\">\r\n  <div class=\"container-fluid\">\r\n    <!-- Toggler -->\r\n    <button class=\"navbar-toggler\" type=\"button\" (click)=\"isCollapsed=!isCollapsed\"\r\n       aria-controls=\"sidenav-collapse-main\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <!-- Brand -->\r\n    <a class=\"navbar-brand pt-0\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">\r\n      \r\n    <img src=\"../../../assets/img/icons/top-logo.jpg\" style=\"max-width: 100px;max-height: 100px;\" alt=\"...\"/> EDEN\r\n    </a>\r\n    <!-- User -->\r\n    <ul class=\"nav align-items-center d-md-none\">\r\n      <!--<li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\r\n        <a class=\"nav-link nav-link-icon\" role=\"button\" ngbDropdownToggle>\r\n          <i class=\"ni ni-bell-55\"></i>\r\n        </a>\r\n        <div class=\"dropdown-menu-arrow dropdown-menu-right\" ngbDropdownMenu>\r\n          <a class=\"dropdown-item\" href=\"javascript:void(0)\">Action</a>\r\n          <a class=\"dropdown-item\" href=\"javascript:void(0)\">Another action</a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item\" href=\"javascript:void(0)\">Something else here</a>\r\n        </div>\r\n      </li>-->\r\n      <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\r\n        <a class=\"nav-link\" role=\"button\" ngbDropdownToggle>\r\n          <div class=\"media align-items-center\">\r\n            <span class=\"avatar avatar-sm rounded-circle\">\r\n              <img alt=\"Image placeholder\" src=\"./assets/img/theme/team-1-800x800.jpg\">\r\n            </span>\r\n          </div>\r\n        </a>\r\n        <div class=\"dropdown-menu-arrow dropdown-menu-right\" ngbDropdownMenu>\r\n          <div class=\" dropdown-header noti-title\">\r\n            <h6 class=\"text-overflow m-0\">Welcome!</h6>\r\n          </div>\r\n          <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\r\n            <i class=\"ni ni-single-02\"></i>\r\n            <span>My profile</span>\r\n          </a>\r\n          <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\r\n            <i class=\"ni ni-settings-gear-65\"></i>\r\n            <span>Settings</span>\r\n          </a>\r\n          <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\r\n            <i class=\"ni ni-calendar-grid-58\"></i>\r\n            <span>Activity</span>\r\n          </a>\r\n          <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\r\n            <i class=\"ni ni-support-16\"></i>\r\n            <span>Support</span>\r\n          </a>\r\n         \r\n          <div class=\"dropdown-divider\"></div>\r\n          <a href=\"#!\" class=\"dropdown-item\">\r\n            <i class=\"ni ni-user-run\"></i>\r\n            <span>Logout</span>\r\n          </a>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n    <!-- Collapse -->\r\n    <div class=\"collapse navbar-collapse\"  [ngbCollapse]=\"isCollapsed\" id=\"sidenav-collapse-main\">\r\n      <!-- Collapse header -->\r\n      <div class=\"navbar-collapse-header d-md-none\">\r\n        <div class=\"row\">\r\n          <div class=\"col-6 collapse-brand\">\r\n            <a  routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">\r\n              <img src=\"./assets/img/brand/blue.png\">\r\n            </a>\r\n          </div>\r\n          <div class=\"col-6 collapse-close\">\r\n            <button type=\"button\" class=\"navbar-toggler\" (click)=\"isCollapsed=!isCollapsed\">\r\n              <span></span>\r\n              <span></span>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Form -->\r\n      <form class=\"mt-4 mb-3 d-md-none\">\r\n        <div class=\"input-group input-group-rounded input-group-merge\">\r\n          <input type=\"search\" class=\"form-control form-control-rounded form-control-prepended\" placeholder=\"Search\" aria-label=\"Search\">\r\n          <div class=\"input-group-prepend\">\r\n            <div class=\"input-group-text\">\r\n              <span class=\"fa fa-search\"></span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n      <!-- Navigation -->\r\n      <ul class=\"navbar-nav\">\r\n          <li *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}} nav-item\">\r\n              <a routerLinkActive=\"active\" [routerLink]=\"[menuItem.path]\" class=\"nav-link\">\r\n                  <i class=\"ni {{menuItem.icon}}\"></i>\r\n                  {{menuItem.title}}\r\n              </a>\r\n          </li>\r\n      </ul>\r\n      <!-- Divider -->\r\n      <hr class=\"my-3\">\r\n      <!-- Heading --><!-- Navigation -->\r\n      <!--<h6 class=\"navbar-heading text-muted\">Documentation</h6>\r\n      \r\n      <ul class=\"navbar-nav mb-md-3\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"https://demos.creative-tim.com/argon-dashboard-angular/documentation/tutorial\">\r\n            <i class=\"ni ni-spaceship\"></i> Getting started\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"https://demos.creative-tim.com/argon-dashboard-angular/documentation/colors\">\r\n            <i class=\"ni ni-palette\"></i> Foundation\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"https://demos.creative-tim.com/argon-dashboard-angular/documentation/alerts\">\r\n            <i class=\"ni ni-ui-04\"></i> Components\r\n          </a>\r\n        </li>\r\n      </ul>-->\r\n    </div>\r\n  </div>\r\n</nav>\r\n");

/***/ }),

/***/ "L1Lo":
/*!***********************************************!*\
  !*** ./src/app/_services/activity.service.ts ***!
  \***********************************************/
/*! exports provided: ActivityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityService", function() { return ActivityService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActivityService = /** @class */ (function () {
    function ActivityService(http) {
        this.http = http;
    }
    ActivityService.prototype.getUserActivity = function (id) {
        return this.http.get("https://eden-dev.guseden.com:8095/activity/fetchAllRecent/" + id);
    };
    ActivityService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    ActivityService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ActivityService);
    return ActivityService;
}());



/***/ }),

/***/ "LmEr":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "WwN9");
/* harmony import */ var _footer_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.scss */ "yZN6");
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



var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent.ctorParameters = function () { return []; };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-footer',
            template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "Ls9r":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXZiYXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "P6kD":
/*!****************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./admin-layout.component.html */ "AK6u");
/* harmony import */ var _admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-layout.component.scss */ "vtrx");
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



var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent() {
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
    };
    AdminLayoutComponent.ctorParameters = function () { return []; };
    AdminLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-admin-layout',
            template: _raw_loader_admin_layout_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_admin_layout_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "Qaiu":
/*!***************************************************!*\
  !*** ./src/app/_services/notification.service.ts ***!
  \***************************************************/
/*! exports provided: NotificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationService", function() { return NotificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationService = /** @class */ (function () {
    function NotificationService(http) {
        this.http = http;
    }
    NotificationService.prototype.getUserNotification = function (id) {
        var userids = sessionStorage.getItem('userId');
        console.log("getUserNotification=====================" + id);
        return this.http.get("https://eden-dev.guseden.com:8095/notification/fetchAll/" + id); //09b190dd-1605-4786-b4a8-82b5d99bf9db`);
    };
    NotificationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    NotificationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NotificationService);
    return NotificationService;
}());



/***/ }),

/***/ "S6iF":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<style>\r\n  .d-flex{display:-ms-flexbox!important;display:flex!important}.d-inline-flex{display:-ms-inline-flexbox!important;display:inline-flex!important}\r\n  \r\n .circleLink{ height:35px; width:35px; border-radius:100%; background:#f2f2f2; text-align:center;display: -ms-flexbox; display: flex;-ms-flex-align: center; align-items: center;-ms-flex-pack: center; justify-content: center;border:solid 1px transparent;}\r\n .circleLink:hover{border-color:#b8b8b8; box-shadow:2px 2px 2px rgba(0,0,0,0.2); background:#fff;} \r\n .notification.open .dropdown-menu,\r\n .dropdown.open .dropdown-menu{opacity: 1; left:auto; right:0;}\r\n .notification.open .dropdown-menu{width: 300px; max-height: auto;}\r\n \r\n</style>\r\n<nav class=\"\" id=\"navbar-main\">\r\n  <div class=\"container-fluid d-flex justify-content-between\">\r\n    <!-- Brand -->\r\n    <a class=\"h4 mb-0 text-white text-uppercase d-none d-lg-inline-block\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">{{getTitle()}}</a>\r\n    <!-- Form -->\r\n    <form class=\"navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto\">\r\n      <div class=\"form-group mb-0\" [ngClass]=\"{ 'focused': focus === true }\">\r\n        <div class=\"input-group input-group-alternative\">\r\n          <div class=\"input-group-prepend\">\r\n            <span class=\"input-group-text\"><i class=\"fas fa-search\"></i></span>\r\n          </div>\r\n          <input class=\"form-control\" placeholder=\"Search\" type=\"text\" (focus)=\"focus = true\"\r\n          (blur)=\"focus = false\">\r\n        </div>\r\n      </div>\r\n    </form>\r\n\r\n    <div class=\"d-flex\">\r\n      <a href=\"javascript:;\" routerLinkActive=\"active\" [routerLink]=\"['/inbox']\" class=\"circleLink ml-4\"><img src=\"../../../assets/img/icons/chatIcon.svg\" alt=\"\" /></a>\r\n      \r\n      <!--NOTIFICATION-->\r\n      <div class=\"btn-group notification\">\r\n        <a href=\"javascript:;\" class=\"circleLink ml-3\" id=\"notification\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" data-reference=\"parent\">\r\n            <img src=\"../../../assets/img/icons/bell.svg\" alt=\"\" />\r\n          </a>\r\n          <div class=\"dropdown-menu dropdown-menu-right\" >\r\n            <!-- style=\"max-height: 200px;overflow-y: auto;\"> -->\r\n            <div   *ngFor=\"let a of notifications.data\">\r\n            <ul>\r\n              <li>\r\n                <p>\r\n                {{getName(a.actionwithcomponentid)}} has {{getCorrectActionName(a.actionname)}} with {{getName(a.actionforuserid)}} at {{a.actiontime|date}}\r\n                <span *ngIf=\"a.actionname == 'REQUEST_SEND'\">\r\n                  <button class=\"btn btn-success\" (click)=\"accept(a)\">Accept</button>\r\n                  <button class=\"btn btn-warning\" (click)=\"reject(a)\">Reject</button>\r\n                  <button class=\"btn btn-danger\" (click)=\"block(a)\">Block</button>\r\n                 </span>\r\n                 <span *ngIf=\"a.actionname == 'WAITING'\">\r\n                   WAITING FOR \r\n                  <!-- <button class=\"btn btn-success\" (click)=\"accept(a)\">Accept</button>\r\n                  <button class=\"btn btn-warning\" (click)=\"reject(a)\">Reject</button>\r\n                  <button class=\"btn btn-danger\" (click)=\"block(a)\">Block</button> -->\r\n                 </span>\r\n                 <small>{{a.actionstatus}}</small>\r\n                </p>\r\n              </li>\r\n              </ul>\r\n          </div>\r\n         <div  *ngFor=\"let n of activities.data\" >\r\n            <ul>\r\n              <li>\r\n                \r\n                <p> {{getName(n.userid)}} has {{n.componentActivityType}} the {{n.componenttype}} at {{n.activityendtime|date}} </p>\r\n             \r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n\r\n            <!-- <li>\r\n                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sitz</p>\r\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit.</p>\r\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sitz</p>\r\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit.</p>\r\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sitz</p>\r\n                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit.</p>\r\n              </li>\r\n              <li><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit.</p></li>\r\n              <li><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit.</p></li> -->\r\n           \r\n      </div>\r\n      <div class=\"dropdown\">\r\n     \r\n        <span class=\"avatar avatar-sm rounded-circle\" data-toggle=\"dropdown\">\r\n          <img alt=\"Image placeholder\" [src]=\"dpUrl\">\r\n        </span>\r\n     \r\n      <ul class=\"dropdown-menu\">\r\n        <!-- routerLinkActive=\"active\" [routerLink]=\"['/user-profile/']\" -->\r\n        <li><button (click)=\"myprofile()\" >My Profile></button></li>\r\n        <li><button >Settings</button></li>\r\n        <li><button (click)=\"logout()\">Logout</button></li>\r\n      </ul>\r\n      </div>\r\n      <!--USER PROFILE DROPDOWN-->\r\n      <!-- <div class=\"btn-group userDrop\">\r\n        <a href=\"javascript:;\" class=\"circleLink ml-3\" id=\"userDropdown\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" data-reference=\"parent\">\r\n            <span class=\"avatar avatar-sm rounded-circle\">\r\n              <img alt=\"Image placeholder\" [src]=\"dpUrl\">\r\n            </span>\r\n            <ul class=\"dropdown-menu\">\r\n              <li><a href=\"#\">HTML</a></li>\r\n              <li><a href=\"#\">CSS</a></li>\r\n              <li><a href=\"#\">JavaScript</a></li>\r\n            </ul>\r\n            <div class=\"media-body ml-2 d-none d-lg-block\">\r\n              <span class=\"mb-0 text-sm  font-weight-bold\">{{currentUser.data.username}}</span>\r\n            </div>\r\n          </a>\r\n         \r\n          <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"userDropdown\">\r\n            <div class=\"d-flex align-items-center justify-content-center box1\">\r\n              <span class=\"user\"><img src=\"images/svgIcon/circleUser.svg\" alt=\"\" /></span> \r\n              <a href=\"javascript:;\" class=\"ml-3\">My Profile</a></div>\r\n            <div class=\"d-flex box2 btn-group\">\r\n              <a href=\"javascript:;\" class=\"btn active flex-fill\">Online</a> <a href=\"javascript:;\" class=\"btn flex-fill\">Invisible</a>\r\n            </div>\r\n            <ul>\r\n              <li><a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">My Account information</a></li>\r\n              <li><a routerLinkActive=\"active\" [routerLink]=\"['/setting']\" class=\"dropdown-item\">Change Password</a></li>\r\n              <li><a href=\"javascript:;\">Switch to Dark mode</a></li>\r\n              <li><a href=\"#!\" class=\"dropdown-item\" [routerLink]=\"['/login']\" (click)=\"logout()\">Logout</a></li>\r\n            </ul>\r\n          </div>\r\n      </div>\r\n       -->\r\n  </div>\r\n    <!-- <span class=\"\">\r\n      <img alt=\"notification\" [routerLink]=\"['/inbox']\" src=\"../../../assets/img/icons/chatIcon.svg\">\r\n    </span>\r\n    \r\n    <ul class=\"navbar-nav align-items-center d-none d-md-flex\">\r\n      <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\r\n        <a class=\"nav-link pr-0\" role=\"button\" ngbDropdownToggle>  \r\n          <div class=\"media align-items-center\">\r\n            \r\n            <span class=\"avatar avatar-sm rounded-circle\">\r\n              <img alt=\"notifications\" src=\"../../../assets/img/icons/bell.svg\">\r\n            </span>\r\n            <div class=\"media-body ml-2 d-none d-lg-block\">\r\n              <span class=\"mb-0 text-sm  font-weight-bold\"></span>\r\n            </div>\r\n          </div>\r\n        </a>\r\n        <div class=\"dropdown-menu-arrow dropdown-menu-right\" ngbDropdownMenu>\r\n          <div class=\" dropdown-header noti-title\" *ngFor=\"let n of notifications.data\">\r\n            <span class=\"mb-0 text-sm  font-weight-bold\">Sanskriti {{n.rowid}}</span>\r\n            <span class=\"mb-0 text-sm  font-weight-bold\">Agarwal {{n.userid}}</span>\r\n          </div>\r\n         \r\n        </div>\r\n      </li>\r\n    </ul> -->\r\n    <!-- User Toggle-->\r\n    <!-- <ul class=\"navbar-nav align-items-center d-none d-md-flex\">\r\n      <li class=\"nav-item\" ngbDropdown placement=\"bottom-right\">\r\n        <a class=\"nav-link pr-0\" role=\"button\" ngbDropdownToggle>\r\n          <div class=\"media align-items-center\">\r\n            <span class=\"avatar avatar-sm rounded-circle\">\r\n              <img alt=\"Image placeholder\" [src]=\"dpUrl\">\r\n            </span>\r\n            <div class=\"media-body ml-2 d-none d-lg-block\">\r\n              <span class=\"mb-0 text-sm  font-weight-bold\">{{currentUser.data.username}}</span>\r\n            </div>\r\n          </div>\r\n        </a>\r\n        <div class=\"dropdown-menu-arrow dropdown-menu-right\" ngbDropdownMenu>\r\n          <div class=\" dropdown-header noti-title\">\r\n            <h6 class=\"text-overflow m-0\">Welcome!</h6>\r\n          </div>\r\n          <a routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\" class=\"dropdown-item\">\r\n            <i class=\"ni ni-single-02\"></i>\r\n            <span>My profile</span>\r\n          </a>\r\n          <a routerLinkActive=\"active\" [routerLink]=\"['/setting']\" class=\"dropdown-item\">\r\n            <i class=\"ni ni-settings-gear-65\"></i>\r\n            <span>Settings</span>\r\n          </a>\r\n         \r\n          <div class=\"dropdown-divider\"></div>\r\n          <a href=\"#!\" class=\"dropdown-item\" [routerLink]=\"['/login']\" (click)=\"logout()\">\r\n            <i class=\"ni ni-user-run\"></i>\r\n            <span>Logout</span>\r\n          </a>\r\n        </div>\r\n      </li>\r\n    </ul> -->\r\n  </div>\r\n</nav>\r\n");

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'argon-dashboard-angular';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-root',
            template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "VITL":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.dpUrl = "https://eden-dev.guseden.com:8093/content/image/profiledp/";
        this.profilesDpUrl = "https://eden-dev.guseden.com:8093/content/image/profiledp/";
        this.dpUrl2 = "https://eden-dev.guseden.com:8093/content/image/profiledp/";
        this.userProfileUrl = "https://eden-dev.guseden.com:8093/profile/getAllUserProfile/";
    }
    UserService.prototype.loadAllUsers = function () {
        var _this = this;
        this.http.get(this.userProfileUrl).subscribe(function (pro) {
            _this.profiles = pro;
        });
        console.log("load all profiles-------------------================>");
        console.log(this.profiles);
        sessionStorage.setItem("profiles", this.profiles.data);
        //this.userService.getAll()
        //.pipe(first())
        //  .subscribe(users => this.users = users);
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "WSaj":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layouts/auth-layout/auth-layout.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-content\">\r\n  <nav class=\"navbar navbar-top navbar-horizontal navbar-expand-md navbar-dark\">\r\n    <div class=\"container px-4\">\r\n      <a class=\"navbar-brand\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">\r\n        <img src=\"assets/img/brand/logo.png\" />\r\n      </a>\r\n      <button class=\"navbar-toggler\" type=\"button\" (click)=\"isCollapsed=!isCollapsed\"\r\n         aria-controls=\"sidenav-collapse-main\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div class=\"collapse navbar-collapse\"  [ngbCollapse]=\"isCollapsed\" id=\"sidenav-collapse-main\">\r\n        <!-- Collapse header -->\r\n        <div class=\"navbar-collapse-header d-md-none\">\r\n          <div class=\"row\">\r\n            <div class=\"col-6 collapse-brand\">\r\n              <a routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">\r\n                <img src=\"assets/img/brand/blue.png\">\r\n              </a>\r\n            </div>\r\n            <div class=\"col-6 collapse-close\">\r\n              <button type=\"button\" class=\"navbar-toggler\" (click)=\"isCollapsed=!isCollapsed\" >\r\n                <span></span>\r\n                <span></span>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- Navbar items -->\r\n        <ul class=\"navbar-nav ml-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon text-dark\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">\r\n              <i class=\"ni ni-planet\"></i>\r\n              <span class=\"nav-link-inner--text\">Dashboard</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon text-dark\" routerLinkActive=\"active\" [routerLink]=\"['/register']\">\r\n              <i class=\"ni ni-circle-08\"></i>\r\n              <span class=\"nav-link-inner--text\">Register</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon text-dark\" routerLinkActive=\"active\" [routerLink]=\"['/login']\">\r\n              <i class=\"ni ni-key-25\"></i>\r\n              <span class=\"nav-link-inner--text\">Login</span>\r\n            </a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link nav-link-icon text-dark\" routerLinkActive=\"active\" [routerLink]=\"['/user-profile']\">\r\n              <i class=\"ni ni-single-02\"></i>\r\n              <span class=\"nav-link-inner--text\">Profile</span>\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n  <router-outlet></router-outlet>\r\n</div>\r\n<footer class=\"py-5\" style=\"display: none;\">\r\n  <div class=\"container\">\r\n    <div class=\"row align-items-center justify-content-xl-between\">\r\n      <div class=\"col-xl-6\">\r\n        <div class=\"copyright text-center text-xl-left text-muted\">\r\n          &copy; {{ test | date: \"yyyy\" }} <a href=\"https://www.creative-tim.com?ref=ada-footer-auth-layout\" class=\"font-weight-bold ml-1\" target=\"_blank\">Creative Tim</a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-xl-6\">\r\n        <ul class=\"nav nav-footer justify-content-center justify-content-xl-end\">\r\n          <li class=\"nav-item\">\r\n            <a href=\"https://www.creative-tim.com?ref=ada-footer-auth-layout\" class=\"nav-link\" target=\"_blank\">Creative Tim</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a href=\"https://www.creative-tim.com/presentation?ref=ada-footer-auth-layout\" class=\"nav-link\" target=\"_blank\">About Us</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a href=\"http://blog.creative-tim.com?ref=ada-footer-auth-layout\" class=\"nav-link\" target=\"_blank\">Blog</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a href=\"https://github.com/creativetimofficial/argon-dashboard-angular/blob/master/LICENSE.md\" class=\"nav-link\" target=\"_blank\">MIT License</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>\r\n");

/***/ }),

/***/ "WwN9":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\r\n  <div class=\"row align-items-center justify-content-xl-between\">\r\n    <!-- <div class=\"col-xl-6\">\r\n      <div class=\"copyright text-center text-xl-left text-muted\">\r\n        &copy; {{ test | date: \"yyyy\" }} <a href=\"https://www.creative-tim.com?ref=ada-footer-admin-layout\" class=\"font-weight-bold ml-1\" target=\"_blank\">Creative Tim</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-xl-6\">\r\n      <ul class=\"nav nav-footer justify-content-center justify-content-xl-end\">\r\n        <li class=\"nav-item\">\r\n          <a href=\"https://www.creative-tim.com?ref=ada-footer-admin-layout\" class=\"nav-link\" target=\"_blank\">Creative Tim</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a href=\"https://www.creative-tim.com/presentation?ref=ada-footer-admin-layout\" class=\"nav-link\" target=\"_blank\">About Us</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a href=\"http://blog.creative-tim.com?ref=ada-footer-admin-layout\" class=\"nav-link\" target=\"_blank\">Blog</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a href=\"https://github.com/creativetimofficial/argon-dashboard-angular/blob/master/LICENSE.md\" class=\"nav-link\" target=\"_blank\">MIT License</a>\r\n        </li>\r\n      </ul>\r\n    </div> -->\r\n  </div>\r\n</footer>\r\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "P6kD");
/* harmony import */ var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/auth-layout/auth-layout.component */ "3TnI");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/components.module */ "j1ZV");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_0__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_6__["AdminLayoutComponent"],
                _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_7__["AuthLayoutComponent"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/admin-layout/admin-layout.component */ "P6kD");
/* harmony import */ var _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layouts/auth-layout/auth-layout.component */ "3TnI");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    // {
    //   path: '/test',
    //   component: AdminLayoutComponent,
    // }, 
    {
        path: '',
        component: _layouts_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_4__["AdminLayoutComponent"],
        children: [
            {
                path: '',
                loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
            }
        ]
    }, {
        path: '',
        component: _layouts_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_5__["AuthLayoutComponent"],
        children: [
            {
                path: '',
                loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule'
            }
        ]
    }, {
        path: '**',
        redirectTo: 'dashboard'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                    useHash: true
                })
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "crnd":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./layouts/admin-layout/admin-layout.module": [
		"IqXj",
		"layouts-admin-layout-admin-layout-module"
	],
	"./layouts/auth-layout/auth-layout.module": [
		"PTPi",
		"layouts-auth-layout-auth-layout-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "crnd";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "f5O9":
/*!********************************************!*\
  !*** ./src/app/_services/alert.service.ts ***!
  \********************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterRouteChange = false;
        // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.keepAfterRouteChange) {
                    // only keep for a single route change
                    _this.keepAfterRouteChange = false;
                }
                else {
                    // clear alert message
                    _this.clear();
                }
            }
        });
    }
    AlertService.prototype.getAlert = function () {
        return this.subject.asObservable();
    };
    AlertService.prototype.success = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        console.log("Success !!!!!");
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterRouteChange) {
        if (keepAfterRouteChange === void 0) { keepAfterRouteChange = false; }
        this.keepAfterRouteChange = keepAfterRouteChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.clear = function () {
        // clear by calling subject.next() without parameters
        this.subject.next();
    };
    AlertService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "hrlM":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "S6iF");
/* harmony import */ var _navbar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.component.scss */ "Ls9r");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_services/authentication.service */ "pW6c");
/* harmony import */ var _services_activity_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_services/activity.service */ "L1Lo");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/_services */ "J9tS");
/* harmony import */ var src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/_services/notification.service */ "Qaiu");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element, router, http, userService, activityService, notificationService, authenticationService) {
        var _this = this;
        this.element = element;
        this.router = router;
        this.http = http;
        this.userService = userService;
        this.activityService = activityService;
        this.notificationService = notificationService;
        this.authenticationService = authenticationService;
        this.dpUrl = "https://eden-dev.guseden.com:8093/content/image/profiledp/";
        this.location = location;
        this.authenticationService.currentUser.subscribe(function (x) { return _this.currentUser = x; });
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].filter(function (listTitle) { return listTitle; });
        this.dpUrl = this.dpUrl + this.currentUser.data.username;
        this.getMyNotifications();
        this.loadAllUsers();
    };
    NavbarComponent.prototype.loadAllUsers = function () {
        this.userService.loadAllUsers();
        //    this.userService.profiles.data.subscribe(us=> {
        //     });
    };
    NavbarComponent.prototype.getMyNotifications = function () {
        var _this = this;
        console.log("Notification componenet ");
        this.activityService.getUserActivity(this.currentUser.data.id).subscribe(function (acts) {
            _this.activities = acts;
            console.log("NAVBAR ACTIVITIES=============================>>>>");
            console.log(_this.activities);
        });
        this.notificationService.getUserNotification(this.currentUser.data.id).subscribe(function (notification) {
            _this.notifications = notification;
            console.log("NAVBAR NOTIFICATIONS=============================>>>>");
            console.log(_this.notifications);
        });
    };
    NavbarComponent.prototype.getCorrectActionName = function (name) {
        if (name == 'REQUEST_SEND') {
            return 'send request';
        }
        else if (name == 'SHARE_COMPONENT') {
            return "share";
        }
        else {
            return name.toLowerCase();
        }
    };
    NavbarComponent.prototype.getName = function (iitem) {
        var _this = this;
        var name = '';
        this.userService.profiles.data.forEach(function (us) {
            if (iitem == _this.currentUser.data.id) {
                name = ' you ';
            }
            if (us.userprofileuuid == iitem) {
                name = us.userprofiletitle + " " + us.userprofilefirstname + " " + us.userprofilesurname;
            }
            return us.userprofileuuid == iitem ? name : us.userprofileuuid;
        });
        return name;
    };
    NavbarComponent.prototype.reject = function (notification) {
        var input = {
            "connectionuserid": notification.connectionuserid,
            "connectoruserid": notification.connectoruserid,
            "status": "DISCONNECTED"
        };
        var config = new _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpHeaders"]().set('Content-Type', 'application/json')
            .set('Accept', 'application/json');
        this.http.post('https://eden-dev.guseden.com:8094/connection/reject', JSON.stringify(input), { headers: config }).subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
    };
    NavbarComponent.prototype.accept = function (notification) {
        alert("accepting request");
        console.log("----------------------------------->>>>%%%%");
        console.log("notification obj" + notification);
        var input = {
            "connectionuserid": notification.actionforuserid,
            "connectoruserid": notification.actionwithcomponentid,
            "status": "CONNECTED"
        };
        var config = new _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpHeaders"]().set('Content-Type', 'application/json')
            .set('Accept', 'application/json');
        this.http.post('https://eden-dev.guseden.com:8094/connection/accepted', JSON.stringify(input), { headers: config }).subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
    };
    NavbarComponent.prototype.block = function (notification) {
        var input = {
            "connectionuserid": notification.connectionuserid,
            "connectoruserid": notification.connectoruserid,
            "status": "BLOCKED"
        };
        var config = new _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpHeaders"]().set('Content-Type', 'application/json')
            .set('Accept', 'application/json');
        this.http.post('https://eden-dev.guseden.com:8094/connection/block', JSON.stringify(input), { headers: config }).subscribe(function (response) { return console.log(response); }, function (error) { return console.log(error); });
    };
    //   reject(a:any){​​
    //     let input = {​​
    //         actionType:"REJECT",
    //         "rowId":a.rowid
    //     }​​
    //     this.updateNotification(input)
    // }​​
    // accept(a:any){​​
    //     let input = {​​
    //         actionType:"ACCEPT",
    //         "rowId":a.rowid
    //     }​​
    //     this.updateNotification(input)
    // }​​
    // block(a:any){​​
    //     let input = {​​
    //         actionType:"BLOCK",
    //         "rowId":a.rowid
    //     }​​
    //     this.updateNotification(input)
    // }​​
    // updateNotification(input){​​
    //    const config = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json')
    //     this.http.post('https://eden-dev.guseden.com:8092/notification/update-notification', JSON.stringify(input),{​​ headers: config }​​).subscribe(
    //         (response) => console.log(response),
    //         (error) => console.log(error)
    //     )  
    // }​​
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(1);
        }
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.prototype.myprofile = function () {
        // alert("Logging out")
        this.router.navigate(['/user-profile'], { queryParams: { id: this.currentUser.data.id, "self": true } });
    };
    NavbarComponent.prototype.logout = function () {
        alert("Logging out");
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"] },
        { type: src_app_services__WEBPACK_IMPORTED_MODULE_8__["UserService"] },
        { type: _services_activity_service__WEBPACK_IMPORTED_MODULE_7__["ActivityService"] },
        { type: src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"] },
        { type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] }
    ]; };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-navbar',
            template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_navbar_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"],
            src_app_services__WEBPACK_IMPORTED_MODULE_8__["UserService"],
            _services_activity_service__WEBPACK_IMPORTED_MODULE_7__["ActivityService"],
            src_app_services_notification_service__WEBPACK_IMPORTED_MODULE_9__["NotificationService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "j1ZV":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "zBoC");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ "hrlM");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ "LmEr");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
            ],
            declarations: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"]
            ],
            exports: [
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_2__["SidebarComponent"]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "jcT0":
/*!***********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWRlYmFyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "pW6c":
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](JSON.parse(sessionStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
        get: function () {
            console.log("auth >> ");
            console.log(this.currentUserSubject);
            return this.currentUserSubject.value;
        },
        enumerable: false,
        configurable: true
    });
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        console.log("WELCOME auth service");
        console.log(username);
        console.log(password);
        return this.http.post("https://eden-dev.guseden.com:8093/user/login", { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (user) {
            console.log(user);
            sessionStorage.setItem('userId', user.data.id);
            sessionStorage.setItem('accessToken', JSON.stringify(user.jwt));
            sessionStorage.setItem('username', user.data.username);
            sessionStorage.setItem('currentUser', JSON.stringify(user));
            sessionStorage.setItem("guest", "false");
            _this.currentUserSubject.next(user);
            return user;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage and set current user to null
        sessionStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    };
    AuthenticationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "vtrx":
/*!******************************************************************!*\
  !*** ./src/app/layouts/admin-layout/admin-layout.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "yZN6":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "zBoC":
/*!*********************************************************!*\
  !*** ./src/app/components/sidebar/sidebar.component.ts ***!
  \*********************************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! raw-loader!./sidebar.component.html */ "KKA+");
/* harmony import */ var _sidebar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar.component.scss */ "jcT0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ROUTES = [
    // { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    // { path: '/icons', title: 'Icons',  icon:'ni-planet text-blue', class: '' },
    // { path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' },
    // { path: '/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },
    // { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
    // { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
    // { path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' },
    { path: '/login', title: 'Login', icon: 'ni-key-25 text-info', class: '' },
    { path: '/feed', title: 'My Feeds', icon: 'ni-planet text-blue', class: '' },
    { path: '/icons', title: 'My Network', icon: 'ni-planet text-blue', class: '' },
    { path: '/tags', title: 'Followers / Following', icon: 'ni-pin-3 text-orange', class: '' },
    { path: '/discussion', title: 'Discussion', icon: 'ni-key-25 text-info', class: '' },
    { path: '/inbox', title: 'Messages', icon: 'ni-tv-2 text-primary', class: '' },
    //{ path: '/follow', title: 'My Follower n Following',  icon:'ni-planet text-blue', class: '' },
    //{ path: '/connection', title: 'My Performance',  icon:'ni-planet text-blue', class: '' },
    { path: '/contents', title: 'My Content', icon: 'ni-tv-2 text-primary', class: '' },
    { path: '/profile', title: 'Browse Profile', icon: 'ni-bullet-list-67 text-red', class: '' }
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router) {
        this.router = router;
        this.isCollapsed = true;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
        this.router.events.subscribe(function (event) {
            _this.isCollapsed = true;
        });
    };
    SidebarComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-sidebar',
            template: _raw_loader_sidebar_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
            styles: [_sidebar_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map