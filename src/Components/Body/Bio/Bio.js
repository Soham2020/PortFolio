import React from 'react';
import './Bio.css';
import BioPic from '../../../Assets/bioPic.png';
import ReactRotatingText from 'react-rotating-text';
import Social from '../../Common/Social/Social';

export default function Bio () {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-info">
                    <span className="about-intro">Hello World! My name is </span> <br />
                    <span className="info-name">Soham Das.</span> <br/>
                    <span className="rotate-text"><ReactRotatingText className="rotate-text-inner" items={[ 'Web-developer.', 'Android-developer.', 'Love exploring new things!', 'Love building-things.' ]} /> </span>
                </div>
                <div className="about-photo">
                    <img src={BioPic} className="picture" alt="bio-picture" />
                </div>
            </div>
            <div className="about-bottom">
                <Social />
            </div>
        </div>
    )
}