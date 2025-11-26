import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environments';

@Injectable({ providedIn: 'root' })
export class ReviewService {
  private apiUrl = environment.apiURL + '/review';

  constructor(private http: HttpClient) {}

  getReview(gameId: number) {
    return this.http.post<{ response: string }>(this.apiUrl, { game_id: gameId });
  }
}
