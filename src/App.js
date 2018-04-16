import React, { Component } from 'react';
import './App.scss';
import Main from './component/Main';
import Header from './component/Header';

import store from './store/index';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div className="App">
        <Header />
        <Main />
      </div>
      </Provider>
    );
  }
}

export default App;
