import React, { useState, useEffect} from 'react'
import ReactDOM from 'react-dom';
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'
import axios from 'axios'


const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ personId, setPersonId] = useState(0)
  useEffect(() => {
    axios
      .get('http://localhost:3003/api/persons')
      .then(response => {        
        setPersons(response.data)
        console.log(response.data.length);
        //setPersonId(response.data.length + 1)
      })
  },[])


  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filterValue, setFilterValue ] = useState('')
  const [ filterOn, setFilterOn ] = useState(true)

  

  const addPerson = (event) => {

    event.preventDefault()
    const newObject = {
      name: newName,
      number: newNumber,
      //id: personId
    }

    // if (persons.some(b => b.name === newObject.name)){
    //   console.log('error');
      
    //   return (
    //     window.alert(`${newName} is already added to phonebook`)       
    //   )
    // }

    // else {
      axios
        .post('http://localhost:3003/api/persons', newObject)
        .then(response => {
          setPersons(persons.concat(response.data))
          setNewName('')
          setNewNumber('')
          //setPersonId(personId + 1)
          console.log(response)
        })
        .catch(error => {
          const {
            status,
            statusText
          } = error.response;
          console.log(error.response.data);
          
          window.alert(statusText)
        })
        
    // }
  }
  

const deletePersons = (id)  => {
  axios
      .delete(`http://localhost:3003/api/persons/${id}`)
      .then(response => {
          console.log(response.data);  
          setPersons(persons.filter(item => item.id != response.data.id))
      })
}

  const handleNameOnChange = (event) => {
    setNewName(event.target.value)
    // console.log(newName);    
  }

  const handleNumberOnChange = (event) => {
    setNewNumber(event.target.value)
    // console.log(newName);    
  }

  const handleFilterOnChange = (event) => {
    setFilterValue(event.target.value)
    // console.log(newName);    
  }

  const personToShow = filterOn ? persons : persons.filter(x => x.name.startsWith(filterValue) )
  
  return (
    <div>
      
      <h2>Phonebook</h2>
      <Filter 
        handleFilterOnChange={handleFilterOnChange}
      />
     
      <h3>add a new</h3>
      <PersonForm 
        nameValue={newName}
        numberValue={newNumber}
        addPerson={addPerson}
        handleNameOnChange={handleNameOnChange}
        handleNumberOnChange={handleNumberOnChange}
      />

      <h2>Numbers</h2>
      <Persons
        setFilterOn={setFilterOn}
        filterOn={filterOn}
        persons={persons}
        setPersons={setPersons}
        deletePersons={deletePersons}
        personToShow={personToShow}
      />
    </div>
  )
}

export default App