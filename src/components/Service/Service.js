import React from 'react';
import './Service.css';
const Service = (props) => {
    const {title,instructor,image,price,department} =props.service;
    return (
            <div className="col-md-4">
                <div className="service mb-4 card-height">
                    <div className="card">
                        <img className="card-img-top" src={image} alt="" />
                        <div className="card-body">
                            <h6 className="title">{title}</h6>
                            <h5>{instructor}</h5>
                            <h5>${price}</h5>
                            <p>{department}</p>
                            <button className="btn btn-primary fs-5 py-2 w-100 text-white">Details</button> 
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Service;