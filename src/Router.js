import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/home/home'
import About from './components/about/about'
import Contact from './components/contact/contact'


const Router = () => (
    <Switch>
        <Route exact path="/" component={Home}/>.
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact}/>
    </Switch>
)

export default Router;