import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import ShowInstructors from '../ShowInstructors/ShowInstructors';
import './Instructors.css'
import '../Footer/Footer.css'

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);
  
    useEffect(() => {
      fetch(
        "https://raw.githubusercontent.com/kiron0/fakeData-for-lucky-one/main/fakeData.json"
      )
        .then((res) => res.json())
        .then((data) => setInstructors(data));
    }, []);

    return (
        <div>
            <div className='instructors'>
            {
                instructors.map(instructor => <ShowInstructors ShowInstructors={instructor}></ShowInstructors>)
            }
        </div>
         <Footer></Footer>
        </div>
    );
};

export default Instructors;