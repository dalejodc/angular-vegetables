import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { appRoutes } from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { VegetablesComponent } from './components/vegetables/vegetables.component';
import { VegetableDetailComponent } from './components/vegetable-detail/vegetable-detail.component';
import { VegetablesSearchComponent } from './components/vegetables-search/vegetables-search.component';
import { VegetablesListComponent } from './components/vegetables-list/vegetables-list.component';
import { AboutComponent } from './components/about/about.component';
import { VegetableCardComponent } from './components/vegetable-card/vegetable-card.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NavbarComponent,
    VegetablesComponent,
    VegetableDetailComponent,
    VegetablesSearchComponent,
    VegetablesListComponent,
    AboutComponent,
    VegetableCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MaterializeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
