const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json({ type: '*/*' }))

const port = process.env.PORT || 3000
app.listen(port)
console.log(`Server listening on port ${port}`)
