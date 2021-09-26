import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth-guard.guard';
import { LandingPagesComponent } from './pages/landing-pages/landing-pages.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterFormComponent } from './pages/register-form/register-form.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { ListUserCompanyComponent } from './pages/list-user-company/list-user-company.component';


const routes: Routes = [
  {path:'',component:LandingPagesComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'private',component:UsuarioComponent},
  {
    path: 'register/:type',
    component: RegisterFormComponent
  },
  {
    path: 'list/:name',
    component: ListUserCompanyComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
