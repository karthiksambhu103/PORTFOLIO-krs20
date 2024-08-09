import React from 'react';
import './Projects.css';

const ProjectCard = ({
    projectName,
    projectDescription,
    imageUrl,
    projectUrl,
    repoUrl,
}) => {
    return (  
        <div className="project-card">
            <div className="image-container">
                <a rel="noreferrer" href={projectUrl} target="_blank" className="project-external-link">
                    <img src={imageUrl} alt="project"  className="project-image" />
                </a>
            </div>

            <div className="project-details-container">
                <h2 className="project-heading">{projectName}</h2>
                <p className="project-details">{projectDescription}</p>
                <a rel="noreferrer" href={ repoUrl } target="_blank" className="project-repo-link">Click Here for Repos!</a>
                <a rel="noreferrer" href={ projectUrl } target="_blank" className="project-web-link">Click Here for Website!</a>
            </div>
        </div>
    );
}
 
export default ProjectCard;