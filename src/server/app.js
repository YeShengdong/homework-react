const express = require('express')
const app = express()
const path = require('path')
const serverRenderer = require('../../dist/serverRenderer').default

app.use(express.static('dist'))
app.use('/static', express.static('static'))
app.use('/test-report', express.static('jest/coverage/lcov-report'))
//app.get('/', (req, res) => res.send('Hello World'))
// app.use((req, res) => {
//     const pa = path.resolve(__dirname, '../../dist/index.html')
//     console.log('pa', pa)
//     res.sendFile(pa)
// })
app.use(serverRenderer())

app.listen(3000, () => console.log('Example app listening on port 3000!'))