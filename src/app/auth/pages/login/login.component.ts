import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  constructor(private Router: Router,
    private AuthService: AuthService) { }

  login() {
    // Go to backend - confirm user/pass
    // we need a user
    // save the user (service)

    this.AuthService.login().subscribe(resp => {
      console.log(resp);

      if (resp.id) {
        this.Router.navigate(['./heroes']);
      }
    })


  }
}

