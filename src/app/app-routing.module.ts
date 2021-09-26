import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth-guard.guard';
import { LandingPagesComponent } from './pages/landing-pages/landing-pages.component';
import { LoginComponent } from './pages/login/login.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';

const routes: Routes = [
  {path:'',component:LandingPagesComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'private',component:UsuarioComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
