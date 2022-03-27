import React from 'react';
import './ShowInstructors.css'

const ShowInstructors = ({ShowInstructors}) => {
    const {instructor, image} = ShowInstructors;
    return (
        <div className='show-inst'>
            <img src={image} alt="" />
            <h3>{instructor}</h3>
        </div>
    );
};

export default ShowInstructors;