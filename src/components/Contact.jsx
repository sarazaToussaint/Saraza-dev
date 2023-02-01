import React from 'react';
import {
  FaRegEnvelope, FaGlobe, FaMapMarkerAlt, FaPhoneVolume,
} from 'react-icons/fa';
import classes from './Contact.module.css';

const Contact = () => (
  <>
    <div className={classes.contactContainer}>
      <h2>Contact me</h2>
      <div className={classes.contactDetails}>
        <div className={classes.info}>
          <span><FaPhoneVolume /></span>
          <div>Phone</div>
          <p>(+250) 737826799</p>
        </div>
        <div className={classes.info}>
          <span><FaMapMarkerAlt /></span>
          <div>Location</div>
          <p>Rwanda Kigali 500 St</p>
        </div>
        <div className={classes.info}>
          <span><FaRegEnvelope /></span>
          <div>Email</div>
          <p>tmsaraza@gmail.com</p>
        </div>
        <div className={classes.info}>
          <span><FaGlobe /></span>
          <div>Website</div>
          <p>saraza.netlify.app</p>
        </div>
      </div>

      <div className={classes.formContainer}>
        <div>Send me an email</div>
        <form>
          <div className={classes.firstRow}>
            <input type="text" placeholder="Full name" size="30" />
            <input type="email" placeholder="Email" size="30" />
          </div>
          <div>
            <input className={classes.subject} type="text" placeholder="subject" size="64" />
          </div>
          <div>
            <textarea type="text" placeholder="Your message" rows="5" cols="66" />
          </div>
          <button type="submit">Send Message</button>
        </form>
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
