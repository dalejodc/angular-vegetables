import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VegetablesService, Vegetable } from '../../services/vegetables.service';

@Component({
	selector: 'app-vegetable-detail',
	templateUrl: './vegetable-detail.component.html',
	providers: [VegetablesService]
})
export class VegetableDetailComponent implements OnInit {

	vegetable:Vegetable;

	constructor(
		private _activatedRoute: ActivatedRoute,
		private _vegetableService: VegetablesService
	) { }

	ngOnInit() {
		this.getVegetable();
	}

	getVegetable(){
		this._activatedRoute.params.subscribe(params => {
			// console.log(params['id']);
			this.vegetable = this._vegetableService.getVegetable(params['id']);
			// console.log(this.vegetable);
		})
	}

}
