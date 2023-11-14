import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HeaderDasboardComponent } from './Dashbord_admin/header-dasboard/header-dasboard.component';
import { DashbordStatistiqueComponent } from './Dashbord_admin/dashbord-statistique/dashbord-statistique.component';


const routes: Routes = [
  { path: '', component: LoginpageComponent },
  // { path: 'login', component: LoginpageComponent },
  { path: 'administration/statistique/:id', component: DashbordStatistiqueComponent },
  { path: 'professeur/:id', component: DashbordStatistiqueComponent }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
