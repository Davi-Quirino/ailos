import { Component, OnInit } from '@angular/core';
import { ProfileModel } from 'src/app/models/profile.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  profile: ProfileModel = new ProfileModel('', 0, 0, false);

  constructor() {}

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(): void {
    this.profile = new ProfileModel(
      'Mariana de Souza Oliveira',
      557932 - 4,
      778461 - 8,
      true
    );
  }

  getStatus(): string {
    if (this.profile.status) return 'Regular';
    return 'Irregular';
  }
}
