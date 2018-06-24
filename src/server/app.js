const express = require('express')
const app = express()
const path = require('path')

import Loadable from 'react-loadable'
import checkQuery from './middleware/checkQuery'
import stats from '../../dist/react-loadable.json'
import serverRenderer from '../../dist/serverRenderer'
// import serverRenderer from '../client/serverRenderer'

app.use(express.static('dist'))
app.use('/static', express.static('static'))
app.use('/test-report', express.static('jest/coverage/lcov-report'))
//app.get('/', (req, res) => res.send('Hello World'))
// app.use((req, res) => {
//     const pa = path.resolve(__dirname, '../../dist/index.html')
//     console.log('pa', pa)
//     res.sendFile(pa)
// })
app.use('/search/:query', checkQuery)
app.use(serverRenderer(stats))

Loadable.preloadAll().then(() => {
    app.listen(3000, () => {
        console.log('Running on http://localhost:3000/')
    })
}).catch(err => {
    console.log(err)
})