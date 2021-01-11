import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './CustomerModules/home/home.component';
import { LoginComponent } from './CustomerModules/login/login.component';
import { SignUpComponent } from './CustomerModules/sign-up/sign-up.component';
import { BusListComponent } from './CustomerModules/bus-list/bus-list.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './CustomerModules/profile/profile.component';
import { AboutComponent } from './Pages/about/about.component';
import { ContactusComponent } from './Pages/contactus/contactus.component';
import { TermsComponent } from './Pages/terms/terms.component';
import { ForgetPasswordComponent } from './CustomerModules/forget-password/forget-password.component';
import { ChangePasswordComponent } from './CustomerModules/change-password/change-password.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    BusListComponent,
    ProfileComponent,
    AboutComponent,
    ContactusComponent,
    TermsComponent,
    ForgetPasswordComponent,
    ChangePasswordComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
