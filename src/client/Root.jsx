import React from 'react'
import { hot } from 'react-hot-loader'
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import Loadable from 'react-loadable'
import Loader from 'Loader'

// import MovieListPage from 'MovieListPage'
// import MovieDetailPage from 'MovieDetailPage'
// import NotFound from 'NotFound'

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

const Root = ({
    Router, location, context, store,
}) => (
    <Router location={location} context={context}>
        <Provider store={store}>
            <Switch>
                <Route exact path="/" component={MovieListPage} />
                <Route exact path="/search/:text" component={MovieListPage} />
                <Route path="/film/:id" component={MovieDetailPage} />
                <Route path="*" component={NotFound} />
            </Switch>
        </Provider>
    </Router>
)

Root.defaultProps = {
    location: null,
    context: null,
}

export default Root