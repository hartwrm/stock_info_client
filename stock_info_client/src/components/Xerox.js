import React, {Component} from 'react'
import Chart from 'chart.js'

class Xerox extends Component {
  componentDidMount(){
    this.getData()
  }
  getData = () => {
    fetch('/companies/2')
    .then(response => response.json())
    .then(jData => this.prepData(jData))
    .then(data => this.createChart(data))
    .catch(err => console.log(err))
  }
  prepData = (apiData) => {
    const xrxData ={
      labels: [],
      datasets: [
        {
          label: 'Daily Price',
          data: []
        }
      ]
    }
    apiData.prices.forEach(price => {
      xrxData.labels.push(price.id)
      xrxData.datasets[0].data.push(price.value)
    })
    return xrxData
  }
  createChart = (xrxData) => {
    const ctx = document.querySelector('#xerox')
    const stockChart = new Chart(ctx, {
      type: 'line',
      data: xrxData
    })
  }
  render(){
    return(
      <>
        <h1>Xerox</h1>
        <canvas id="xerox" width="150" height="100"></canvas>
      </>
    )
  }
}

export default Xerox
