import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name, population, flag} = props.country;
    const flagStyle = {width: '80px', height: '50px'};
    const countryStyle = {border: '1px solid lightgray', margin: '10px', padding: '15px 10px'};
    const handleAddCountry = props.handleAddCountry;
    return (
        <div className="col-lg-3 col-sm-4 col-6">
            <div className="country" style={countryStyle}>
                <img style={flagStyle} src={flag} alt="flag"/>
                <h4 className="py-3">{name}</h4>
                <p>Polulation: {population}</p>
                <button className="btn" onClick={() => handleAddCountry(props.country)}>Add Country</button>
            </div>
        </div>
    );
};

export default Country;