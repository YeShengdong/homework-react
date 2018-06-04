import React from 'react'
import ReactDOM from 'react-dom'
import Root from 'Root'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import MovieListPage from 'MovieListPage'
import MovieDetailPage from 'MovieDetailPage'
import NotFound from 'NotFound'

import './main.scss'

ReactDOM.render((
    <Root>
        <Router> 
            <Switch>
                <Route exact path="/" component={MovieListPage} />
                <Route path="/film/:id" component={MovieDetailPage} />
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    </Root>
), document.getElementById('root'))
