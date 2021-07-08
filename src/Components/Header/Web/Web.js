import React from 'react';
import './Web.css';

export default function Web () {
    return (
        <div className="web">
            <div className="web-option">
                <a href="#About">
                <i class="fi-rr-user option-icon"></i> About
                </a>
            </div>
            <div className="web-option">
                <a href="#Experience">
                <i class="fi-rr-briefcase option-icon"></i> Experience
                </a>
            </div>
            <div className="web-option">
                <a href="#Project">
                <i class="fi-rr-browser option-icon"></i> Project
                </a>
            </div>
            <div className="web-option">
                <a href="#Contact">
                <i class="fi-rr-smartphone option-icon"></i> Contact
                </a>
            </div>
        </div>
    )
}