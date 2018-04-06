import React, { Component } from 'react';
import './App.scss';
import Main from './component/Main';
import Header from './component/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
