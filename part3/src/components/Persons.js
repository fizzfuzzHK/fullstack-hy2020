import React from 'react';

const Person = ({person}) => {
    return (
      <li>
        {person.name} {person.number}
      </li>
    )
  }

const Persons = (props) => {
    return (
        <>
            <button onClick={() => props.setFilterOn(!props.filterOn)}>filter</button>
            {props.filterOn ? 
                <div>{props.persons.map((person) => 
                    <Person key={props.persons.name} person={person}/>)}
                </div> :
                <div>{props.personToShow.map((person) => 
                    <Person key={props.personToShow.name} person={person} />)}
                </div>
            }
        </>
    )
}

export default Persons