import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HeaderDasboardComponent } from './Dashbord_admin/header-dasboard/header-dasboard.component';
import { DashbordStatistiqueComponent } from './Dashbord_admin/dashbord-statistique/dashbord-statistique.component';
import { DashbordClasseComponent } from './Dashbord_admin/dashbord-classe/dashbord-classe.component';


const routes: Routes = [
  { path: '', component:  LoginpageComponent},
  { path: 'administration/statistique/:id', component: DashbordStatistiqueComponent },
  { path: 'professeur/:id', component: DashbordStatistiqueComponent },

   // Route mène vers la page contact 
   {path: 'dashbord-class', component: DashbordClasseComponent}
  





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
