import { Component, OnInit, Input } from '@angular/core';
import { VegetablesService, Vegetable } from '../../services/vegetables.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vegetable-card',
  templateUrl: './vegetable-card.component.html',
  styleUrls: ['./vegetable-card.component.css']
})
export class VegetableCardComponent implements OnInit {

  @Input() vegetable : Vegetable;

  constructor(
    private _vegetableService:VegetablesService,
    private _router:Router
  ) { }

  ngOnInit() {
    console.log(this.vegetable);
  }

  seeVegetable(id) {
    this._router.navigate(['/vegetable', id]);
  }

  truncateText(string) {
    return string.length >  70 ? `${string.substring(0, 70)}...` : string;
  }
}
