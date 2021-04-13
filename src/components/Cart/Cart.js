import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    let totalPopulation = 0;
    for (let i = 0; i < cart.length; i++) {
        const country = cart[i];
        totalPopulation += country.population;
        
    }

    // let totalPopulation = cart.reduce((sum, country) => sum + country.population, 0);
    return (
        <div>
            <h2>This is a cart: {cart.length}</h2>
            <p>Total Population: {totalPopulation}</p>
        </div>
    );
};

export default Cart;