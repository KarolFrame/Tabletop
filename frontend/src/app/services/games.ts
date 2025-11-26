import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environments';

export interface Game {
  id: number;
  name: string;
  genre?: string;
  platform?: string;
  publisher?: string;
  developer?: string;
  release_date?: string;
  game_url?: string;
  description?: string;
  image_url?: string;
  rank?: number;
  tags?: string;
  bggrating?: number;
}

@Injectable({
  providedIn: 'root',
})
export class GamesServiceTop5 {
  private apiUrl = `${environment.apiURL}/api/top5`;

  constructor(private http: HttpClient) {}

  listGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.apiUrl);
  }
}

@Injectable({
  providedIn: 'root',
})
export class GamesServiceLatest5 {
  private apiUrl = `${environment.apiURL}/api/latest5`;

  constructor(private http: HttpClient) {}

  listGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.apiUrl);
  }
}

@Injectable({
  providedIn: 'root',
})
export class GamesServiceTrending {
  private apiUrl = `${environment.apiURL}/api/trending`;

  constructor(private http: HttpClient) {}

  listGames(): Observable<Game[]> {
    return this.http.get<Game[]>(this.apiUrl);
  }
}

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private apiUrl = `${environment.apiURL}/api/games`;

  constructor(private http: HttpClient) {}
  getGameDetails(id: number): Observable<Game> {
    return this.http.get<Game>(`${this.apiUrl}/${id}`);
  }
  getRelatedGames(id: number): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.apiUrl}/${id}/related`);
  }
}
