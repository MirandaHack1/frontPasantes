import { Routes } from '@angular/router';
import { RegistrarComponent } from './componentes/registrar/registrar.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { HomeComponent } from './componentes/home/home.component';

export const routes: Routes = [
    
    { path: '', component: LoginComponent },
    { path: 'registrar', component: RegistrarComponent },

    { path: 'home', component: HomeComponent }
];
