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

  url : string = 'http://127.0.0.1:3000/';
  router: Router;
  email: string = '';
  
  constructor(router: Router, ) {
    this.router = router; // Assign the injected router parameter to the class property.
  }

  redirectRegistrazione() {
    this.router.navigate(['/registration']);
    console.log("Reindirizzamento a registrazione effettuato con successo");
  }

  login() {
    const _email = (<HTMLInputElement>document.getElementById('txtEmail')).value;
    const _password = (<HTMLInputElement>document.getElementById('txtPassword')).value;
    fetch(`${this.url}login`, {
      method: 'POST',
      body: JSON.stringify({
        email: _email,
        password: _password
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response: any) => {
        console.log('Client: ' + response.data);
      })
      .catch((error: any) => {
        console.error(error);
      });
  };
}
