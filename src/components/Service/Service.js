import React from 'react';
import './Service.css';

const Service = (props) => {
    const {title,instructor,image,price,department} =props.service;
    return (
            <div className="col-md-4">
                <div className="service mb-4">
                    <div className="card">
                        <img className="card-img-top" src={image} alt="" />
                        <div className="card-body">
                            <h4>{title}</h4>
                            <h5>{instructor}</h5>
                            <h5>{price}</h5>
                            <p>{department}</p>
                            <button className="btn theme-bg text-white">Details</button> 

                        </div>
                        </div>
                </div>
            </div>
    );
};

export default Service;