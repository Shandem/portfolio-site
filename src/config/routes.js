import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Newhome from '../pages/Newhome'
import Project0 from '../components/Project0'
import Project1 from '../components/Project1'
import Gaymeit from '../components/Gaymeit'


export default (
    <Switch>
        <Route exact path='/' component={ Home }/>
        <Route path='/newhome' component={ Newhome }/>
        <Route path='/project1' component={ Project0 }/>
        <Route path='/project2' component={ Project1 }/>
        <Route path='/project3' component={ Gaymeit }/>
    </Switch>
);


