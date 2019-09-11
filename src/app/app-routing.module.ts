import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './_layout/admin-layout/admin-layout.component';
import { PageNotFoundComponent } from './_layout/page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UserDynamicFormComponent } from './user-dynamic-form/user-dynamic-form.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'user-dynamic-form', component: UserDynamicFormComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  {
      path: 'admin',
      component: AdminLayoutComponent,
      children: [
      ]
  },
 { path: '', component: LoginComponent },
{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
