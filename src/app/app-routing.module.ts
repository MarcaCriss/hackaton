import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserCompanyComponent } from './pages/list-user-company/list-user-company.component';

const routes: Routes = [
  {
    path: 'list/:name',
    component: ListUserCompanyComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
