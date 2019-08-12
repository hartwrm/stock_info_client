import React, {Component} from 'react'
import Chart from 'chart.js'

class Chipotle extends Component {
  componentDidMount(){
    this.getData()
  }
  getData = () => {
    fetch('/companies/3')
    .then(response => response.json())
    .then(jData => this.prepData(jData))
    .then(data => this.createChart(data))
    .catch(err => console.log(err))
  }
  prepData = (apiData) => {
    const cmgData ={
      labels: [],
      datasets: [
        {
          label: 'Daily Price',
          data: []
        }
      ]
    }
    apiData.prices.forEach(price => {
      cmgData.labels.push(price.id)
      cmgData.datasets[0].data.push(price.value)
    })
    return cmgData
  }
  createChart = (cmgData) => {
    const ctx = document.querySelector('#Chipotle')
    const stockChart = new Chart(ctx, {
      type: 'line',
      data: cmgData
    })
  }
  render(){
    return(
      <>
        <h1>Chipotle</h1>
        <canvas id="Chipotle" width="150" height="100"></canvas>
      </>
    )
  }
}

export default Chipotle
