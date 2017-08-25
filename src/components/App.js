import React, { Component } from 'react';

import AddDevForm from './AddDevForm';
import DevList from './DevList';
import GeneratePairs from './GeneratePairs';
import PairList from './PairList';

import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddDevForm />
        <DevList />
        <GeneratePairs />
        <PairList />
      </div>
    );
  }
}

export default App;
