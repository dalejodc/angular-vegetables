import { Component, OnInit } from '@angular/core';
import { VegetablesService, Vegetable } from '../../services/vegetables.service';

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.css'],
  providers: [VegetablesService]
})
export class VegetablesComponent implements OnInit {

  vegetablesList:Vegetable[]=[];

  constructor(private _vegetableService:VegetablesService) { }

  ngOnInit() {
  	this.getVegetables();
  }

  getVegetables(){
  	this.vegetablesList= this._vegetableService.getVegetables();
  	// console.log(this.vegetablesList);
  }

}
