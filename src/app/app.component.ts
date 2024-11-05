import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Chart, Legend, plugins, registerables } from 'chart.js';

Chart.register(...registerables);
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  public config: any = {
    type: 'bar',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [{
        label: 'Weekly Sales',
        data: [1],
        backgroundColor: [
          'rgba(255, 26, 104, 0.2)',
        ],
        borderColor: [
          'rgba(255, 26, 104, 1)',
        ],
        borderWidth: 1,
        borderSkipped: false,
        borderRadius: 5,
        barPercentage: 0.2,
        categoryPercentage: 0.9,
      }]
    },
  options: {
    indexAxis: 'y',
    plugins: {
      legend: {
        display: false
      },
    },
    maintainAspectRatio: false,
    scales:{
      x:{
        grid:{
          display: false,
        },
        border:{
          display: false
        },
        ticks:{
          color: "white"
        }
      },
      y:{
        beginAtZero: true,
        grid:{
          display: false,
          drawBorder: false
        },
        border:{
          display: false
        },
        ticks:{
          display: false,
        }
      }
    },
  },
  };
  chart: any;
  ngOnInit():void{
    this.chart = new Chart('MyChart', this.config);
  }
}

