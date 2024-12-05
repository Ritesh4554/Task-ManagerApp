import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Task } from '../../models/task.model';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent implements OnChanges {
  @Input() currentFilter: string = 'all'; // Add @Input() decorator
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentFilter']) {
      this.tasks = this.taskService.getFilteredTasks(this.currentFilter);
    }
  }

  toggleCompletion(id: number): void {
    this.taskService.toggleTaskCompletion(id);
    this.tasks = this.taskService.getFilteredTasks(this.currentFilter);
  }

  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
    this.tasks = this.taskService.getFilteredTasks(this.currentFilter);
  }
}
