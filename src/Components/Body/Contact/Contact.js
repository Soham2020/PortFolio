import React from 'react';
import './Contact.css';
import Social from '../../Common/Social/Social';

export default function Contact () {
    return(
        <div className="contact">
            <label className="section-title">Contact</label>
            <div className="contact-container">
                <div className="contact-left">
                    <p>
                        My inbox is always open. Whether you have a question or just want to say hello,
                        I'll try my best to get back to you! Feel free to mail me about any relevant job updates.
                    </p>
                    <Social />
                </div>
                <div className="download">
                    <a href="#">
                        <i class="fi-rr-download download-icon"></i>
                        Resume!
                    </a>
                </div>
            </div>
        </div>
    )
}