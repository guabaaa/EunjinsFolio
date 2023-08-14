import React from 'react';
import Header from './Header/Header';
import Hello from './Hello/Hello';
import Skill from './Skill/Skill';
import Top from './topButton/Top';
import OpenSource from './OpenSource/OpenSource';
import Contact from './Contact/Contact';
import Experience from './Experience/Experience';
import Project from './Project/Project';
import { greeting, skills, experience, openSourceProjects, projects, contactInfo } from '../portfolio';

function Main() {
    return (
        <div className="root">
            <Header />
            {greeting.view && <Hello />}
            {skills.view && <Skill />}
            {experience.view && <Experience />}
            {openSourceProjects.view && <OpenSource />}
            {projects.view && <Project />}
            {contactInfo.view && <Contact />}
            <Top />
        </div>
    );
}
export default Main;