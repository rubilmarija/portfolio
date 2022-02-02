import React from 'react'
import { Feature } from '../../components';
import './experience.css';

const experienceData = [
    {
        title: 'HTML',
    },
    {
        title: 'CSS',
    },
    {
        title: 'JavaScript',
    },
    {
        title: 'GitHub',
    }
    
];

const experienceData2 = [
    {
        title: 'React',
    },
    {
        title: 'Node.js',
    },
    {
        title: 'Flexbox',
    },
    {
        title: 'Visual Studio Code',
    }
    
];

const Experience = () => {
    return (
        <div className='experience section__padding' id='experience'>
            <div className='experience-heading'>
                <h1 className='gradient__text'>Skills and technologies</h1>
            </div>
            <div className='experience-container'>
                {experienceData.map((item, index) => (
                    <Feature title={item.title} text={item.text} key={item.title + index}/>
                ))}
            </div>
            <div className='experience-container2'>
                {experienceData2.map((item, index) => (
                    <Feature title={item.title} text={item.text} key={item.title + index}/>
                ))}
            </div>
        </div>
    )
}

export default Experience
