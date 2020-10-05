import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SignUpComponent } from '../auth/sign-up/sign-up.component';
import { SignInComponent } from '../auth/sign-in/sign-in.component';
import { ResetPasswordComponent } from '../auth/reset-password/reset-password.component';
import { HomeComponent } from '../home/home.component';
import { UsersFeedbackComponent } from '../users-feedback/users-feedback.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'signIn', component: SignInComponent, data: {title: 'Sign In'} },
  { path: 'signUp', component: SignUpComponent, data: {title: 'Sign Up'}},
  { path: 'password-reset', component: ResetPasswordComponent, data: {title: 'Reset Password'}}
];

@NgModule({
  imports: [
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
