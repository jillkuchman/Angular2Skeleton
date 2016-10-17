import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>My First Angular 2 App</h1>
    <pies></pies>
    <task-list [childTaskList]="masterTaskList" (clickSender)="showDetails($event)"></task-list>
    <edit-task [childSelectedTask]="selectedTask" (doneClickedSender)="finishedEditing()"></edit-task>
  </div>
  `
})

export class AppComponent {
  public masterTaskList: Task[] = [
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
