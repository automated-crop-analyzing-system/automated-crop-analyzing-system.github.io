const colors = {
    purple: {
      default: "rgba(149, 76, 233, 1)",
      half: "rgba(149, 76, 233, 0.5)",
      quarter: "rgba(149, 76, 233, 0.25)",
      zero: "rgba(149, 76, 233, 0)"
    },
    indigo: {
      default: "rgba(80, 102, 120, 1)",
      quarter: "rgba(80, 102, 120, 0.25)"
    }
  };
  
  const weight = [60.0, 60.2, 59.1, 61.4, 59.9, 60.2, 59.8, 58.6, 59.6, 59.2];
  
  const labels = [
    "Week 1",
    "Week 2",
    "Week 3",
    "Week 4",
    "Week 5",
    "Week 6",
    "Week 7",
    "Week 8",
    "Week 9",
    "Week 10"
  ];
  
  const ctx = document.getElementById("canvas").getContext("2d");
  ctx.canvas.height = 100;
  
  gradient = ctx.createLinearGradient(0, 25, 0, 300);
  gradient.addColorStop(0, colors.purple.half);
  gradient.addColorStop(0.35, colors.purple.quarter);
  gradient.addColorStop(1, colors.purple.zero);
  
  const options = {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          fill: true,
          backgroundColor: gradient,
          pointBackgroundColor: colors.purple.default,
          borderColor: colors.purple.default,
          data: weight,
          lineTension: 0.2,
          borderWidth: 2,
          pointRadius: 3
        }
      ]
    },
    options: {
      layout: {
        padding: 10
      },
      responsive: true,
      legend: {
        display: false
      },
  
      scales: {
        xAxes: [
          {
            gridLines: {
              display: false
            },
            ticks: {
              padding: 10,
              autoSkip: false,
              maxRotation: 15,
              minRotation: 15
            }
          }
        ],
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Weight in KG",
              padding: 10
            },
            gridLines: {
              display: true,
              color: colors.indigo.quarter
            },
            ticks: {
              beginAtZero: false,
              max: 63,
              min: 57,
              padding: 10
            }
          }
        ]
      }
    }
  };
  
  window.onload = function () {
    window.myLine = new Chart(ctx, options);
    Chart.defaults.global.defaultFontColor = colors.indigo.default;
    Chart.defaults.global.defaultFontFamily = "Fira Sans";
  };