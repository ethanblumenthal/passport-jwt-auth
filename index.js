const express = require('express')
const http = require('http')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const router = require('./router')
const app = express()

mongoose.connect('mongodb+srv://ethanblumenthal:oi9zArr8MUV72amF@auth-kuqgg.mongodb.net/test?retryWrites=true')

app.use(morgan('combined'))
app.use(bodyParser.json({ type: '*/*' }))
router(app)

const port = process.env.PORT || 3000
app.listen(port)
console.log(`Server listening on port ${port}`)
