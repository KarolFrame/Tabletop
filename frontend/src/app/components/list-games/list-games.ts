import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../../services/games';
import { CommonModule } from '@angular/common';
import { ListGamesCard } from '../list-games-card/list-games-card';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-list-games',
  standalone: true,
  imports: [CommonModule, ListGamesCard, CarouselModule],
  templateUrl: './list-games.html',
  styleUrls: ['./list-games.css'],
})
export class ListGames implements OnInit {
  @Input() listName: string = '';
  @Input() gameList: Game[] = [];
  responsiveOptions: any[] = [];

  ngOnInit() {
    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }
}
