// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase : {
    apiKey: 'AIzaSyBKERNA4oK2FEl2145rkJWO1e62ogxtZuU',
    authDomain: 'userauth-com.firebaseapp.com',
    databaseURL: 'https://userauth-com.firebaseio.com',
    projectId: 'userauth-com',
    storageBucket: 'userauth-com.appspot.com',
    messagingSenderId: '1071181748099',
    appId: '1:1071181748099:web:f2a2de61f28dbe26cf08b6'
  }

};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
