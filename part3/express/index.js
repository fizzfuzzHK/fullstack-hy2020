const express = require('express')
const app = express()
const bodyParser = require('body-parser')

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

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.use(express.json())
  app.use(express.urlencoded({ extended: true }));

app.get('/info', (req, res) => {
    const personNum = persons.length
    const date = new Date()
    res.send(`Phonebook has info for ${personNum} people ${date}`)
  })

app.get('/api/persons',(req,res) => {
    res.json(persons)
  })

app.get('/api/persons/:id',(req,res) => {
  const id = Number(req.params.id)  
  const person = persons.filter(x => x.id ===id)
  console.log(person);
  
  if (person !==[]){
    res.json(person)
  }else{
    res.status(404).end()
  }
})

app.post('/a',(req,res) => {
  res.send("ok")
})

  const generateId = () => {
    const maxId = persons.length > 0 
      ? Math.max(...persons.map(n => n.id))
      : 0
    return maxId + 1
  }

  app.post('/api/persons',(req,res) => {
    const body = req.body
    console.log(body.name);
    
    if(!body.content){
      return res.status(403).json({
      error: 'content missing'
      })
    }

    const person = {
      name: body.name,
      number:body.number,
      id: generateId(),
    }

    persons.concat(person)
    res.json(person)
  })

  app.delete('/api/notes/:id', (req,res)=> {
      const id = Number(req.params.id)
      notes = notes.filter(note => note.id !== id)
      res.status(204).end()
  })
  
  const PORT = 3003
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })