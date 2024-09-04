import React from 'react';
import '../Banner/Banner.css'; 
import bannerImage from '../../Images/img1.jpg'; 

function Banner() {
  return (
    <div className="banner">
      <img src={bannerImage} alt="Banner" className="banner-image" />
      <div className="banner-overlay"></div>
      <div className="banner-text">
        <h1>Residencial Los Robles</h1>
        <p>Conectados en comunidad</p>
      </div>
    </div>
  );
}

export default Banner;
