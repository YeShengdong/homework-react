import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Root from './Root'
import configureStore from './store'

function renderHTML(html, preloadedState) {
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
                <script src="/bundle.js"></script>
            </body>
            </html>`
}

export default function serverRenderer() {
    return (req, res) => {
        const { store } = configureStore()
        const context = {}
        console.log('req.url=========', req.url)
        const root = (
            <Root
                context={context}
                location={req.url}
                Router={StaticRouter}
                store={store}
            />
        )

        const htmlString = renderToString(root)

        // context.url will contain the URL to redirect to if a <Redirect> was used
        if (context.url) {
            res.writeHead(302, {
                Location: context.url,
            })

            res.end()

            return
        }

        const preloadedState = store.getState()

        res.send(renderHTML(htmlString, preloadedState))
    }
}
