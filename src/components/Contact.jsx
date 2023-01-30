import React from 'react';

const Contact = () => (
  <>
    <h1 className="contact">
      Contact
    </h1>
    <div className="contact-container">
      <div className="contact-details">
        <div>
          <span>Logo</span>
          <h4>Phone</h4>
          <h6>(+250) 737826799</h6>
        </div>
        <div>
          <span>Logo</span>
          <h4>Location</h4>
          <h6>Rwanda/Kigali Kg 500 St</h6>
        </div>
        <div>
          <span>Logo</span>
          <h4>Email</h4>
          <h6>tmsaraza@gmail.com</h6>
        </div>
        <div>
          <span>Logo</span>
          <h4>Website</h4>
          <h6>(+250) 737826799</h6>
        </div>
      </div>

      <div className="form-container">
        <form></form>
      </div>
    </div>
    <div className="waves-container">
      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g className="parallax">
          <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
          <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
          <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
          <use xlinkHref="#gentle-wave" x="48" y="7" fill="#0693e3" />
        </g>
      </svg>
    </div>
  </>
);

export default Contact;
