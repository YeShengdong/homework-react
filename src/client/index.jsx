import React from 'react'
import ReactDOM from 'react-dom'
import Root from 'Root'
// import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Loadable from 'react-loadable';
// import * as history from 'history'
// import MovieListPage from 'MovieListPage'
// import MovieDetailPage from 'MovieDetailPage'
// import NotFound from 'NotFound'
import Loader from 'Loader'

import './main.scss'

// const hashHistory = history.createHashHistory()

// hashHistory.listen((location) => {
//     console.log(`The current URL is ${location.pathname}${location.search}${location.hash}`)
// })

const MovieListPage = Loadable({
    loader: () => import('MovieListPage'),
    loading: Loader,
})

const MovieDetailPage = Loadable({
    loader: () => import('MovieDetailPage'),
    loading: Loader,
})

const NotFound = Loadable({
    loader: () => import('NotFound'),
    loading: Loader,
})

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
