import React from 'react'
import './footer.css';
// import logo from '../../assets/marija-logo-transparent2.png'
// import { AiFillBug } from "react-icons/ai";
// <div className='footer-links_logo'></div>


import { FiLinkedin, FiGithub, FiSlack } from 'react-icons/fi';


const Footer = () => {
    return (
        <div className='footer section__padding'>
            
            <div className="footer-heading">
                <h1>Let's stay in touch</h1>
            </div>

        <div className='footer-links'>

            <div className='footer-links_div'>
                <a href="https://www.linkedin.com/in/rubilmarija/"><FiLinkedin size="3em" color="#CCE3E8"/></a> 
            </div>
             <div className='footer-links_div'>
               <a href="https://github.com/rubilmarija"> <FiGithub size="3em" color="#CCE3E8"/></a>
            </div>
             <div className='footer-links_div'>
                <FiSlack size="3em" color="#CCE3E8"/>
            </div>
          
        </div>
        <div className='footer-copyright'>
            <p>© 2022 -- Marija Rubil</p>
        </div>
        </div>
    )
}

export default Footer
