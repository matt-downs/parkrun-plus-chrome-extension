import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { getAthlete } from 'parkrun-crawler';
import { connect } from 'react-redux'

import { testAction } from '../actions'

let athlete = {test: true};
// async function test() {
//   athlete = await getAthlete('2054291');
//   console.log(athlete);
// }
// test();


const App = ({ dispatch }) => {

  dispatch(testAction());

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <p className="App-intro">
        <code>{JSON.stringify(athlete)}</code>
      </p>
    </div>
  );
}

export default connect()(App)
