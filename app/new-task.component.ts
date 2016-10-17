import {Component, Output, EventEmitter} from '@angular/core';
import {Task} from './task.model';

@Component({
  selector: 'new-task',
  template: `
    <h1>New task</h1>
    <div>
      <label>Enter task description:</label>
      <input #newDescription>
    </div>
    <div>
      <label>Enter task ID:</label>
      <input #newId>
      <button (click)="addClicked(newDescription.value, newId.value); newDescription.value=''; newId.value='';">Add</button>
    </div>
  `
})

export class NewTaskComponent {
  @Output() newTaskSender = new EventEmitter();
  addClicked(description: string, id: number) {
    var newTaskToAdd: Task = new Task(description, id);
    this.newTaskSender.emit(newTaskToAdd);
  }
}
