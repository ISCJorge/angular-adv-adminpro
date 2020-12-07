import { Component, OnInit } from '@angular/core';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {
  public labels1:Label[] = ['Pan', 'Bebidas', 'Tacos'];
  public labels2:Label[] = ['Pan', 'Bebidas', 'Tacos'];
  public labels3:Label[] = ['Pan', 'Bebidas', 'Tacos'];
  public labels4:Label[] = ['Pan', 'Bebidas', 'Tacos'];
  public data1:MultiDataSet = [[100,200,300]];
  public data2:MultiDataSet = [[150,450,180]];
  public data3:MultiDataSet = [[600,280,254]];
  public data4:MultiDataSet = [[1000,110,120]];

  constructor() { }

  ngOnInit(): void {
  }

}
