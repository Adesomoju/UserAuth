import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { SharedModule } from '../../shared/shared.module';
import { AuthModule } from '../auth.module';
import { MaterialModule } from '../../material.module';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css', '../general.css']
})
export class SignInComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  signInForm: FormGroup;

  constructor (
    public fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar
    ) {
      this.signInForm = this.fb.group({
        email: ['', [Validators.email, Validators.required]],
        password: ['', [
          Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
          Validators.minLength(6),
          Validators.maxLength(25)
        ]]
      });
    }

  ngOnInit() {
  }
  get email() {
    return this.signInForm.get('email');
  }
  get password() {
    return this.signInForm.get('password');
  }

  moveToSignUp() {
    return setTimeout(() => {
      this.router.navigate(['signUp']);
    }, 400);
  }
  moveToHome() {
    return setTimeout(() => {
      this.router.navigate(['/']);
    }, 400);
  }

  moveToReset() {
    return setTimeout(() => {
      this.router.navigate(['password-reset']);
    }, 400);
  }

  signIn() {
    return this.auth.emailSignIn(this.email.value, this.password.value);
    // .then(user => {
    //   if (this.signInForm.valid) {
    //     setTimeout(() => {
    //       this.router.navigate(['/']);
    //     }, 4000);
    //     this._snackBar.open('Signed in successfully!!', 'close', {
    //       duration: 2000,
    //       horizontalPosition: this.horizontalPosition,
    //       verticalPosition: this.verticalPosition,
    //       panelClass: ['blue-snackbar']
    //     });
    //       }
    //   });
  }
}
