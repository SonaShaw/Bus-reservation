import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './CustomerModules/login/login.component';
import { HomeComponent } from './CustomerModules/home/home.component';
import { SignUpComponent } from './CustomerModules/sign-up/sign-up.component';
import { BusListComponent } from './CustomerModules/bus-list/bus-list.component';
import { ProfileComponent } from './CustomerModules/profile/profile.component';
import { AboutComponent} from './Pages/about/about.component';
import { ContactusComponent} from './Pages/contactus/contactus.component';
import {TermsComponent} from './Pages/terms/terms.component';
import {ForgetPasswordComponent} from './CustomerModules/forget-password/forget-password.component';
import { ChangePasswordComponent } from './CustomerModules/change-password/change-password.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login/:email/:password', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'buslist/:from/:to/:traveldate', component: BusListComponent },
  { path: 'profile/:id',component:ProfileComponent},
  {path:'about' ,component:AboutComponent},
  {path:'terms',component:TermsComponent},
  {path:'contactus',component:ContactusComponent},
  {path: 'forgetpassword',component:ForgetPasswordComponent},
  {path: 'changepassword/:email',component: ChangePasswordComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
