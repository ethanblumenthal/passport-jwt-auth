const express = require('express')
const http = require('http')
const morgan = require('morgan')
const mongoose = require('mongoose')
const router = require('./router')
const { mongoURI } = require('./config')
const app = express()

mongoose.connect(mongoURI, { useNewUrlParser: true })

app.use(morgan('combined'))
app.use(express.json())
router(app)

const port = process.env.PORT || 3000
app.listen(port)
