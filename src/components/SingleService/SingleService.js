import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './SingleService.css'
const SingleService = () => {
    const [services,setServices] = useState([]);
    let size = 4;
    useEffect(()=>{
        fetch(`https://raw.githubusercontent.com/HafezFaruk/data/main/fakedata.json`)
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <div className="container">
                <div className="row text-center py-5">
                        <div className="col section-title text-center">
                            <h2>Services</h2>
                        </div>
                </div>
                <div className="row">
                    {
                        services.slice(0,size).map((pd)=>(

                    <div className="col-md-3">
                        <div className="service mb-4 card-border">
                            <div className="card">
                                <img className="card-img-top" src={pd.image} alt="" />
                                <div className="card-body">
                                    <h6 className="title">{pd.title}</h6>
                                    <h5>{pd.instructor}</h5>
                                    <h5>${pd.price}</h5>
                                    <p>{pd.department}</p>
                                    <button className="btn btn-primary fs-5 py-2 w-100 text-white">Details</button> 
                                </div>
                            </div>
                        </div>
                    </div>
                     ))}
                </div>
            </div>
        </div>
    );
};

export default SingleService;