import { Component, Input } from '@angular/core';
import Game from 'src/model/game';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  @Input() games: Game[] = []
  //Recieves games from app components

}
