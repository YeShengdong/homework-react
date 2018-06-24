import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Loadable from 'react-loadable'
import { getBundles } from 'react-loadable/webpack'
import Root from './Root'
import configureStore from 'store'

function renderHTML(html, bundles, preloadedState) {
    return `<!doctype html>
            <html>
            <head>
                <meta charset="utf-8">
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
                <script src="/main.bundle.js"></script>
                ${bundles.map(bundle => {
                    return `<script src="/${bundle.file}"></script>`
                }).join('\n')}
                <script>window.main();</script>
            </body>
            </html>`
}

export default function serverRenderer(stats) {
    return (req, res) => {
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

        const bundles = getBundles(stats, modules)

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
    }
}
