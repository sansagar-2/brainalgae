import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { ContentComponent } from '../../pages/contents/content.component';
import {TagsComponent} from '../../tags';
import {DiscussionComponent} from '../../pages/discussion';
import {ProfileComponent} from '../../profile';
import {FeedComponent} from '../../pages/feed/feed.component'
import {ConnectedComponent} from 'src/app/connected/connected.component';
import { InboxComponent } from 'src/app/pages/inbox/inbox.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'inbox',          component: InboxComponent },
    { path: 'contents',           component: ContentComponent },
    { path: 'connected',           component: ConnectedComponent },
    { path: 'tags',           component: TagsComponent },
    { path: 'discussion',           component: DiscussionComponent },
    { path: 'feed',           component: FeedComponent  },
    { path: 'profile',           component: ProfileComponent }
];
