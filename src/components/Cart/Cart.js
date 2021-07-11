import React from 'react';
import CartItem from '../CartItem/CartItem';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart);
    
    let totalPopulation = 0;
    for (let i = 0; i < cart.length; i++) {
        const country = cart[i];
        totalPopulation += country.population;
    }

    // let totalPopulation = cart.reduce((sum, country) => sum + country.population, 0);
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <div>
                        <strong>Total country added: 
                        </strong> {cart.length}
                    </div> 
                    <div>
                        <strong>Total Population:
                        </strong> {totalPopulation}
                    </div>
                </div>
            </div>
            <div id="accordion">
                {
                    cart.map(cartItem => <CartItem cartItem={cartItem} key={cartItem.alpha3Code}></CartItem>)
                }
            </div>
        </>
    );
};

export default Cart;