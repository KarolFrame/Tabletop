import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environments';

@Injectable({ providedIn: 'root' })
export class ChatService {
  private apiUrl = environment.apiURL + '/chat';

  constructor(private http: HttpClient) {}

  sendMessage(message: string) {
    return this.http.post<{ response: string }>(this.apiUrl, { message });
  }
}
