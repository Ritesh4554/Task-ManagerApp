import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  standalone: false,

  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css',
})
export class FilterComponent {
  @Output() filterChanged = new EventEmitter<string>();

  setFilter(filter: string): void {
    console.log(filter);
    this.filterChanged.emit(filter);
  }
}
