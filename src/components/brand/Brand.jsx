import React from 'react'
import './brand.css';
import { slack, discord, github, stack } from './imports';


const Brand = () => {
    return (
        <div className='brand section__padding'>
            <div>
                <img src={slack} alt="slack" />
            </div>
            <div>
                <img src={discord} alt="discord" />
            </div>
            <div>
                <img src={github} alt="github" />
            </div>
            <div>
                <img src={stack} alt="stack" />
            </div>
        </div>
    )
}

export default Brand
