import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import books from './data/Books';
import {observer} from 'mobx-react';

@observer
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <h1>{books.someInfo}</h1>
      </div>
    );
  }
}

export default App;
