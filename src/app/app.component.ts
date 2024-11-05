// import { Component, OnInit } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { Chart, Legend, plugins, registerables } from 'chart.js';

// Chart.register(...registerables);
// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent implements OnInit{
//   public config: any = {
//     type: 'bar',
//     data: {
//       labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
//       datasets: [{
//         label: 'Weekly Sales',
//         data: [1,2],
//         backgroundColor: [
//           'rgba(255, 26, 104, 0.2)',
//         ],
//         borderColor: [
//           'rgba(255, 26, 104, 1)',
//         ],
//         borderWidth: 1,
//         borderSkipped: true,
//         borderRadius: 5,
//         barPercentage: 1,
//         categoryPercentage: 0.5,
//       }]
//     },
//   options: {
//     indexAxis: 'y',
//     plugins: {
//       legend: {
//         display: true
//       },
//     },
//     maintainAspectRatio: true,
//     scales:{
//       x:{
//         grid:{
//           display: true,
//         },
//         border:{
//           display: true
//         },
//         ticks:{
//           color: "white"
//         }
//       },
//       y:{
//         beginAtZero: true,
//         grid:{
//           display: true,
//           drawBorder: true
//         },
//         border:{
//           display: true
//         },
//         ticks:{
//           display: true,
//         }
//       }
//     },
//   },
//   };
//   chart: any;
//   ngOnInit():void{
//     this.chart = new Chart('MyChart', this.config);
//   }
// }
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Chart, ChartData, ChartOptions, registerables } from 'chart.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatProgressBarModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Remarquez le pluriel pour 'styleUrls'
})
export class AppComponent implements OnInit {
  progressValue = 0;

  constructor() {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.createBarChart();

    // Exemple d'augmentation progressive de la barre de progression
    this.simulateProgress();
  }

  createBarChart(): void {
    const ctx = (document.getElementById('myBarChart') as HTMLCanvasElement)?.getContext('2d');
    if (!ctx) {
      console.error('Impossible de récupérer le contexte du canvas');
      return;
    }

    const data: ChartData<'bar'> = {
      labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai'],
      datasets: [
        {
          label: 'Ventes',
          data: [50, 75, 150, 200, 100],
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
        {
          label: 'Objectifs',
          data: [80, 120, 180, 220, 140],
          backgroundColor: 'rgba(153, 102, 255, 0.6)',
          borderColor: 'rgba(153, 102, 255, 1)',
          borderWidth: 1,
        }
      ]
    };

    const options: ChartOptions<'bar'> = {
      responsive: true,
      scales: {
        x: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Mois'
          }
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Quantité'
          }
        }
      },
      plugins: {
        legend: {
          position: 'top',
        },
        tooltip: {
          enabled: true,
        }
      }
    };

    new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options
    });
  }

  // Simulation de progression pour la barre de progression
  simulateProgress(): void {
    const interval = setInterval(() => {
      if (this.progressValue < 100) {
        this.progressValue += 10;
      } else {
        clearInterval(interval);
      }
    }, 500);
  }
}

