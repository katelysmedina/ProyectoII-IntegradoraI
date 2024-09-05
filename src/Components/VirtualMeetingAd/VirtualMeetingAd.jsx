import React from 'react';
import './VirtualMeetingAd.css'; 
import MeetingImage from '../../Images/img8.jpg'

const VirtualMeetingAd = () => {
  return (
    <div className="virtual-meeting-ad">
      <div className="virtual-meeting-content">
        <h2 className="meeting-title">Reuniones a tu alcance</h2>
        <p className="meeting-description">
          Accede a todas las grabaciones de nuestras reuniones y mantente al tanto de lo que sucede en tu comunidad.
        </p>
        <button
          className="meeting-button"
          onClick={() => window.location.href='/#videoconferencias'}
        >
          Ver reuniones virtuales
        </button>
      </div>
      <img src={MeetingImage} alt="Meeting" className="meeting-image" />
    </div>
  );
};

export default VirtualMeetingAd;
