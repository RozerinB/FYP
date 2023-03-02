import React , {useEffect, useRef} from 'react'
import Chart from 'chart.js/dist/Chart.js'

export function ScatterChart({data, title, x, y, labels}) {
    const canvasRef = useRef(null);
    useEffect(() => {
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        const scatterChart = new Chart(canvas, {
          type: 'scatter',
          data: {
            datasets: [
              {
                label:title,
                data: data,
                backgroundColor: 'rgba(255, 99, 132, 1)'
              }
            ]
          },
          options: {
            title: {
              display: true,
              text: title,
              fontSize: 18
            },
            scales: {
              xAxes: [{ 
                type: 'linear',
                position: 'bottom',
                scaleLabel: {
                  display: true,
                  labelString: x
                }
              }],
              yAxes: [{
                type: 'category',
                labels: labels,
                ticks: {
                  reverse: true
                },
                scaleLabel: {
                  display: true,
                  labelString: y
                }
              }]
            }
          }
        });
      }
    }, []);
    return <canvas style = {{position: 'relative', height:'30vh', width:'40vw'}}ref={canvasRef} />;
  }

  export function BarChart({data, title, x , y}) {
    const canvasRef = useRef(null);
    useEffect(() => {
      const canvas = canvasRef.current;
      if (canvas) {
        const ctx = canvas.getContext('2d');
        const chart = new Chart(canvas, {
          type: 'bar',
          data: data,
          options: {
            plugins: {
              colors: {
                forceOverride: true
              }
            },
            title: {
              display: true,
              text: title,
              fontSize: 18
            },
            legend: {
              display: true,
              position: 'bottom',
              labels: {
                fontColor: '#333',
                fontSize: 14
              }
            },
            scales: {
              xAxes: [{
                ticks: {
                  fontColor: '#333',
                  fontSize: 14,
                  beginAtZero: true
                },
                scaleLabel: {
                  display: true,
                  labelString: x,
                  fontColor: '#333',
                  fontSize: 16
                }
              }],
              yAxes: [{
                stacked: false,
                ticks: {
                  fontColor: '#333',
                  fontSize: 14,
                  beginAtZero: true
                },
                scaleLabel: {
                  display: true,
                  labelString: y,
                  fontColor: '#333',
                  fontSize: 16
                }
              }]
            }
          }
        });
      }
    }, []);
    return <canvas style = {{position: 'relative', height:'25vh', width:'30vw'}}ref={canvasRef} />;
  }