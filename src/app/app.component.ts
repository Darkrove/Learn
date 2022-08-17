import { Component, OnInit } from '@angular/core';
import { Cards } from "../assets/data/data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'course-app';
  cards = Cards;
}
