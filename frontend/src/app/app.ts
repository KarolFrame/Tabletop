import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListGames } from './components/list-games/list-games';
import { Header } from './components/header/header';
import { Chat } from './components/chat/chat';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Chat],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('frontend');
}
