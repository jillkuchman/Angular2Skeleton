import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>My First Angular 2 App</h1>
    <h3 (click)="showDetails(currentTask)" *ngFor="let currentTask of tasks">{{currentTask.description}}</h3>
    <div>
      <h1>Edit task</h1>
      <p>Description: {{selectedTask.description}}</p>
      <p>Task ID: {{selectedTask.id}}</p>
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
  selectedTask: Task = this.tasks[0];
  showDetails(clickedTask: Task){
    this.selectedTask = clickedTask;
  }
}

export class Task {
  public done: boolean = false;
  constructor(public description: string, public id: number){}
}
