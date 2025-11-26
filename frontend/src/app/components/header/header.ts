import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SearchInput } from '../search-input/search-input';
import { AppIcon } from '../app-icon/app-icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, SearchInput, AppIcon, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  openSearch: boolean = false;
  closeSearchPanel() {
    this.openSearch = false;
  }
}
