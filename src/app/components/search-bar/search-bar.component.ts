import { Component, EventEmitter, Input, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  @Input() search = "Initial";
  @Output() searchChange = new EventEmitter<string>();
  
  searchButtonClicked = output({alias : "submit"});
  searchClick() {
    this.searchButtonClicked.emit()

  }
  updateSearch(value: string) {
    this.searchChange.emit(value);
  }

}
