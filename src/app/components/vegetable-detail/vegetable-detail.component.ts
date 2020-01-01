/* This component is used to show the information of a specific vegetable.
Additionally shows an array with an aleatory vegetables
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VegetablesService, Vegetable } from '../../services/vegetables.service';

@Component({
	selector: 'app-vegetable-detail',
	templateUrl: './vegetable-detail.component.html',
	styleUrls: ['./vegetable-detail.component.css'],
	providers: [VegetablesService]
})
export class VegetableDetailComponent implements OnInit {

	vegetable:Vegetable;
	listRandom:any[] = [];
	params:number;

	constructor(
		private _activatedRoute: ActivatedRoute,
		private _router: Router,
		private _vegetableService: VegetablesService
	) { 
	}

	ngOnInit() {
		this.getVegetable();
		this.getRandomVegetables();
	}

	getVegetable(){
		this._activatedRoute.params.subscribe(params => {
			this.vegetable = this._vegetableService.getVegetable(params['id']);
		})

	}

	// the ID is sent so that an object with the same ID is not returned 
	getRandomVegetables(id?){
		this._activatedRoute.params.subscribe(params => {
			this.params = params['id'];
			this.listRandom = this._vegetableService.getRandomVegetables(params['id']);
		})
	}

	// Get a vegetable from the random list
	seeVegetable(id){
		this._vegetableService.clearRandomList();
    	this._router.navigate(['/vegetable', id]);
  }

}
