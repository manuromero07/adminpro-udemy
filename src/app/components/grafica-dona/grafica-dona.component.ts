import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styleUrls: ['./grafica-dona.component.css']
})
export class GraficaDonaComponent implements OnInit {

  // Doughnut
  @Input() doughnutChartLabels: string[] = [];
  @Input() doughnutChartData: number[] = [];
  @Input() doughnutChartType: string = '';
  @Input() leyenda: string;
  constructor() { }

  ngOnInit() {
  }

}
