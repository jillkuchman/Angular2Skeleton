import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>My First Angular 2 App</h1>
  </div>
  `
})

export class AppComponent {
}

export class Task {
  public done: boolean = false;
  constructor(public description: string, public id: number){}
}
