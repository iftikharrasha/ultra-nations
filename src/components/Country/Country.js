import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name, flag} = props.country;
    const handleAddCountry = props.handleAddCountry;

    const flagStyle = {width: '80px', height: '50px'};
    const countryStyle = {border: '1px solid lightgray', margin: '10px', padding: '15px 10px'};
    return (
        <div className="col-lg-3 col-sm-4 col-6">
            <div className="country" style={countryStyle}>
                <img style={flagStyle} src={flag} alt="flag"/>
                <h4 className="py-3">{name}</h4>
                <button className="btn" onClick={() => handleAddCountry(props.country)}>WATCHLIST</button>
            </div>
        </div>
    );
};

export default Country;