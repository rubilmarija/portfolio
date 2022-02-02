import React from 'react'
import './header.css';
import undraw from '../../assets/undraw_proud_coder_1.svg'

const Header = () => {
    return (
        <div className='header section__padding' id='home'>
            <div className='header-content'>
                <h1 className='gradient__text'>Hi, I'm Marija</h1>
                <p>Front End Developer</p>
                <p>Welcome to my personal portfolio!</p>
            </div>
            <div className='header-image'>
                <img src={undraw} alt="undraw" />
            </div>
        </div>
    )
}

export default Header
