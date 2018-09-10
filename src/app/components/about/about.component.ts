/*This component is used to show the info of the application*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  code:string = '</>';

  constructor() { }

  ngOnInit() {
  }

}
