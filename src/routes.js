import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Main from './components/Main'
// import Boots from './components/Boots'
import Boot from './components/Boot'

export default (
    <Switch>
        <Route exact path = '/' component ={Home}/>
        {/* <Route path = '/boots' component = {Boots}/> */}
        <Route path = '/boot/:id' component = {Boot}/>
        <Route path = '/main' component = {Main}/>
    </Switch>
)