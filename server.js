import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Loadable from 'react-loadable'
import { getBundles } from 'react-loadable/webpack'
import stats from './dist/react-loadable.json'
import Root from './src/client/Root'
import configureStore from './src/client/store'

const express = require('express')
const app = express()
const path = require('path')
const serverRenderer = require('./dist/serverRenderer').default

app.use(express.static('dist'))
app.use('/static', express.static('static'))
app.use('/test-report', express.static('jest/coverage/lcov-report'))
//app.get('/', (req, res) => res.send('Hello World'))
// app.use((req, res) => {
//     const pa = path.resolve(__dirname, '../../dist/index.html')
//     console.log('pa', pa)
//     res.sendFile(pa)
// })
app.use((req, res) => {
    const { store } = configureStore()
    const context = {}
    console.log('req.url=========', req.url)
    let modules = []

    const htmlString = renderToString(
        <Loadable.Capture report={moduleName => modules.push(moduleName)}>
            <Root
                context={context}
                location={req.url}
                Router={StaticRouter}
                store={store}
            />
        </Loadable.Capture>
    )

    let bundles = getBundles(stats, modules)

    console.log('modules===', modules)
    // context.url will contain the URL to redirect to if a <Redirect> was used
    if (context.url) {
        res.writeHead(302, {
            Location: context.url,
        })

        res.end()

        return
    }

    const preloadedState = store.getState()

    res.send(renderHTML(htmlString, bundles, preloadedState))
})

Loadable.preloadAll().then(() => {
    app.listen(3000, () => {
        console.log('Running on http://localhost:3000/')
    })
}).catch(err => {
    console.log(err)
})

function renderHTML(html, bundles, preloadedState) {
    return `<!doctype html>
            <html>
            <head>
                <meta charset=utf-8>
                <title>React Server Side Rendering</title>
                <link href="/main.css" rel="stylesheet" type="text/css">
            </head>
            <body>
                <div id="root">${html}</div>
                <script>
                    // WARNING: See the following for security issues around embedding JSON in HTML:
                    // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
                    window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
                </script>
                <script src="/dist/manifest.js"></script>
                ${bundles.map(bundle => {
                    return `<script src="/dist/${bundle.file}"></script>`
                }).join('\n')}
                <script src="/main.bundle.js"></script>
            </body>
            </html>`
}