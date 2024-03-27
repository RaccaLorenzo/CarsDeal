import { Component } from '@angular/core'; 
import { RouterOutlet } from '@angular/router'; 
import { NavbarComponent } from "./navbar/navbar.component"; 
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
 
@Component({ 
    selector: 'app-root', 
    standalone: true, 
    templateUrl: './app.component.html', 
    styleUrl: './app.component.css', 
    imports: [
              RouterOutlet,
              NavbarComponent,
              LoginFormComponent,
              RegistrationFormComponent,
              FontAwesomeModule 
            ]
})  
export class AppComponent { 
  title = 'CarsDeal'; 
} 
