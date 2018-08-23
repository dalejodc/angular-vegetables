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

	constructor(
		private _activatedRoute: ActivatedRoute,
		private _router: Router,
		private _vegetableService: VegetablesService
	) { }

	ngOnInit() {
		this.getVegetable();
		this.getRandomVegetables();
	}

	getVegetable(){
		this._activatedRoute.params.subscribe(params => {
			this.vegetable = this._vegetableService.getVegetable(params['id']);
		})
	}

	getRandomVegetables(){
		this._activatedRoute.params.subscribe(params => {
			this.listRandom = this._vegetableService.getRandomVegetables(params['id']);
			console.log(this.listRandom);
		})
	}

	seeVegetable(id){
    this._router.navigate(['/vegetable', id]);
  }

}
