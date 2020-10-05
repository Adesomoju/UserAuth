import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { SharedModule } from '../../shared/shared.module';
import { AuthModule } from '../auth.module';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css', '../general.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor (
    public fb: FormBuilder,
    private auth: AuthService,
    private _snackBar: MatSnackBar,
    private router: Router
    ) {
      this.signUpForm = this.fb.group({
        email: ['', [Validators.email, Validators.required]],
        verifbox: ['', [Validators.required]],
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
    return this.signUpForm.get('email');
  }
  get verifbox() {
    return this.signUpForm.get('verifbox');
  }
  get password() {
    return this.signUpForm.get('password');
  }

  moveToSignIn() {
    return setTimeout(() => {
      this.router.navigate(['signIn']);
    }, 400);
  }
  moveToHome() {
    return setTimeout(() => {
      this.router.navigate(['/']);
    }, 400);
  }

  signUp() {
    return this.auth.emailSignUp(this.email.value, this.password.value);
    // .then(user => {
    //   if (this.signUpForm.valid) {
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
    // });
  }

}
