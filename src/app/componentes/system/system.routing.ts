import { Route } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CuentasComponent } from "./cuentas/cuentas.component";
import { CuentasModalComponent } from "./cuentas/cuentas-modal/cuentas-modal.component";
import { ClaveCuentasComponent } from "./cuentas/clave-cuentas/clave-cuentas.component";
import { InfoPersonalComponent } from "./info-personal/info-personal.component";
export const SystemRoutes: Route[] = [
    {
        path    : '',
        children : [
            {
                path : '',
                component : HomeComponent
            },
            {
                path : 'cuentasRegistros',
                component : CuentasComponent
            },
            {
                path : 'cuentasmodalRegistros',
                component : CuentasModalComponent
            },
            {
                path : 'claveCuentas',
                component : ClaveCuentasComponent
            },
            {
                path : 'infoPersonal',
                component : InfoPersonalComponent
            },
           
        ]

    }
]