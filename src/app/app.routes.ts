import { Routes, RouterModule} from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { VegetableDetailComponent } from './components/vegetable-detail/vegetable-detail.component';
import { VegetablesSearchComponent } from './components/vegetables-search/vegetables-search.component';

const APP_ROUTES: Routes = [
	{path: 'home', component: HomeComponent}, 

	{path: 'vegetable/:id', component: VegetableDetailComponent},
	{path: 'vegetables-search/:vegetable', component: VegetablesSearchComponent},  
	
	{ path: '**', pathMatch: 'full', redirectTo: 'home'} 
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);