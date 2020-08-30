const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const Person = require('./models/person')
const person = require('./models/person')
const logger = require('./utils/logger')
//admin.initializeApp({ credential: admin.credential.cert(ServiceAccount) });



app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(morgan("short"))
let persons =[
    {
      "name": "Arto Hellas",
      "number": "040-123456",
      "id": 1
    },
    {
      "name": "Ada Lovelace",
      "number": "39-44-5323523",
      "id": 2
    },
    {
      "name": "Dan Abramov",
      "number": "12-43-234345",
      "id": 3
    },
    {
      "name": "Mary Poppendieck",
      "number": "39-23-6423122",
      "id": 4
    }
  ]


const errorHandler = (error, request, response, next) => {
  console.error(error.message)
  console.log('error');
  //res.send({error:err})
  // if (error.name === 'CastError') {
  //   return response.status(400).send({error: 'malformatted id'})
  // }else if (error.name === 'ValidationError') {
  //   console.log('error occured!!');
    
  //   return response.status(400).json({error: error.message})
  // }

  //next(error)
}

app.use(errorHandler)

console.log('open');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/info', (req, res) => {
    const personNum = persons.length
    const date = new Date()
    res.send(`Phonebook has info for ${personNum} people ${date}`)
  })

app.get('/api/persons',(req,res) => {
  Person.find({}).
  then(persons => {
    console.log(persons);
    res.json(persons)
  })  
  })

app.get('/api/persons/:id',(req,res, next) => {
 
  Person.findById(req.params.id)
  .then(person => {
    if(person){
      res.json(note)
    }else{
      res.status(404).end()
    }
  })
  .catch(error => next(error))
  
})

app.post('/api/persons/:id',(req,res, next) => {
  const body = req.body
  const person = {
    name : body.name,
    number: body.number
  }

  Person.findByIdAndUpdate(req.params.id, Person, {new: true})
  .then(updatedPerson => {
    response.json(updatedPerson)
  })
  .catch(error => next(error))
})

app.post('/api/persons',(req,res, next) => {
  const body = req.body


  const person = new Person({
      name:body.name,
      number:body.number,
  })

  if (person.name === "abc") {
    const err = new Error('Heeeea!')
    err.statusCode= 400
    next(err)
  }
  else{
  person.save()
  .then(result => {
      console.log('person saved')
      res.status(200).send(result.toJSON())
  })
  .catch(error => next(error))
}
})

app.delete('/api/persons/:id', (req,res, next)=> {
  Person.findByIdAndDelete(req.params.id)
  .then(result => {
    console.log(result);
    
    res.json(result)
  })     
  .catch(error => next(error))
    
})

const PORT = 3003
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})