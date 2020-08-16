import React, {useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Name = (props) => {
    return(
        <li>
            {props.name}
        </li>
    )
}

const ShowCountry =(props) => {
    return (
        <>
            <h1>{props.country.name}</h1>
        </>
    )
}
const CountryList = (props) => {
    {console.log(props.filtered)}

    return (
        <>
            {props.onlyOneCountry ? 
                <div><ShowCountry country={props.filtered[0]}/></div>
                :
                <div>{props.filtered.map((country) =>
                    <Name name={country.name}/>)}</div>}
        </>
    )
}

const Countries = () => {
    const [ countries, setCountries] = useState([])
    const [ filterIn , setFilterIn] = useState('')
    const [filtered, setFiltered] = useState([])
    const [onlyOneCountry, setOnlyOneCountry] = useState(false)

    const handleOnChange = (event) => {
        setFilterIn(event.target.value)
        console.log(filterIn)
        // const test = countries.filter(x => x.name.startsWith(filterIn))
        // setFiltered(test)
        // console.log(filtered);
        
    }

    useEffect(() => {
        axios
            .get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                setCountries(response.data)
            })

    },[])

    useEffect(() => {
        const test = countries.filter(x => x.name.startsWith(filterIn))
        setFiltered(test)
        if (test.length ===1){
            setOnlyOneCountry(true)
        }
        else{
            setOnlyOneCountry(false)
        }
    },[filterIn])
   
    // const test2 = countries.filter(x => x.name.startsWith(filterIn))
    // console.log(test2)
    console.log(onlyOneCountry);
    
    return (
        <div>
            <form>
                find countries:<input 
                    onChange={handleOnChange}
                />
            </form>
            <CountryList 
                onlyOneCountry={onlyOneCountry}
                filtered={filtered}

            />
        </div>
    );
};


export default Countries;