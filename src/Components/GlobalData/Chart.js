import React , {useEffect, useState, useRef} from 'react'
import Chart from 'chart.js/dist/Chart.js'
import {languages } from '../ParticipantSurvey/Questions';

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
                backgroundColor: 'rgba(54, 162, 235, 1)'
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
                position: 'bottom',
                scaleLabel: {
                  display: true,
                  labelString:  x
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
    return <canvas style = {{position: 'relative', width:"300" , height:"300"}}ref={canvasRef} />;
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
    return <canvas style = {{position: 'relative' , width:"300" , height:"300"}}ref={canvasRef} />;
  }

export function DesignPrinciplesPieChart({ data, title }){
    const [chartData, setChartData] = useState({});

    useEffect(() => {
      const count1s = () => {
        const counts = {};
        data.forEach((item) => {
          Object.keys(item.design_principles).forEach((key) => {
            if (item.design_principles[key] === 1) {
              if (counts[key]) {
                counts[key] += 1;
              } else {
                counts[key] = 1;
              }
            }
          });
        });
        return counts;
      };

      const chart = () => {
        const counts = count1s();
        setChartData({
          labels: [
            'Principle 1',
            'Principle 2',
            'Principle 3',
            'Principle 4',
            'Principle 5',
            'Principle 6',
            'Principle 7',
          ],
          datasets: [
            {
              label: 'Design Principles',
              data: [
                counts.principle1 || 0,
                counts.principle2 || 0,
                counts.principle3 || 0,
                counts.principle4 || 0,
                counts.principle5 || 0,
                counts.principle6 || 0,
                counts.principle7 || 0,
              ],
              backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(189, 195, 199, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 148, 112, 0.2)',
              ],
            },
          ],
        });
      };
      chart();
    }, [data]);
  
    const canvasRef = useRef(null);
  
    useEffect(() => {
      const ctx = canvasRef.current.getContext('2d');
      const chart = new Chart(ctx, {
        type: 'pie',
        data: chartData,
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
        
          }
      });
    }, [chartData]);
  
    return <canvas style={{ position: 'relative',  width:"200" , height:"200" }} ref={canvasRef} />;
  };


export function DoughnutChart({ data, title }) {
    const canvasRef = useRef(null);
  
    useEffect(() => {
      const ctx = canvasRef.current.getContext('2d');
      const chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          datasets: [{
            data: [data.elementYesCount || 0 , data.elementNoCount || 0],
            backgroundColor: [
              'rgba(75, 192, 192, 0.2)',
              'rgba(255, 99, 132, 0.2)',
            ],
          }],
          labels: ['Yes', 'No'],
        },
        options: {
          plugins: {
            colors: {
              forceOverride: true,
            },
          },
          title: {
            display: true,
            text: title,
            fontSize: 18,
          },
        },
      });
    }, []);
  
    return <canvas style={{ position: 'relative', width: "300", height: "300" }} ref={canvasRef} />;
  }
  
export function HorizontalBarChart({data, element, title, countryArray}) {
    // Extract language and country data from input
    const languagesInElement = data.map(d => d[element]);
    const countries = data.map(d => d.country);

    // Get unique language and country values
    const uniqueLanguages = [...new Set(languagesInElement)];
    const uniqueCountries = [...new Set(countries)];

    // Initialize data object with zeros for each language
    const dataObject = {};
    uniqueLanguages.forEach(lang => {
        dataObject[lang] = new Array(uniqueCountries.length).fill(0);
    });

    const countryLabelsMap = uniqueCountries.map(c => c);
    const chartCountryLabel = countryArray.filter(country => countryLabelsMap.includes(country.value)).map(country => country.label);

    // Fill in data for each language and country
    data.forEach(d => {
        const langIndex = uniqueLanguages.indexOf(d[element]);
        const countryIndex = uniqueCountries.indexOf(d.country);
        dataObject[d[element]][countryIndex]++;
    });

    // Generate datasets array dynamically
    const baseColor = "rgba(54, 162, 235, 1)";
    const colorCount = Object.keys(dataObject).length;
    const datasets = Object.keys(dataObject).map((lang, index) => {
    // Find the language label from the languages array
    const langObject = languages.find(l => l.value === lang);
    const langLabel = langObject ? langObject.label : lang;
    const color = Chart.helpers.color(baseColor).lighten(index / colorCount).rgbString();
    return {
        label: langLabel,
        data: dataObject[lang],
        backgroundColor: color,
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1
    }
});

    // Initialize chart
    const canvasRef = useRef(null);
  
    useEffect(() => {
      const ctx = canvasRef.current.getContext('2d');
      const chart = new Chart(ctx, {
        type: "horizontalBar",
        data: {
            labels: chartCountryLabel,
            datasets: datasets
        },
        options: {
          scales: {
            xAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        },
        title: {
          display: true,
          text: title,
          fontSize: 18,
        },
        }
    });
  }, []);
    return <canvas style={{ position: 'relative', width: "300", height: "300" }} ref={canvasRef} />;
  }