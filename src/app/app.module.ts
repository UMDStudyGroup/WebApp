import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { RouterModule } from '@angular/router';
import { AlertModule } from 'ngx-bootstrap';

import { FormsModule } from '@angular/forms';


import { appRoutes } from './app.routes';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HelpComponent } from './help/help.component';
import { AuthService } from './services/auth/auth.service';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { ClassPageComponent } from './class-page/class-page.component';

import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { CreateStudyGroupComponent } from './create-study-group/create-study-group.component';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    PageNotFoundComponent,
    HelpComponent,
    LoginComponent,
    CreateStudyGroupComponent,
    ClassPageComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    FormsModule,
    AlertModule.forRoot(),
    TypeaheadModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
