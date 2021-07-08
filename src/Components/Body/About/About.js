import React, { useEffect } from 'react';
import './About.css';
import AboutPic from '../../../Assets/about.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function About () {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])
    return (
        <>
            <div data-aos="fade-left" className="abt">
                <div className="abt-photo">
                        <img src={AboutPic} className="pic" alt="bio-picture" />
                </div>
                <div className="abt-info">
                    <p className="para">
                        Hello! Interestingly, I have been a student of Bio-Maths in my high school and <br/>
                        got introduced to programming in my freshman year at <span className="clg-name">BPPIMT</span>. Since then, <br/>
                        I started developing <span className="clg-name">Web and Android projects</span>, and currently pursuing my <br/>
                        Bachelors in Computer Science and Engineering (2019-2023). <br /> <br />
                        I can work efficiently in <span className="clg-name">C++</span>, <span className="clg-name">C</span>, <span className="clg-name">Reactjs</span>  
                        {' '}and quite comformtable in Python.<br/>
                        I have also done many projects on <span className="clg-name">MERN-Stack</span> and <span className="clg-name">React-Native</span>.
                    </p>
                </div>
            </div>
        </>
    )
}