import React from 'react';
import { Article } from '../../components';
import { port01, port02, port03, port04, port05 } from './imports';
import './portfolio.css';

const Portfolio = () => {
    return (
        <div className='portfolio section__padding' id='portfolio'>
            <div className='portfolio-heading'>
                <h1 className='gradient__text'>Portfolio with my projects</h1>
            </div>
            <div className='portfolio-container'>
                <div className='portfolio-container_groupA'>
                    <Article imgUrl={port01} date="Dec 15 2020" title="Gluten free Cookbook"/>
                </div>
                <div className='portfolio-container_groupB'>
                    <Article imgUrl={port02} date="Project in progress" title="Weather Forecast"/>
                    <Article imgUrl={port03} date="Project in progress" title="Magic Eight Ball"/>
                    <Article imgUrl={port04} date="Project in progress" title="Rock Paper Scissors"/>
                    <Article imgUrl={port05} date="Project in progress" title="Website"/>
                </div>
            </div>
        </div>
    )
}

export default Portfolio
