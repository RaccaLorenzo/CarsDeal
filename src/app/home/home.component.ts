import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  router : Router;
  constructor(router: Router) {
    this.router = router; // Assign the injected router parameter to the class property.
  }

  redirectRicerca(){
    this.router.navigate(['/ricerca']);
    console.log("Reindirizzamento a ricerca effettuato con successo");
  }
}
