import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  router: Router;
  constructor(router: Router) {
    this.router = router; // Assign the injected router parameter to the class property.
  }
  redirectLogin() {
  this.router.navigate(['/login']);
  console.log('redirectLogin');
  }
  redirectHome() {
    this.router.navigate(['']);
    console.log('redirectHome');
    }
}




