import React from 'react';
import { RiMenu4Fill, RiUserHeartLine } from "react-icons/ri";
import './Header.css'
import CustomLink from '../CustomLink/CustomLink';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <RiUserHeartLine className='icon'></RiUserHeartLine>
            <h2 className='header-title'><Link to="/">Learning Heroes</Link></h2>
                <nav>
                    <input type="checkbox" id="check" />
                    <label htmlFor="check" className='checkbtn'>
                    <RiMenu4Fill className='nav-bar-icon'></RiMenu4Fill>
                    </label>
                    <ul className='navbar-items'>
                        <CustomLink to="/home" className='nav-link'>Home</CustomLink>
                        <CustomLink to="/instructors" className='nav-link'>Instructors</CustomLink>
                        <CustomLink to="/courses" className='nav-link'>Courses</CustomLink>
                        <CustomLink to="/faq" className='nav-link'>Faq</CustomLink>
                        <CustomLink to="/about" className='nav-link'>About</CustomLink>
                    </ul>
                </nav>
        </div>
    );
};

export default Header;