import { Component, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import GameDetails from 'src/model/gameDetails';
import { ApiServiceService } from '../../services/api-service.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {

  details: any;

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: ApiServiceService
  ) { }

  ngOnInit() {
    this.service.fetchGameID(this.data?.gameID).subscribe((data) => {
      this.details = data;
    })
  }

  onNoClick() {
    this.dialogRef.close();
  }
}
