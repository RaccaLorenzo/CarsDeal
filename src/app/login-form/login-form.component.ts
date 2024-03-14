import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  url : string = 'http://10.0.100.153:3000/';
  router: Router;
  pwd: string = '';
  constructor(router: Router, ) {
    this.router = router; // Assign the injected router parameter to the class property.
  }

  redirectRegistrazione() {
    this.router.navigate(['/registration']);
    console.log("Reindirizzamento a registrazione effettuato con successo");
  }

  login() {
    fetch(`${this.url}login`, {
      method: 'POST',
      body: JSON.stringify({
        email: ``,
        password: ``
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response: any) => {
        console.log(response.data);
      })
      .catch((error: any) => {
        console.error(error);
      });
  };
}
