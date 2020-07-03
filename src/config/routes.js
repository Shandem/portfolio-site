import React from 'react'
import { Switch, Route } from 'react-router-dom'

import App from '../App'
import Resume from '../components/Resume'

export default () => (
    <Switch>
        <Route exact path='/' component={ App } />
        <Route path='/resume' component={ Resume }/>
        
    </Switch>
)