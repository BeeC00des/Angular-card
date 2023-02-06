import 'zone.js/dist/zone';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CardServiceService } from './cardService.service';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  providers: [CardServiceService],
  templateUrl: './home/home.component.html',
})
export class App implements OnInit {
  name = 'Angular';

  cards: any[];

  constructor(public cardService: CardServiceService) {}

  onGetData() {
    this.cardService.getData().subscribe({
      next: (data) => {
        this.cards = data;
        console.log(data);
      },
      error: (error) => {
        console.error('There was an error!', error);
      },
    });
  }

  ngOnInit() {
    this.onGetData();
  }
}

bootstrapApplication(App);
