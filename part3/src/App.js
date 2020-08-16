import React, { useState, useEffect} from 'react'
import ReactDOM from 'react-dom';
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'
import axios from 'axios'


const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '000-000-00' },
    { name: 'Adda Bbaa', number: '000-000-00' },
    { name: 'Baaa aads', number: '000-000-00' }
  ]) 

  useEffect(() => {
    axios
      .get('http://localhost:3002/persons')
      .then(response => {
        setPersons(response.data)
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
      number: newNumber
    }

    if (persons.some(b => b.name === newObject.name)){
      console.log('error');
      
      return (
        window.alert(`${newName} is already added to phonebook`)       
      )
    }

    else {
      setPersons(persons.concat(newObject))
  
      setNewName('')
      setNewNumber('')
    }
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
        personToShow={personToShow}
      />
    </div>
  )
}

export default App