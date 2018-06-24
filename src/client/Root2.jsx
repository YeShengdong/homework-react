import React from 'react'
import { hot } from 'react-hot-loader'
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import Loadable from 'react-loadable'
// import Loader from 'Loader'

// import MovieListPage from 'MovieListPage'
// import MovieDetailPage from 'MovieDetailPage'
// import NotFound from 'NotFound'

// const MovieListPage = Loadable({
//     loader: () => import('MovieListPage'),
//     loading: Loader,
// })

const NotFound = Loadable({
    loader: () => import('./containers/NotFound')
})

const Root = ({
    Router, location, context, store,
}) => (
    <Provider store={store}>
        <Router location={location} context={context}>
            <Switch>
                <Route exact path="/" component={NotFound} />
            </Switch>
        </Router>
    </Provider>
)

Root.defaultProps = {
    location: null,
    context: null,
}

export default Root