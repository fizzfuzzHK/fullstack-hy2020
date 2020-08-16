import React, {useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Countries = () => {
    const [ countries, setCountries] = useState('')
    const handleOnChange = () => {

    }

    useEffect(() => {
        axios
            .get('https://restcountries.eu')
            .then(response => {
                console.log(response)
            })

    },[])

    return (
        <div>
            <form>
                find countries:<input 
                    onChange={handleOnChange}
                />
            </form>
        </div>
    );
};


export default Countries;