import React, {Component} from 'react';
import Coty from './components/Coty'
import Xerox from './components/Xerox'
import Chipotle from './components/Chipotle'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Coty />
        <Xerox />
        <Chipotle />
      </div>
    );
  }
}
export default App;
