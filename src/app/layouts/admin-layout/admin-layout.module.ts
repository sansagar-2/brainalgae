import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeedComponent } from 'src/app/pages/feed';
import { ContentComponent } from 'src/app/pages/contents/content.component';
import { ProfileComponent } from 'src/app/profile';
import { ConnectedComponent } from 'src/app/connected/connected.component';
import { InboxComponent } from 'src/app/pages/inbox/inbox.component';
import {UserListComponent} from 'src/app/user-list';
import { DiscussionComponent } from 'src/app/pages/discussion';
import { TagsComponent } from 'src/app/tags';
// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    IconsComponent,
    MapsComponent,
    FeedComponent,
    ContentComponent,
    ProfileComponent,
    InboxComponent,
    DiscussionComponent,
    TagsComponent,
    UserListComponent
  ]
})

export class AdminLayoutModule {}
