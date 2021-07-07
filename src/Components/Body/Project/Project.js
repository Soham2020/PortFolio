import React, { useEffect } from 'react';
import { ProjectData } from '../../Data/ProjectData';
import './Project.css';
import ProjectCard from './ProjectCard';
import AOS from 'aos';

export default function Project () {
    const data = ProjectData;
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return(
        <div className="projects">
            <label className="section-title">Projects</label>
            <div data-aos="zoom-in">
                {
                    data.map((project) => {
                        return <ProjectCard project={project} /> 
                    })
                }
            </div>
        </div>
    )
}