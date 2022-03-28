import React from 'react';
import Logo from './favicon.png'
import { HiMenuAlt1 } from "react-icons/hi";
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <img src={Logo} alt="" />
            <h2 className='header-title'><Link to="/">Learning Heroes</Link></h2>
                <nav>
                    <input type="checkbox" id="check" />
                    <label for="check" className='checkbtn'>
                    <HiMenuAlt1 className='nav-bar-icon'></HiMenuAlt1>
                    </label>
                    <ul className='navbar-items'>
                        <Link to="/home" className='nav-link'>Home</Link>
                        <Link to="/instructors" className='nav-link'>Instructors</Link>
                        <Link to="/courses" className='nav-link'>Courses</Link>
                        <Link to="/faq" className='nav-link'>Faq</Link>
                        <Link to="/about" className='nav-link'>About</Link>
                    </ul>
                </nav>
        </div>
    );
};

export default Header;