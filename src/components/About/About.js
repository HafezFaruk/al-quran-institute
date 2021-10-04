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
                            <p>BEACON IT was established in 2008 with a view to developing skilled resources for the IT industry in the Bangladesh. BEACON IT which is a dynamic and fast growing IT Training provider. Be an IT professional from BEACON IT.</p>
                            <p>BEACON IT is the only one specialized institute for Outsourcing and IT professional training in Chittagong. We are providing Career oriented professional training in Bangladesh since 2008</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;