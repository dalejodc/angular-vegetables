// This component shows all the vegetables
import { Component, OnInit } from '@angular/core';
import { VegetablesService, Vegetable } from '../../services/vegetables.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vegetables',
  templateUrl: './vegetables.component.html',
  styleUrls: ['./vegetables.component.css'],
  providers: [VegetablesService]
})
export class VegetablesComponent implements OnInit {

  vegetablesList:Vegetable[]=[];

  constructor(
    private _vegetableService:VegetablesService,
    private _router:Router
  ) { }

  ngOnInit() {
  	this.getVegetables();
  }

  getVegetables(){
  	this.vegetablesList= this._vegetableService.getVegetables();
  	// console.log(this.vegetablesList);
  }
}
