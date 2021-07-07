import React, { useEffect } from 'react';
import { WorkData } from '../../Data/WorkData';
import './Work.css';
import WorkCard from './WorkCard';
import AOS from 'aos';

export default function Work () {
    const data = WorkData;
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return(
        <div className="work">
            <label className="section-title">Experience</label>
            <div data-aos="zoom-in" className="work-list">
                {
                    data.map((item) => {
                        return <WorkCard item={item} />
                    })
                }
            </div>
        </div>
    )
}