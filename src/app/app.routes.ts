import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { VisualComponent } from './componentes/visual/visual.component';
import { PagesRoutes } from './componentes/pages/pages.routing';
import { SystemRoutes } from './componentes/system/system.routing'; 
export const routes: Routes = [
    

    {
        path: '',
          children: [{
              path: '',
              loadChildren: () => import('./componentes/pages/pages.routing').then(m => m.PagesRoutes),
          }]
    },
    {
        path: 'system',
        component: VisualComponent,
          children: [{
              path: '',
              loadChildren: () => import('./componentes/system/system.routing').then(m => m.SystemRoutes),
          }]
    },
];
