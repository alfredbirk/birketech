import React from 'react'
import avatar from '../Header/small.png';

import "./About.css";

import Fade from 'react-reveal/Fade'; 

 const About = () => {
    return (
        <Fade bottom duration={900}>
            <div className="about">
                <div className="about__container">
                    <img className="about__image" src={avatar} alt="Avatar" />
                    <div>
                        <h2>Hi, I'm Alfred Birketvedt</h2>
                        <p>I'm a passionate full-stack developer currently working at Netlight.</p>
                    </div>
                </div>
            </div>
        </Fade>
    )
}

export default About;