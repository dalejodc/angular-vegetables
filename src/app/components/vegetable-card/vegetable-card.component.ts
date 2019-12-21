import { Component, OnInit, Input } from '@angular/core';
import { VegetablesService, Vegetable } from '../../services/vegetables.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vegetable-card',
  templateUrl: './vegetable-card.component.html',
  styleUrls: ['./vegetable-card.component.css']
})
export class VegetableCardComponent implements OnInit {

  @Input() name;
  @Input() abstract;
  @Input() image;

  constructor(
    private _vegetableService:VegetablesService,
    private _router:Router
  ) { }

  ngOnInit() {
    console.log(this.image);
  }

  seeVegetable(id){
    this._router.navigate(['/vegetable', id]);
  }
}
