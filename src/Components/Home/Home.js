import React from 'react';
import './Home.css'
import {RiUserHeartLine, RiArrowDropRightFill} from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home'>
            <h1>Welcome To Learning Heroes <RiUserHeartLine></RiUserHeartLine></h1>
            <p>"We would accomplish more things if we did not think of them as impossible" - <strong>Vince Lobardi</strong></p>
            <Link
              to='/courses'
              className='explore-btn'
            >
              Explore Courses <RiArrowDropRightFill className='arrow'></RiArrowDropRightFill>
            </Link>
        </div>
    );
};

export default Home;