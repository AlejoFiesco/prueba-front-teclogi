import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
  @Output() sendString = new EventEmitter<string>()

  searchString: string = '';

  onInputChange(event: Event) {
    this.searchString = (event.target as HTMLInputElement).value;
    this.sendString.emit(this.searchString);
  }
}
