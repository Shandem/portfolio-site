import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Newhome from '../pages/Newhome'


export default (
    <Switch>
        <Route exact path='/' component={ Home }/>
        <Route path='/newhome' component={ Newhome }/>
    </Switch>
);


