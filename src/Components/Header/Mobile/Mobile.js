import React from 'react';
import './Mobile.css';

export default function Mobile ({ isOpen, setIsOpen }) {
    return (
        <div className="mobile">
            <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
            <i class="fi-rr-cross"></i>
            </div>
            <div className="mobile-options">
            <div className="mobile-option">
                <a href="#About">
                <i class="fi-rr-user option-icon"></i> About
                </a>
            </div>
            <div className="mobile-option">
                <a href="#Experience">
                    <i class="fi-rr-briefcase option-icon"></i> Experience
                </a>
                
            </div>
            <div className="mobile-option">
                <a href="#Project">
                    <i class="fi-rr-browser option-icon"></i> Project
                </a>
            </div>
            <div className="mobile-option">
                <a href="#Contact">
                <i class="fi-rr-smartphone option-icon"></i> Contact
                </a>
            </div>
            </div>
        </div>
    )
}