import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Newhome from '../pages/Newhome'
import Project0 from '../components/Project0'
import Project1 from '../components/Project1'
import Gaymeit from '../components/Gaymeit'
import Pokeball from '../components/Pokeball'
import Rotom from '../components/Rotom'
import Under from '../components/Under'
import Resume from '../components/Resume'


export default (
    <Switch>
        <Route exact path='/' component={ Newhome }/>
        <Route path='/project1' component={ Project0 }/>
        <Route path='/project2' component={ Project1 }/>
        <Route path='/project3' component={ Gaymeit }/>
        <Route path='/pokeball' component={ Pokeball }/>
        <Route path='/rotom' component={ Rotom }/>
        <Route path='/under' component={ Under }/>
        <Route path='/resume' component={ Resume }/>
    </Switch>
);


