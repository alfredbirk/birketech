import React from 'react'
import avatar from '../Header/small.png';

import "./About.css";


 const About = () => {
    return (
        <div className="about">
            <div className="about__container">
                <img className="about__image" src={avatar} alt="Avatar" />
                <div>
                    <h2>Hi, I'm Alfred Birketvedt</h2>
                    <p>I'm a passionate full-stack developer currently working at Netlight.</p>
                </div>
            </div>
        </div>
    )
}

export default About;