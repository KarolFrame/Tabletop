import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GameServiceSearch } from '../../services/game.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { GameStateService } from '../../services/game-state.service';
import Fuse from 'fuse.js';
@Component({
  selector: 'app-search-input',
  imports: [FormsModule, CommonModule],
  templateUrl: './search-input.html',
  styleUrl: './search-input.css',
})
export class SearchInput implements OnInit {
  filters = {
    title: '',
    genre: '',
    platform: '',
    tags: [] as string[],
  };

  tagsInput = '';
  games: any[] = [];

  genres: string[] = [];
  platforms = ['PC', 'Browser', 'WebGL'];

  constructor(
    private gameService: GameServiceSearch,
    private gameState: GameStateService,
    private router: Router,
    private filtersService: GameServiceSearch
  ) {}

  @Output() submitSearch = new EventEmitter<void>();

  ngOnInit() {
    this.filtersService.getGenres().subscribe((g) => {
      this.genres = g;
    });
  }

  _scroolToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  _resetInputs = () => {
    this.filters = {
      title: '',
      genre: '',
      platform: '',
      tags: [],
    };
    this.tagsInput = '';
  };

  _search() {
    this.filters.tags = this.tagsInput
      .split(',')
      .map((t) => t.trim())
      .filter((t) => t.length > 0);
    const titleQuery = this.filters.title.trim();

    this.gameService.searchGames(this.filters).subscribe((res) => {
      const fuse = new Fuse(res, {
        keys: ['name'],
        threshold: 0.3,
        ignoreLocation: true,
        minMatchCharLength: 2,
      });

      let finalResults = res;

      if (titleQuery.length > 0) {
        const fuzzy = fuse.search(titleQuery);
        finalResults = fuzzy.map((f) => f.item);
      }

      this.gameState.setResults(finalResults);

      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/results']);
      });

      this._scroolToTop();
      this._resetInputs();
      this.submitSearch.emit();
    });
  }
}
