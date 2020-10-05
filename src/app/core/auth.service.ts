import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
// import 'rxjs/add/operator/switchMap';
import { switchMap } from 'rxjs/operators';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

interface User {
  uid?: string;
  email: string;
  photoUrl?: string;
  displayName?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<User>;
  alrt = false;
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {
    // check these url for details
    // https://fireship.io/snippets/check-if-current-user-exists-with-angularfire/
    // https://fireship.io/lessons/angularfire-google-oauth/
    this.user = this.afAuth.authState.pipe(switchMap( user => {
      if (user) {
        return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
      } else {
        return of(null);
      }
    }));
    // tslint:disable-next-line:no-trailing-whitespace

   }
  private updateUserData(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const data: User = {
      // uid : user.uid,
      email : user.email || null,
      // displayName : user.displayName,
      // photoUrl : user.photoUrl
    };
    return userRef.set(Object.assign({}, data, {merge : true}));
    // return userRef.set(user.email);
  }

  emailSignIn(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .then (() =>
    //  alert('You have successfully Signed in'))
    //  console.log ('You have successfully Signed in')
     this._snackBar.open( 'You have successfully Signed in', 'close', {
      duration: 7000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['blue-snackbar']
    })
     )
    .catch(error =>
      //  console.log(error.message)
      this._snackBar.open( error.message, 'close', {
        duration: 7000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        panelClass: ['blue-snackbar']
      })
       );
  }

  emailSignUp(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
    .then ( user => this.updateUserData(user))
    .then (() => console.log('Your account has been created'))
    .then( user => {
      this.afAuth.auth.currentUser.sendEmailVerification()
      .then(() =>
      // console.log('we sent you a mail verification')
      this._snackBar.open('Your account has been created, we have sent you an Email verification', 'close', {
        duration: 7000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        panelClass: ['blue-snackbar']
      })
      )
      .catch(error =>
        //  console.log(error.message)
        this._snackBar.open( error.message, 'close', {
          duration: 7000,
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          panelClass: ['blue-snackbar']
        })
         );
    })
    .catch(error =>
      // console.log(error.message)
      this._snackBar.open( error.message, 'close', {
        duration: 7000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        panelClass: ['blue-snackbar']
      })
    );
  }

  resetPassword(email) {
    return firebase.auth().sendPasswordResetEmail(email)
    .then(() =>
    // console.log('we have sent you a password reset link')
    this._snackBar.open('we have sent you a password reset link', 'close', {
      duration: 7000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      panelClass: ['blue-snackbar']
    })
    )
    .catch(error =>
      // console.log(error.message)
      this._snackBar.open( error.message, 'close', {
        duration: 7000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        panelClass: ['blue-snackbar']
      })
    );
  }

  signOut() {
    return this.afAuth.auth.signOut()
    .then(() => {
      return setTimeout(() => {
        this.router.navigate(['/']);
      }, 400);
    });
  }
}
