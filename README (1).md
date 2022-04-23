# Eden Social Platform 


## File Structure
Within the download you'll find the following directories and files:

```
eden-social-platform
├── CHANGELOG.md
├── README.md
├── angular.json
├── e2e
├── package.json
├── src
│   ├── app
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── app.routing.ts
│   │   ├── components
│   │   │   ├── components.module.spec.ts
│   │   │   ├── components.module.ts
│   │   │   ├── footer
│   │   │   │   ├── footer.component.html
│   │   │   │   ├── footer.component.scss
│   │   │   │   ├── footer.component.spec.ts
│   │   │   │   └── footer.component.ts
│   │   │   ├── navbar
│   │   │   │   ├── navbar.component.html
│   │   │   │   ├── navbar.component.scss
│   │   │   │   ├── navbar.component.spec.ts
│   │   │   │   └── navbar.component.ts
│   │   │   └── sidebar
│   │   │       ├── sidebar.component.html
│   │   │       ├── sidebar.component.scss
│   │   │       ├── sidebar.component.spec.ts
│   │   │       └── sidebar.component.ts
│   │   ├── layouts
│   │   │   ├── admin-layout
│   │   │   │   ├── admin-layout.component.html
│   │   │   │   ├── admin-layout.component.scss
│   │   │   │   ├── admin-layout.component.spec.ts
│   │   │   │   ├── admin-layout.component.ts
│   │   │   │   ├── admin-layout.module.ts
│   │   │   │   └── admin-layout.routing.ts
│   │   │   └── auth-layout
│   │   │       ├── auth-layout.component.html
│   │   │       ├── auth-layout.component.scss
│   │   │       ├── auth-layout.component.spec.ts
│   │   │       ├── auth-layout.component.ts
│   │   │       ├── auth-layout.module.ts
│   │   │       └── auth-layout.routing.ts
│   │   ├── pages
│   │   │   ├── dashboard
│   │   │   │   ├── dashboard.component.html
│   │   │   │   ├── dashboard.component.scss
│   │   │   │   ├── dashboard.component.spec.ts
│   │   │   │   └── dashboard.component.ts
│   │   │   ├── discussion
│   │   │   │   ├── discussion.component.html
│   │   │   │   ├── index.ts
│   │   │   │   └── discussion.component.ts
│   │   │   ├── login
│   │   │   │   ├── login.component.html
│   │   │   │   ├── login.component.scss
│   │   │   │   ├── login.component.spec.ts
│   │   │   │   └── login.component.ts
│   │   │   ├── inbox
│   │   │   │   ├── inbox.component.html
│   │   │   │   ├── index.ts
│   │   │   │   └── inbox.component.ts
│   │   │   ├── feed
│   │   │   │   ├── feed.component.html
│   │   │   │   ├── index.ts
│   │   │   │   └── feed.component.ts
│   │   │   ├── contents
│   │   │   │   ├── contents.component.html
│   │   │   │   ├── index.ts
│   │   │   │   └── contents.component.ts
│   │   │   └── user-profile
│   │   │       ├── user-profile.component.html
│   │   │       ├── user-profile.component.scss
│   │   │       ├── user-profile.component.spec.ts
│   │   │       └── user-profile.component.ts
│   │   └── variables
│   │       └── charts.ts
│   ├── assets
│   │   ├── fonts
│   │   ├── img
│   │   ├── scss
│   │   │   ├── angular-differences
│   │   │   ├── argon.scss
│   │   │   ├── core
│   │   │   └── custom
│   │   └── vendor
│   ├── browserslist
│   ├── environments
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.scss
│   ├── test.ts
│   ├── tsconfig.app.json
│   ├── tsconfig.spec.json
│   └── tslint.json
├── tsconfig.json
└── tslint.json
```


## Demo

| Social Home Page | My Contents Page | Browse Profile Page  | Inbox Page | My Feeds Page | My Network Page  | My Follower / Following | Discussion Page
| --- | --- | ---  | --- | --- | ---  |

## User Stories: Use Case Scenarios

- User Login : Guest User / Registered User 
- My Feeds : Networked Feeds shown to connected users only . Public feeds shown to every one . Shared post are part of feeds. Followers can see post of followed. 
- Activities & Notifications : ANy activity done by user ex Like Comment Share are notified . Connection request send and recieve notifications 
- User Profiles : Short & Full Profiles visible . Public profiles visible to guest user . User can edit self profile , Users Stats can be seen (followers , following , connection , total post made)
- Users can see thier inbox , send messages to each other (only connected user )

## Microservices : Social Platform


8094-socialactivity 
8095-notification
8098-discussion
8097-inbox
8093-user profile & identity 
8092-content 
8090-gui
