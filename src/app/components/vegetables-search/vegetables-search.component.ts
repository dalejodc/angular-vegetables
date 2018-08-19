import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VegetablesService } from '../../services/vegetables.service';

@Component({
	selector: 'app-vegetables-search',
	templateUrl: './vegetables-search.component.html',
	styleUrls: ['./vegetables-search.component.css']
})
export class VegetablesSearchComponent implements OnInit {
	
	listVegetablesFound:any[] = [];
	txt: string;
	
	constructor(
		private _activatedRoute: ActivatedRoute,
		private _vegetableService: VegetablesService	
		) { }

	ngOnInit() {
		this.getVegetables();
	}

	getVegetables(){
		this._activatedRoute.params.subscribe(params=>{
  		// console.log(params);
  		this.txt = params['vegetable'];
  		this.listVegetablesFound =  this._vegetableService.findVegetables(params['vegetable']);

  		console.log(this.listVegetablesFound);
  	});
	}

}
