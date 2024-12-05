import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = [];
  private tasksSubject = new BehaviorSubject<Task[]>(this.tasks);

  tasks$ = this.tasksSubject.asObservable();

  getTasks(): Task[] {
    return this.tasks;
  }

  addTask(name: string): void {
    if (name.trim()) {
      const newTask: Task = {
        id: Date.now(),
        name,
        completed: false,
      };
      this.tasks.push(newTask);
      this.tasksSubject.next(this.tasks); // Notify about task change
    }
  }

  deleteTask(id: number): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    this.tasksSubject.next(this.tasks); // Notify about task change
  }

  toggleTaskCompletion(id: number): void {
    const task = this.tasks.find((task) => task.id === id);
    if (task) {
      task.completed = !task.completed;
      this.tasksSubject.next(this.tasks); // Notify about task change
    }
  }

  getFilteredTasks(filter: string): Task[] {
    switch (filter) {
      case 'completed':
        return this.tasks.filter((task) => task.completed); // Completed tasks
      case 'pending':
        return this.tasks.filter((task) => !task.completed); // Pending tasks
      default:
        return this.tasks; // All tasks
    }
  }
}
