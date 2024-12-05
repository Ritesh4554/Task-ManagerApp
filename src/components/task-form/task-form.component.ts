import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  standalone: false,

  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css',
})
export class TaskFormComponent {
  taskName: string = '';

  constructor(private taskService: TaskService) {}

  addTask(): void {
    if (this.taskName.trim()) {
      this.taskService.addTask(this.taskName);
      this.taskName = ''; // Clear input field after adding task
    }
  }
}
