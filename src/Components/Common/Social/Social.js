import React from 'react';
import { SocialData } from '../../Data/SocialData';
import './Social.css';

export default function Social () {
    const data = SocialData;
    return (
        <div className="social-contact">
            {
                data.map((item) => {
                    return(
                        <a href={item.link} target="_blank">
                            <div className="social-icon-div">
                                <img src={item.icon} className="social-icon" alt="icons" />
                            </div>
                        </a>
                    )
                })
            }
        </div>
    )
}