import React from 'react';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

const Home = () => {
    const [countries, setCountries] = useState([]);
    const [cart, setCart] = useState([]);
    
    useEffect(() => {
      fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => {
        setCountries(data);
        // console.log(data);
        // const names = data.map(country => country.name);
        // console.log(names);
      })
      .catch(error => console.log(error))
    }, [])
  
    const handleAddCountry = (country) => {
      const newCart = [...cart, country];
      setCart(newCart);
    }
  
    return (
        <>
            <div className="container py-5">
                <Cart cart={cart}></Cart>
                <h1 className="mt-5">Total Counties: {countries.length}</h1>
                <div className="row py-5">
                    {
                        countries.map(country => <Country country={country} key={country.alpha3Code} handleAddCountry={handleAddCountry}></Country>)
                    }
                </div>
            </div>
        </>
    );
};

export default Home;

