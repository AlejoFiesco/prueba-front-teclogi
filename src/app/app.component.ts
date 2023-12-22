import { Component } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';
import Game from 'src/model/game';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  searchString: string = '';
  title = 'prueba-tecnica';
  games: any;

  constructor(private service: ApiServiceService) { }
  search(searchString: string) {
    //Everytime search string changes, fetches data from API and saves it
    this.service.fetchAllGames(this.searchString).subscribe((data) => {
      this.games = data;
    });

    this.searchString = searchString;
  }
}
