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
    this.service.fetchAllGames(this.searchString).subscribe((data) => {
      this.games = data;
      console.log(this.games);

    });

    this.searchString = searchString;
  }
}
