import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.scss'],
})
export class ConsultComponent implements OnInit {
  showCards: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  displayResults(event: boolean): void {
    this.showCards = event;
  }
}
