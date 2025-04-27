import { Routes } from '@angular/router';
import { WorldComponent } from './components/world/world.component';

export const routes: Routes = [
    { path: '', redirectTo: '/world-map', pathMatch: 'full' },
    { path: 'world-map', component: WorldComponent}
];
