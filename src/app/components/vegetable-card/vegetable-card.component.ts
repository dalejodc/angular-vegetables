import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vegetable-card',
  templateUrl: './vegetable-card.component.html',
  styleUrls: ['./vegetable-card.component.css']
})
export class VegetableCardComponent implements OnInit {

  @Input() name;
  @Input() abstract;
  @Input() image;

  constructor() { }

  ngOnInit() {
  }

}
