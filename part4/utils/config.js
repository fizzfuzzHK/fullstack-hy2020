require('dotenv').config()

const PORT = 3003
const MONGODB_URI = 'mongodb://172.23.0.2:27017/Blog'

module.exports = {
  MONGODB_URI,
  PORT
}