import { Component, OnInit } from '@angular/core';
import { Cards } from "../../assets/data/data";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cards = Cards;
  constructor() { }

  ngOnInit(): void {
  }

}
