import React, {Component} from 'react'
import Chart from 'chart.js'

class LineChart extends Component {
  componentDidMount(){
    this.getData()
  }
  getData = () => {
    fetch('/companies')
    .then(response => response.json())
    .then(json =>console.log(json))
    .catch(err => console.log(err))
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
