import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  searchString: string = '';
  @Output() sendString = new EventEmitter<string>();

  search(searchString: string) {
    //Sends search string to app component
    this.sendString.emit(searchString);
  }
}
