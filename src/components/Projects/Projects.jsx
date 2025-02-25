import React from 'react';
import './Projects.css';
import { projectsData } from '../../assets/projectsData';
import Header from '../Header/Header';
import FooterLink from '../Footer/Footer'
import ProjectCard from './ProjectCard';


const Projects = () => {
    return (  
        <div className='section-container'>
            <Header heading="My Projects!"
                    details="Here are a few things I've made. Check them out."
            />

            <div className="project-cards-container">
                {
                   projectsData.map(({
                    projectName,
                    projectDescription,
                    imageUrl,
                    projectUrl,
                    repoUrl,
                }) => {
                       return <ProjectCard 
                                projectName={projectName}
                                projectDescription={projectDescription}
                                projectUrl={projectUrl}
                                imageUrl={imageUrl}
                                repoUrl={repoUrl} 
                               />
                   }) 
                }
            </div>

            <FooterLink phrase="Check out " link="my skills!" toAddress='/skills' />
        </div>
    );
}
 
export default Projects;