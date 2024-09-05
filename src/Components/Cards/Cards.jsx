import React from "react";
import '../Cards/Cards.css';

export default function Cards({source, description}){
    return (
        <div className="container-card">
             <img src={`${process.env.PUBLIC_URL}/Images/${source}`} alt="imagen del desarrollo "  className="card-image"/>
             <p className="card-description">{description}</p>
             <div className="card-overlay"></div>
        </div>
    );
}
