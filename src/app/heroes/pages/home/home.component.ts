import { AuthService } from './../../../auth/services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/auth/interfaces/auth.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    .container {
      margin: 10px; 
    }
    `
  ]
})
export class HomeComponent implements OnInit {

  get account() {
    return this.AuthService.accountAuthenticated;
  }

  constructor(private router: Router,
    private AuthService: AuthService) { }

  ngOnInit(): void {

  }

  logout() {
    localStorage.removeItem('id');
    this.router.navigate(['./auth'])
  }


}
