import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: [ './progress.component.css' ]
})
export class ProgressComponent {

  progresos1:number = 25;
  progresos2:number = 35;

  get getProgreso1() {
    return `${this.progresos1}%`;
  }

  get getProgreso2() {
    return `${this.progresos2}%`;
  }

}
