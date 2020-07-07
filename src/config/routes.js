import React from 'react'
import { Switch, Route } from 'react-router-dom'

import App from '../App'
import Resume from '../pages/resume'

export default () => (
    <Switch>
        <Route exact path='/' component={ App } />
        <Route path='/resume' render={ Resume }/>
    </Switch>
);