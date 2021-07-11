import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <>
            <div className="nav">
                <div className="brand">Ultra Nations</div>
                <div className="search">
                        <ion-icon name="search"></ion-icon>
                </div>
                <div className="menu">
                    <ion-icon name="more"></ion-icon>
                </div>
            </div>
        </>
    );
};

export default Header;