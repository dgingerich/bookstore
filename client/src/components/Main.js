import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './home/Home'
import Browse from './browse/Browse'

export const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/browse' component={Browse}></Route>
        </Switch>
    );
}

export default Main;