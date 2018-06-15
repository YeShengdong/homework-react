import React from 'react'
import ReactDOM from 'react-dom'
import Root from 'Root'
// import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import * as history from 'history'
import MovieListPage from 'MovieListPage'
import MovieDetailPage from 'MovieDetailPage'
import NotFound from 'NotFound'

import './main.scss'

// const hashHistory = history.createHashHistory()

// hashHistory.listen((location) => {
//     console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`)
// })

ReactDOM.render((
    <Router> 
        <Root>      
            <Switch>
                <Route exact path="/" component={MovieListPage} />
                <Route exact path="/search/:text" component={MovieListPage} />
                <Route path="/film/:id" component={MovieDetailPage} />
                <Route path="*" component={NotFound} />
            </Switch>
        </Root>
    </Router>
), document.getElementById('root'))
