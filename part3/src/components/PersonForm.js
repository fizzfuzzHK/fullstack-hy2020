import React from 'react';

const PersonForm = (props) => {
    return (
        <form onSubmit={props.addPerson}>
        <div>   
          name: <input 
          value={props.nameValue}
            onChange={props.handleNameOnChange}/>
        </div>
        <div>
          number:<input 
          value={props.numberValue}
          onChange={props.handleNumberOnChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm