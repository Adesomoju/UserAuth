import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ReactiveFormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  imports: [SharedModule, ReactiveFormsModule],
  declarations: [SignUpComponent, SignInComponent, ResetPasswordComponent]
})
export class AuthModule { }
