const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
const { mongoURI } = require('./config')
const app = express()

mongoose.connect(mongoURI, { useNewUrlParser: true, 'useCreateIndex': true })

app.use(morgan('combined'))
app.use(cors())
app.use(express.json())

require('./router')(app)

const port = process.env.PORT || 3090
app.listen(port)
