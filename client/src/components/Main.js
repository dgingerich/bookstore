import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './home/Home'
import Browse from './browse/Browse'
import Book from './book/Book'

export const Main = () => {

    return (
        <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/browse' component={Browse}></Route>
            <Route exact path='/book/:productID' component={Book}></Route>
        </Switch>
    );
}

export default Main;