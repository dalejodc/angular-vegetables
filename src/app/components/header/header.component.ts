/*This component is the header of the application*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  scrollDown(){
  	document.getElementById('vegetables').scrollIntoView({behavior: 'smooth'});
  }

}
