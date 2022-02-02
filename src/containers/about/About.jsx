import React from 'react'
import { Feature } from '../../components';
import './about.css';

const About = () => {
    return (
        <div className='aboutMe section__margin' id='aboutMe'>
           <div className='aboutMe-feature'>
               <Feature title="About me" text="I am Stockholm based Front End Developer. I am passionate about bringing creativity to web."/> 
           </div> 
           <div className='aboutMe-heading'>
               <h1 className='gradient__text'>"Everything you can imagine is real." <p>Pablo Picasso</p></h1>
               <p>Read more about me</p>
           </div>
           <div className='aboutMe-container'>
               <Feature title="My path" text=""/>
               <Feature title="Education" text=""/>
               <Feature title="Certifications" text=""/>
           </div>
        </div>
    )
}

export default About
