import { Component, Input } from '@angular/core';
import Game from 'src/model/game';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.scss']
})

export class GameCardComponent {
  @Input() game: any

  constructor(public dialog: MatDialog) {

  }

  openDialog(gameID: string) {
    this.dialog.open(DialogComponent, {
      data: {
        gameID: gameID
      }
    })
  }
}
