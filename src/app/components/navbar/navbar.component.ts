//This component is used to show the navbar, , and lets find a vegetable
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
  	private _router: Router,
  	private _activadedRoute:ActivatedRoute
  	) { }

  ngOnInit() {
  }

  searchVegetable(vegetable:string){
  	this._router.navigate(['/vegetables-search', vegetable]);
  }
}
