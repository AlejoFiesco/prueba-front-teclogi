import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import Game from 'src/model/game';
import GameDetails from 'src/model/gameDetails';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) {

  }

  createAllGamesEndpoint(title: string) {
    return `https://www.cheapshark.com/api/1.0/games?title=${title}&limit=10`;
  }

  createGameIDEndpoint(id: string) {
    return `https://www.cheapshark.com/api/1.0/games?id=${id}`
  }

  fetchAllGames(lookupTitle: string): Observable<Game[]> {
    return this.http.get<Game[]>(this.createAllGamesEndpoint(lookupTitle));
  }

  fetchGameID(id: string): Observable<GameDetails> {
    return this.http.get<GameDetails>(this.createGameIDEndpoint(id))
  }
}
