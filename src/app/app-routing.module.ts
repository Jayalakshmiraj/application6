import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HeroesComponent } from './heroes/heroes.component';
import { EmployeesComponent } from './employees/employees.component';
const routes: Routes = [
  {
    path:"employees",
    component:EmployeesComponent
  },
  {
  path:"login",
  component:LoginComponent
},
{path:"heroes",
component:HeroesComponent},
{
  path:"logout",
  component:LogoutComponent
},{
  path:"dashboard",
  component:DashboardComponent

},
{
  path:"home-page",
  component:HomePageComponent
},
{
  path:"",
  redirectTo:"login",
  pathMatch:"full"
  
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
