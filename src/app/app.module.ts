import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApprenantComponent } from './Dashbord_admin/apprenant/apprenant.component';
import { DashbordProfesseurComponent } from './Dashbord_admin/dashbord-professeur/dashbord-professeur.component';
import { DashbordMatiereComponent } from './Dashbord_admin/dashbord-matiere/dashbord-matiere.component';
import { DashbordClasseComponent } from './Dashbord_admin/dashbord-classe/dashbord-classe.component';
import { HeaderUserComponent } from './header-user/header-user.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { UserApprenantComponent } from './Utilisateur/user-apprenant/user-apprenant.component';
import { UserProfesseurComponent } from './Utilisateur/user-professeur/user-professeur.component';

@NgModule({
  declarations: [
    AppComponent,
    ApprenantComponent,
    DashbordProfesseurComponent,
    DashbordMatiereComponent,
    DashbordClasseComponent,
    HeaderUserComponent,
    LoginpageComponent,
    UserApprenantComponent,
    UserProfesseurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
