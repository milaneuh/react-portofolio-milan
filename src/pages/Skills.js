import React from 'react';
import Navigation from '../components/Navigation';
import Experiences from '../components/skills/Experiences';
import Hobbies from '../components/skills/Hobbies';
import Languages from '../components/skills/Languages';
import OtherSkills from '../components/skills/OtherSkills';

const Skills = () => {
    return (
        <div className="skills">
            <Navigation/>
            <div className="skillsContent">
                <Languages /> 
                <Experiences />
                <OtherSkills />
                <Hobbies />
            </div>
        </div>
    );
};

export default Skills;