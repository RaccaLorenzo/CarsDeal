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

  router : Router;
  constructor(router: Router) {
    this.router = router; // Assign the injected router parameter to the class property.
  }

  redirectRegistrazione(){
    this.router.navigate(['/registration']);
    console.log("Reindirizzamento a registrazione effettuato con successo");
  }
}
