import React, {Component} from 'react'
import Chart from 'chart.js'

class LineChart extends Component {
  componentDidMount(){
    this.getData()
  }
  getData = () => {
    fetch('/companies/1')
    .then(response => response.json())
    .then(json => console.log(json))
    .then(jData => this.prepData(jData))
    .then(data => this.createChart(data))
    .catch(err => console.log(err))
  }
  prepData = (apiData) => {
    const chartData ={
      labels: [],
      datasets: [
        {
          label: 'Daily Stock Price',
          data: []
        }
      ]
    }
    apiData.prices.forEach(price => {
      chartData.labels.push(price.id)
      chartData.datasets[0].data.push(prices.price)
    })
    return chartData
  }
  createChart = (chartData) => {
    const ctx = document.querySelector('#stockprices')
    const stockChart = new Chart(ctx, {
      type: 'line',
      data: chartData
    })
  }
  render(){
    return(
      <>
        <h1>Testing</h1>
        <canvas id="stockprices" width="300" height="300"></canvas>
      </>
    )
  }
}

export default LineChart
