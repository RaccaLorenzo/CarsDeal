import { Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

export const routes: Routes = [
    {path : '', redirectTo: '/login', pathMatch: 'full'},
    {path : 'login', component: LoginFormComponent},
    {path : 'registration', component: RegistrationFormComponent},
];
