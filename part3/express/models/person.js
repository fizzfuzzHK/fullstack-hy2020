const mongoose = require('mongoose')

const url =
  'mongodb://172.23.0.2:27017/phone'

mongoose.connect(
  url, 
  {
    "auth": {
      "authSource": "admin"
    },
    "user": "root",
    "pass": "mongo"
  },
  {useNewUrlParser: true, useUnifiedTopology:true })


const personSchema =  new mongoose.Schema({
  name: String,
  number: {
      type: Number,
      min: 5,
      required:true
  }
})

personSchema.set('toJSON', {
  transform:(document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Person', personSchema)