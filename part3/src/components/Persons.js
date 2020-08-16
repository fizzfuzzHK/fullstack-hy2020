import React from 'react';
import axios from 'axios';

const Person = ({person}) => {
    return (
      <li>
        {person.name} {person.number}
      </li>
    )
  }

const Delete = (id)  => {
    axios
        .delete(`http://localhost:32866/persons/${id}`)
        .then(response => {
            console.log(response.data);  
        })
}

const Persons = (props) => {
    return (
        <>
            <button onClick={() => props.setFilterOn(!props.filterOn)}>filter</button>
            {props.filterOn ? 
                <div>{props.persons.map((person) => 
                    <div>
                    <Person key={props.persons.name} person={person}/>
                    <button onClick={() => Delete(person.id)}>Delete</button>
                    </div>
                    )}
                </div> :
                <div>{props.personToShow.map((person) => 
                    <Person key={props.personToShow.name} person={person} />)}
                </div>
            }
        </>
    )
}

export default Persons