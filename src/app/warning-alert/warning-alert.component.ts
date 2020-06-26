import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'warning',
  // templateUrl: './warning-alert.component.html',
  template:`<h3>Warning Alert!</h3>`,
  styles: [
    `
    h3 {
    background-color: red;
    color: white;
    border: 1px solid black;
    padding: 10px 0;
    }
    `
]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
