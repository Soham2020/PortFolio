import React, { useEffect } from 'react';
import './Contact.css';
import Social from '../../Common/Social/Social';
import AOS from 'aos';

export default function Contact () {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return(
        <div className="contact">
            <label className="section-title">Get In Touch</label>
            <div data-aos="fade-in" className="contact-container">
                <div className="contact-left">
                    <p className="para">
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