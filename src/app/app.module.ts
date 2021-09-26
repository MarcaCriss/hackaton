import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from './../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListUserCompanyComponent } from './pages/list-user-company/list-user-company.component';
import { MaterialModule } from './pages/material/material/material.module';
import { DialogComponent } from './pages/dialog/dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { LandingPagesComponent } from './pages/landing-pages/landing-pages.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { RegisterFormComponent } from './pages/register-form/register-form.component';



@NgModule({
  declarations: [
    AppComponent,
    ListUserCompanyComponent,
    DialogComponent,
    LoginComponent,
    UsuarioComponent,
    LandingPagesComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
    MaterialModule,
    AngularFirestoreModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
