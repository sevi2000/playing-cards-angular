import { Routes } from '@angular/router';
import { ToggleMonsterPageComponent } from './pages/toggle-monster-page/toggle-monster-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';

export const routes: Routes = [
  {
	path: '',
	redirectTo: 'home',
	pathMatch: 'full'
},{
	path: 'home',
    component: ToggleMonsterPageComponent
}, {
	path: 'search',
component: SearchPageComponent
}
];
