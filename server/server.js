const path = require('path')
const express = require('express')

const placeHolder = require('./routes/placeHolder')

const server = express()

server.use('/api/v1/placeholder', placeHolder)

module.exports = server