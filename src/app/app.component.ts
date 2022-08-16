import { Component, OnInit } from '@angular/core';
import { Cards } from "./data/data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'course-app';
  cards = Cards;
  constructor() { }
  ngOnInit() {

  }
}
