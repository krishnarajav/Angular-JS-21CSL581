import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exp6',
  templateUrl: './exp6.component.html',
  styleUrls: ['./exp6.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})

export class Exp6Component {
  tasks: string[] = ['Get vegetables', 'Go to gym', 'Complete notes'];
  newTask: string = '';
  editedTask: string = '';
  editingTaskIndex: number | null = null;

  addTask() {
    if (this.newTask.trim() !== '') {
      this.tasks.push(this.newTask);
    }
  }

  editTask(index: number) {
    this.editingTaskIndex = index;
  }

  updateTask() {
    if (this.editingTaskIndex !== null) {
      this.tasks[this.editingTaskIndex] = this.editedTask;
      this.editingTaskIndex = null;
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  cancelEdit() {
    this.editingTaskIndex = null;
  }
}
