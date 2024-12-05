import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  selectedFilter: string = 'all';

  filterChanged(newFilter: string): void {
    this.selectedFilter = newFilter; // Store the selected filter
  }
}
