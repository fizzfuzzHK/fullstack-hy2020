const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
//admin.initializeApp({ credential: admin.credential.cert(ServiceAccount) });

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




  console.log('open');
  
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
  Persons.find({}).
  then(persons => {
    res.json(persons)
  })  
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
    
    
    // if(!body.content){
    //   return res.status(405).json({
    //   error: 'content missing'
    //   })
    // }

    const person = {
      name: body.name,
      number:body.number,
      id: generateId(),
    }
    console.log(person);
    
    if(persons.some((v) => v.name  === person.name)){
      const err = new Error('name is already exists')
      console.log(err);
      res.status(400).send({error: err})
      
    }
    else{
    persons.push(person)
    res.json(person)
    console.log(persons);
    }
  })

  app.delete('/api/persons/:id', (req,res)=> {
      const id = Number(req.params.id)
      persons = persons.filter(note => note.id !== id)
      console.log(persons);
      
      res.status(204).end()
      console.log(persons);
      
  })
  
  const PORT = 3003
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })