const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./utils/config')
const blogRotuer = require('./controllers/blog')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')

logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(
    config.MONGODB_URI, 
    {
        "auth": {
          "authSource": "admin"
        },
        "user": "root",
        "pass": "mongo"
    },
    { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connection to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(middleware.requestLogger)

app.use('/api/blogs', blogRotuer)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app