import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name, population, flag} = props.country;
    const flagStyle = {width: '80px', height: '50px'};
    const countryStyle = {border: '1px solid lightgray', margin: '10px', padding: '10px'};
    const handleAddCountry = props.handleAddCountry;
    return (
        <div style={countryStyle}>
            <h4>{name}</h4>
            <img style={flagStyle} src={flag} alt="flag"/>
            <p>Polulation: {population}</p>
            <button onClick={() => handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;