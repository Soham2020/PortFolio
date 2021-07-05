import React, { useState } from 'react';
import './Header.css';
import Web from './Web/Web';
import Mobile from './Mobile/Mobile';

export default function Header () {
    const [ isOpen, setIsOpen ] = useState(false);
    return(
        <div className="header">
            <div className="logo">
                {/* Soham Das */}
                <img src="https://fontmeme.com/permalink/210705/3c980b5eb06487f75f82c7a7dceed3a0.png" alt="logo" />
            </div>
            <div className="menu">
                <div className="web-menu">
                    <Web />
                </div>
                <div className="mobile-menu">
                    <div onClick={() => setIsOpen(!isOpen)}>
                    <i class="fi-rr-apps-add menu-icon"></i>
                    </div>
                    {
                        isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />
                    }
                </div>
            </div>
        </div>
    )
}