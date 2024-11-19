import { Route } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/about/about.component';

export const appRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'destination'
    },
    {
        path: 'destination',
        pathMatch: 'full',
        component: DashboardComponent
    },
    {
        path: 'about',
        pathMatch: 'full',
        component: AboutComponent
    }
];
