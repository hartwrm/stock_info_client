import React, {Component} from 'react'
import Chart from 'chart.js'

class Dish extends Component {
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
    const dishData ={
      labels: ["2019_08_01", "2019_08_02", "2019_08_03", "2019_08_04", "2019_08_05","2019_08_06", "2019_08_07", "2019_08_08", "2019_08_09", "2019_08_10", "2019_08_11", "2019_08_12", "2019_08_13", "2019_08_14", "2019_08_15", "2019_08_16", "2019_08_17", "2019_08_18", "2019_08_19", "2019_08_20", "2019_08_21", "2019_08_22", "2019_08_23", "2019_08_24", "2019_08_25", "2019_08_26", "2019_08_27", "2019_08_28", "2019_08_29", "2019_08_30"],
      datasets: [
        {
          label: 'Daily Price',
          data: []
        }
      ]
    }
    apiData.prices.forEach(price => {
      // dishData.labels.push(price.id)
      dishData.datasets[0].data.push(price.value)
    })
    return dishData
  }
  createChart = (dishData) => {
    const ctx = document.querySelector('#dish')
    const stockChart = new Chart(ctx, {
      type: 'line',
      data: dishData
    })
  }
  render(){
    return(
      <>
        <h1>DISH</h1>
        <canvas id="dish" width="150" height="100"></canvas>
      </>
    )
  }
}

export default Dish
