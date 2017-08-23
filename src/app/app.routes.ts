import { RouterModule, Routes} from '@angular/router';

// Páginas
import { MainComponent } from './components/index.paginas';

const APP_ROUTES: Routes = [
	{ path: 'home', component: MainComponent }, 
	{ path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });