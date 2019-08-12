import React, {Component} from 'react'
import Chart from 'chart.js'

class Coty extends Component {
  componentDidMount(){
    this.getData()
  }
  getData = () => {
    fetch('/companies/1')
    .then(response => response.json())
    .then(jData => this.prepData(jData))
    .then(data => this.createChart(data))
    .catch(err => console.log(err))
  }
  prepData = (apiData) => {
    const chartData ={
      labels: [],
      datasets: [
        {
          label: 'Daily Price',
          data: []
        }
      ]
    }
    apiData.prices.forEach(price => {
      chartData.labels.push(price.id)
      chartData.datasets[0].data.push(price.value)
    })
    return chartData
  }
  createChart = (chartData) => {
    const ctx = document.querySelector('#coty')
    const stockChart = new Chart(ctx, {
      type: 'line',
      data: chartData
    })
  }
  render(){
    return(
      <>
        <h1>Coty Inc</h1>
        <canvas id="coty" width="150" height="100"></canvas>
      </>
    )
  }
}

export default Coty
