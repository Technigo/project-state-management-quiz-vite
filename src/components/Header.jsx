import React from 'react';
import './header.css';

function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <div className="header-text">
                    <h2>Welcome to the</h2>
                    <h1>Ocean Quiz!</h1>
                    <p>What do you know about the worlds oceans? Find out your knowledge here. <br />
                        Lets play!</p>
                </div>
            </div>
        </header>
    );
}

export default Header;