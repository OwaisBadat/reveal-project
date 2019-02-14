import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Router from './Router.js'
import Nav from './components/nav/nav'
import Footer from './components/footer/footer'
import Home from './components/home/home'
import Vue from './components/vue/vue'
import Fovean from './components/fovean/fovean'

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <Vue />
        <Fovean />
        <Nav />
      </div>
    );
  }
}

export default App;
