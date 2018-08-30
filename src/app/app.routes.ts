import { Routes, RouterModule} from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { VegetableDetailComponent } from './components/vegetable-detail/vegetable-detail.component';
import { VegetablesListComponent } from './components/vegetables-list/vegetables-list.component';
import { VegetablesSearchComponent } from './components/vegetables-search/vegetables-search.component';
import { AboutComponent } from './components/about/about.component';

const APP_ROUTES: Routes = [
	{path: 'home', component: HomeComponent}, 

	{path: 'vegetables-list', component: VegetablesListComponent},
	{path: 'vegetable/:id', component: VegetableDetailComponent},
	{path: 'vegetables-search/:vegetable', component: VegetablesSearchComponent},  
	{path: 'about', component: AboutComponent},
	
	{ path: '**', pathMatch: 'full', redirectTo: 'home'} 
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);