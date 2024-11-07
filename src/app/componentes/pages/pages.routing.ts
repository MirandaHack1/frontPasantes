import { Route } from "@angular/router";
import { RegistrarComponent } from "./registrar/registrar.component"; 
import { LoginComponent } from "./login/login.component";

export const PagesRoutes: Route[] = [
    {
    path    : '',
    children : [
        {
            path : '',
            component : LoginComponent
        },
        {
            path : 'registrar',
            component : RegistrarComponent
        }
    ]
}
];