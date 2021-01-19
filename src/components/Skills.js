import React from 'react';
import Skills from '../utils/Skills';
import extraSkills from '../utils/extraSkills';

const titleStyles = {
  fontFamily: 'sans-serif',
  color: '#fff',
  fontSize: '16px',
}
const mainTitle = {
  fontFamily: 'sans-serif',
  color: '#fff',
}
const hr = {
    border: '1px solid white',
    width: '90%',
}
const mainContainer = {
    display: 'flex',
    justifyContent: 'space-around',
}
const container = {
    display: 'flex',
    flexDirection: 'column',

}


const SkillList = () => {
  return (
    <div style={mainContainer}>
        <div style={container}>
            <h1 style={mainTitle}>Skills</h1>
            {Skills.map(skill => 
            <>
                <h1 key={skill.name} style={titleStyles}>{skill.name}</h1> 
                <p style={titleStyles}> Years of experience: {skill.yearsOfExperience}</p>
                <hr style={hr}/>
            </>
            )}
        </div>
        <div style={container}>
            <h1 style={mainTitle}>Extra Skills</h1>
            {extraSkills.map(eSkill => 
            <>
                <h1 key={eSkill.name} style={titleStyles}>{eSkill.name}</h1> 
                <p style={titleStyles}> Years of experience: {eSkill.yearsOfExperience}</p>
                <hr style={hr}/>
            </>
            )}
        </div>
    </div>
  );
}

export default SkillList;