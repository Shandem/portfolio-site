import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Project0 from '../components/Project0'
import Project1 from '../components/Project1'
import Gaymeit from '../components/Gaymeit'
import Pokeball from '../components/Pokeball'
import Rotom from '../components/Rotom'
import Under from '../components/Under'
import Huddle from '../components/Huddle'
import Tetris from '../components/Tetris'
import Mom from '../components/Moms'
import H2 from '../components/header2.0/header2'
import Nasa from '../components/Nasa';
import Reslover from '../components/Reslover';
import Mixellance from '../components/mixellance'



export default (
    
    <Switch>
        <Route exact path='/' />
        <Route path='/project1' component={ Project0 }/>
        <Route path='/project2' component={ Project1 }/>
        <Route path='/project3' component={ Gaymeit }/>
        <Route path='/pokeball' component={ Pokeball }/>
        <Route path='/rotom' component={ Rotom }/>
        <Route path='/under' component={ Under }/>
        <Route path='/resume' component={ Reslover }/>
        <Route path='/huddle' component={ Huddle }/>
        <Route path='/tetris' component={ Tetris }/>
        <Route path='/mom' component={ Mom }/>
        <Route path='/h2'   component={ H2}/>
        <Route path='/nasa' component={ Nasa } />
        <Route path='/mixellance' component={Mixellance}/>
    </Switch>
);


