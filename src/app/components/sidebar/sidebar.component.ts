import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    // { path: '/dashboard', title: 'Dashboard',  icon: 'ni-tv-2 text-primary', class: '' },
    // { path: '/icons', title: 'Icons',  icon:'ni-planet text-blue', class: '' },
    // { path: '/maps', title: 'Maps',  icon:'ni-pin-3 text-orange', class: '' },
    // { path: '/user-profile', title: 'User profile',  icon:'ni-single-02 text-yellow', class: '' },
    // { path: '/tables', title: 'Tables',  icon:'ni-bullet-list-67 text-red', class: '' },
    // { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
    // { path: '/register', title: 'Register',  icon:'ni-circle-08 text-pink', class: '' },
   
	
	 { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },
   { path: '/feed', title: 'My Feeds',  icon:'ni-planet text-blue', class: '' },
   { path: '/icons', title: 'My Network',  icon:'ni-planet text-blue', class: '' },
   { path: '/tags', title: 'Followers / Following',  icon:'ni-pin-3 text-orange', class: '' },
   { path: '/discussion', title: 'Discussion',  icon:'ni-key-25 text-info', class: '' },
   { path: '/inbox', title: 'Messages',  icon:'ni-tv-2 text-primary', class: '' },
   //{ path: '/follow', title: 'My Follower n Following',  icon:'ni-planet text-blue', class: '' },
   //{ path: '/connection', title: 'My Performance',  icon:'ni-planet text-blue', class: '' },
   { path: '/contents', title: 'My Content',  icon:'ni-tv-2 text-primary', class: '' },
	 { path: '/profile', title: 'Browse Profile',  icon:'ni-bullet-list-67 text-red', class: '' }
   

];
  
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}
