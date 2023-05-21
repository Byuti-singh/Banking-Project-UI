import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title: string;
  designation: string;
 
  constructor() {
    this.title = 'Welcome to Profinch';
    this.designation = 'Please select your Designation:';
  }
}