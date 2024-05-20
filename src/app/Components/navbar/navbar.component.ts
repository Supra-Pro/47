import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(private servives: AuthService){}

  logout() {
    this.servives.logout();
    console.log('logged out');
  }

}
