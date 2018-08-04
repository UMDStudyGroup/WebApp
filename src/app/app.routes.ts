import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { ClassPageComponent } from './class-page/class-page.component'
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { AuthGuardService } from './services/auth/auth-guard.service';


export const appRoutes: Routes = [
    // make urls that require login have " canActivate: [AuthGuardService] "
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'help', component: HelpComponent },
    { path: 'classpage', component: ClassPageComponent },
    { path: '**', component: PageNotFoundComponent }
  ];
