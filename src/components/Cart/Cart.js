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
        <>
            <div class="card">
                <div class="card-body">
                    <div>
                        <strong>County added to basket: 
                        </strong> {cart.length}
                    </div> 
                    <div>
                        <strong>Population Count:
                        </strong> {totalPopulation}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;