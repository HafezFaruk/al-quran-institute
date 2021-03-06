import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
    return (
        <div className="container">
            <div className="row text-center py-5">
                        <div className="col section-title text-center">
                            <h2>Contact</h2>
                            <Link to="/home">Home</Link>
                            <Link className="ms-2" to="/contact">Contact</Link>
                        </div>
                    </div>
            <section className="contact-area py-5">
                <div className="container">
                    <div className="section-title text-center text-uppercase py-3 mb-3">
                        <h2>Our Service From</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="contact">
                                <form>
                                    <div className="form-group">
                                    <div className="row mb-3">
                                        <div className="col-md-6 mb-3">
                                            <input type="text" className="form-control p-3" placeholder="Enter Your Name" />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="email" className="form-control p-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Your Email" />
                                        </div>
                                    </div>
                                    <div className="row mb-3">
                                        <div className="col-md-6 mb-3">
                                            <input type="tel" className="form-control p-3" placeholder="Enter Your Phone" />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="url" className="form-control p-3 " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Web Site" />
                                        </div>
                                    </div>
                                    </div>
                                    <input type="text" className="form-control mb-3 p-3 " placeholder="Subject" />
                                    <textarea className="form-control mb-3 p-3 " name="" id="" cols="30" rows="10">Message</textarea>
                                    <button type="submit" className="btn btn-primary fs-4">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;