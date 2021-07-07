import React from 'react';
import './Body.css';
import Bio from './Bio/Bio';
import About from './About/About';
import Work from './Work/Work';
import Project from './Project/Project';
import Contact from './Contact/Contact';

export default function Body () {
    return(
        <div className="body">
            <section id="bio">
                <Bio />
            </section>
            <section id="About">
                <About />
            </section>
            <section id="Experience">
                <Work />
            </section>
            <section id="Project">
                <Project />
            </section>
            <section id="Contact">
                <Contact />
            </section>
        </div>
    )
}