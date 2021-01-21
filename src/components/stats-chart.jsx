import React, {useEffect, useRef} from 'react';
import Chart from 'chart.js';

const StatsChart = ({data, labels, chartName}) => {
  useEffect(() => {
    new Chart(document.querySelector(`#${chartName}`), {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            label: 'people',
            data,
            backgroundColor: [
              'rgba(54, 162, 235, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 206, 86, 1)',
            ],
            borderColor: [
              'rgba(54, 162, 235, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    });
  }, []);
  return <canvas id={chartName}></canvas>;
};

export default StatsChart;
