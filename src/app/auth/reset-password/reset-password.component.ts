import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/auth.service';
import { SharedModule } from '../../shared/shared.module';
import { AuthModule } from '../auth.module';
import { MaterialModule } from '../../material.module';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css', '../general.css']
})
export class ResetPasswordComponent implements OnInit {
  email: string;

  constructor(
    private auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  resetPassword(email) {
    return this.auth.resetPassword(this.email);
  }

  moveToHome() {
    return setTimeout(() => {
      this.router.navigate(['/']);
    }, 400);
  }

  moveToSignUp() {
    return setTimeout(() => {
      this.router.navigate(['signUp']);
    }, 400);
  }

  moveToSignIn() {
    return setTimeout(() => {
      this.router.navigate(['signIn']);
    }, 400);
  }

}
