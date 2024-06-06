import React from 'react';
import './home.css';
import Image1 from '../SvgFiles/Image1';
import Image2 from '../SvgFiles/Image2';
import Image3 from '../SvgFiles/Image3';
import Branding from '../SvgFiles/Branding';
import Nine20Files from '../SvgFiles/Nine20Files';
import Container from '../SvgFiles/Container';

export default function Home() {
    return (
        <>
            <div className="home-container">
                <div className="left-content">
                    <h1>Stay ahead of the <br /> curve with our <br />forward-thinking</h1>
                    <h6>An award-winning SEO agency with disciplines in digital marketing, design, and website development. Focused on understanding you.</h6>
                    <button className="schedule-call">Schedule Call</button>
                    <a href="#" className="case-study-link">View Case Study</a>
                    <div className="brands-logos">
                        <Branding />
                    </div>
                </div>
                <div className="right-content">
                    <div className="right-top">
                        <Image1 />
                        <Image2 />
                    </div>
                    <div className="right-bottom">
                        <Image3 />
                    </div>
                </div>
            </div>
            <div className="additional-content">
                <h1>Provide the best service with out of the box ideas</h1>
                <h6>We are a passionate team of digital marketing enthusiasts dedicated to helping businesses succeed in the digital world. With years of experience and a deep understanding of the ever-evolving online landscape, we stay at the forefront of industry trends and technologies.</h6>
                <Nine20Files />
            </div>
        </>
    );
}
