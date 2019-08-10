import React, {Component} from 'react'
import Chart from 'chart.js'

class LineChart extends Component {
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
