import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Router from './Router.js'
import Nav from './components/nav/nav'
import Footer from './components/footer/footer'

class App extends Component {
  render() {
    return (
      <div>
        <Nav />

      </div>
    );
  }
}

export default App;
