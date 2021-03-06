import React from 'react';

const CartItem = (props) => {
    const { alpha3Code, name, capital, currencies, languages, population } = props.cartItem;
    console.log(props.cartItem);
    return (
        <>
            <div className="card">
                <div className="card-header" id="headingOne">
                <h5 className="mb-0">
                    <button className="btn btn-link" data-toggle="collapse" data-target={`#`+`${alpha3Code}`} aria-expanded="false" aria-controls={alpha3Code}>
                    {name}
                    </button>
                </h5>
                </div>

                <div id={alpha3Code} className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                <div className="card-body">
                    Capital: {capital} <br />
                    Currencies: {currencies[0].code} <br />
                    Language: {languages[0].name} <br />
                    Population: {population}
                </div>
                </div>
            </div> 
        </>
    );
};

export default CartItem;