import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <>
            <div class="nav">
                <div class="brand">Ultra Nations</div>
                <div class="search">
                        <ion-icon name="search"></ion-icon>
                </div>
                <div class="menu">
                    <ion-icon name="more"></ion-icon>
                </div>
            </div>
        </>
    );
};

export default Header;