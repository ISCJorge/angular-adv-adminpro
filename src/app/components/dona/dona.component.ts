import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {
  @Input() titulo:string = '';

  @Input() doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  @Input() doughnutChartData: MultiDataSet = [
    [350, 450, 100],
  ];
  public doughnutChartType: ChartType = 'doughnut';
  public colors: Color[] = [
    { backgroundColor: ['#6587E6', '#009FEE', '#F02056'] }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
