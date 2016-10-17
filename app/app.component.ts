import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>My First Angular 2 App</h1>
    <div *ngFor="let currentTask of tasks">
      <h3>{{currentTask.description}}</h3>
      <button (click)="showDetails(currentTask)">Edit</button>
    </div>
    <div *ngIf="selectedTask">
      <h1>Edit task</h1>
      <div>
      <label>Enter task description:</label>
      <input [(ngModel)]="selectedTask.description">
      </div>
      <div>
      <label>Enter Task ID:</label>
      <input [(ngModel)]="selectedTask.id">
      <button (click)="finishedEditing()">Done</button>
      </div>
    </div>
  </div>
  `
})

export class AppComponent {
  public tasks: Task[] = [
    new Task("Create to do list app", 0),
    new Task("Learn kung fu", 1),
    new Task("Rewatch all the Lord of the Rings movies.", 2),
new Task("Do the laundry.", 3)
  ];
  selectedTask: Task = null;
  showDetails(clickedTask: Task){
    this.selectedTask = clickedTask;
  }
  finishedEditing(){
    this.selectedTask = null;
  }
}

export class Task {
  public done: boolean = false;
  constructor(public description: string, public id: number){}
}
