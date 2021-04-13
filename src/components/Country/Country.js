import React from 'react';
import './Country.css';

const Country = (props) => {
    const {name, population, flag} = props.country;
    const flagStyle = {width: '80px', height: '50px'};
    return (
        <div>
            <h4>{name}</h4>
            <p>{population}</p>
            <img style={flagStyle} src={flag} alt="flag"/>
        </div>
    );
};

export default Country;