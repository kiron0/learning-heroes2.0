import React from 'react';
import Me from './images/me.jpg'
import './About.css'

const About = () => {
    return (
        <div className='about'>
                <div className="background">
        <div className="shape" id="shape1"></div>
        <div className="shape" id="shape2"></div>
    </div>
    <div className="wrapper">
        <div className="img-area">
        <div className="inner-area">
        <img src={Me} alt="" />
            </div>
        </div>

     <div className="name">Toufiq Hasan Kiron</div>
     <div className="about">WEB | APP | UI/UX</div>
     <div className="social-icons">
       <a target="_blank" rel="noreferrer noopener" href="https://www.instagram.com/toufiq_hasan_kiron/" className="insta"><i className="fab fa-instagram"></i></a>
       <a target="_blank" rel="noreferrer noopener" href="https://www.facebook.com/toufiqhasankiron/" className="facebook"><i className="fab fa-facebook"></i></a>
       <a target="_blank" rel="noreferrer noopener" href="https://github.com/kiron0" className="github"><i className="fab fa-github"></i></a> 
       <a target="_blank" rel="noreferrer noopener" href="https://t.me/ToufiqHasanKiron" className="telegram"><i className="fab fa fa-telegram"></i></a>

     </div>

     <div className="buttons">
       <button><a target="_blank" rel="noreferrer noopener" href="https://m.me/toufiqhasankiron">Message</a></button>
       
       <button><a target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/toufiq-hasan-kiron/">Follow</a></button>
     </div>

   </div>

        </div>
    );
};

export default About;