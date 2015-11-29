import {AuthService} from 'aurelia-auth';
import {inject} from 'aurelia-framework';

@inject(AuthService)

export class Login {
  constructor(auth, aurelia) {
    this.auth = auth;
    this.aurelia = aurelia;
  }

  login() {
       return this.auth.login(this.user.username, this.user.password)
       .then(response => {
         console.log("Login response: " + response);
         a.setRoot('app', document.body);
       })
       .catch(error => {
         this.loginError = JSON.parse(error.response);
         toastr.error(this.loginError.message);
       });
     }

}
