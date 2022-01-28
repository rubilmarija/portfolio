import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLin, RiCloseLine } from 'react-icons/ri';
import './navbar.css';
import { FaLaptopCode } from 'react-icons/fa';

const Menu = () => (
    <>
    <p><a href="#home"><FaLaptopCode size="3em"/></a></p>
    <p><a href="#aboutMe">About me</a></p>
    <p><a href="#experience">Skills</a></p>
    <p><a href="#portfolio">Portfolio</a></p>
    </>
)

// BEM -> Block Element Modifier

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className='navbar'>
            <div className='navbar-links'>
                <div className='navbar-links_container'>
                    <Menu />
                </div>
            </div> 
            <div className='navbar-sign'>
                
                <button type='button'>Contact me</button>
            </div>
            <div className='navbar-menu'>
                {toggleMenu
                    ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                    : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                }
                {toggleMenu && (
                    <div className='navbar-menu_container scale-up-center'>
                        <div className='navbar-menu_container-links'>
                            <Menu />
                             <div className='navbar-menu_container-links-sign'>
                                
                                <button type='button'>Contact me</button>
                             </div>
                        </div>
                    </div>
                ) }
            </div>
        </div>
    )
}

export default Navbar
