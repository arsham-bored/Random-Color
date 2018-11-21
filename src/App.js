import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './Components/box';
import Buttton from './Components/button';
import {Provider} from 'react-redux';
import store from './store/store';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <div>
            <Box />
            <Buttton />
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
