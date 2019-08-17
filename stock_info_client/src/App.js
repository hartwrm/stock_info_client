import React, {Component} from 'react';
import Coty from './components/Coty'
import Xerox from './components/Xerox'
import Chipotle from './components/Chipotle'
import Cadence from './components/Cadence'
import Anadarko from './components/Anadarko'
import Total from './components/Total'
import Dentsply from './components/Dentsply'
import Advanced from './components/Advanced'
import Msci from './components/Msci'
import Dish from './components/Dish'
import Nav from './components/Nav'
import './App.css';

class App extends Component {
state = {
  companies: []
}
componentDidMount(){
  this.getCompanies()
}
getCompanies(){
  fetch('http://localhost:3000/companies')
  .then(res => res.json())
  .then(json => this.setState({companies: json}))
  .catch(err => console.log(err))
}
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="container">
        {
          this.state.companies.map(company => {
            return(
            <div key={company.id}>
              <h4>{company.name}</h4>
              <h5>{company.symbol}</h5>
              <p>{company.notes}</p>
            </div>
          )
          })
        }


        <Coty />
        <Xerox />
        <Chipotle />
        <Cadence />
        <Anadarko />
        <Total />
        <Dentsply />
        <Advanced />
        <Msci />
        <Dish />
        </div>
      </div>
    );
  }
}
export default App;
