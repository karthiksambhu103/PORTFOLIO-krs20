import React from 'react';
import './Skills.css';
import Header from '../Header/Header';
import { skillList } from '../../assets/skillsData';
import FooterLink from '../Footer/Footer';
import skillsVector from './../../assets/skills_vector.png';
import SkillCard from './SkillCard';

const Skills = () => {
    return (  
        <div className='section-container'>
            <Header
                heading="My Skills"
                details="Passionata about new technologies, I keep exploring stuff and here's the stack i've worked with!!!"
            />

            <div className="skill-card-container">
                {
                    skillList.map(({skillName, skillUrl}) => {
                        return <SkillCard skillName={skillName} skillUrl={skillUrl}/>
                    })
                }
            </div>

            <FooterLink phrase="Get In " link="touch." toAddress='/contact' />

            <div className="skills-vector-frame">
                <img src={skillsVector} alt="skills" className="skills-vector" />
            </div>
        </div>
    );
}
 
export default Skills;