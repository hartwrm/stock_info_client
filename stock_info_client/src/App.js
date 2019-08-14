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
import CreateAccount from './components/CreateAccount'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav />
        <CreateAccount />
        <div className="container">
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
