import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
const About = () => {
    return (
        <div>
            <div className="container">
            <div className="row text-center py-5">
                        <div className="col section-title text-center">
                            <h2>About Us</h2>
                            <Breadcrumb>
                                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                <Breadcrumb.Item href="" active>
                                About Us
                                </Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                    </div>
                <div className="row text-left my-5">
                    <div className="col">
                        <div className="about-left">
                            <h3 className="my-5">Our acquaintance</h3>
                            <p>The main goal and objective of Al-Quran Institute is to develop the day-to-day activities along with making Deendar Allawala.</p>
                            <p>The second objective is to increase the practice of Qur'an and Hadith at all levels, both at home and abroad, online and offline.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;