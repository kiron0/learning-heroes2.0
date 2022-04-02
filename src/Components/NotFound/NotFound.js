import React from 'react';
import './NotFound.css'
import {BiError} from 'react-icons/bi';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='not-found'>
            <h2>404 Not Found!</h2>
            <BiError className='error'></BiError>
            <p>The page you are looking for does not exist.</p>
            <Link className='go-back' to='/'>Go Back to Home</Link>
        </div>
    );
};

export default NotFound;