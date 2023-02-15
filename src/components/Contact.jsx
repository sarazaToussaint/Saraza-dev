import { React, useState } from 'react';
import {
  FaRegEnvelope, FaGlobe, FaMapMarkerAlt, FaPhoneVolume,
} from 'react-icons/fa';
import classes from './Contact.module.css';

function Contact() {
  const [data, setData] = useState({
    fullname: '',
    email: '',
    object: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (data.fullname && data.email && data.object && data.message) {
      fetch('https://formspree.io/f/mqknlo', {
        method: 'POST',
        body: JSON.stringify({ data }),
        headers: { 'Content-Type': 'application/json' },
      }).then((res) => res.json()).catch((error) => console.log(error)); // eslint-disable-line
    }

    const capitalize = ([first = '', ...rest]) => [first.toUpperCase(), ...rest].join('');

  alert(`Your message sent succsufully, Thank you ${capitalize(data.fullname)} !!`); // eslint-disable-line

    // setTimeout(() => {
    //   navigate('/');
    // }, 2000);

    setData({
      fullname: '',
      email: '',
      object: '',
      message: '',
    });
  };

  return (
    <>
      <div className={classes.contactContainer}>
        <h2>
          Get in touch
          <div />
        </h2>
        <div className={classes.contactDetails}>
          <div className={classes.info}>
            <span><FaPhoneVolume /></span>
            <div>Phone</div>
            <p>(+250) 737826799</p>
          </div>
          <div className={classes.info}>
            <span><FaMapMarkerAlt /></span>
            <div>Location</div>
            <p>Rwanda Kigali 50 St</p>
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
          <div className={classes.formTitle}>Send me an email!</div>
          <form onSubmit={handleSubmit} action="https://formspree.io/f/mqknl" method="post">
            <div className={classes.firstRow}>
              <input
                type="text"
                name="fullname"
                id="fullname"
                value={data.fullname}
                placeholder="Full name"
                size="30"
                onChange={(e) => setData({ ...data, fullname: e.target.value })}
                required
              />
              <input
                type="email"
                name="email"
                id="email"
                value={data.email}
                placeholder="Email"
                size="30"
                onChange={(e) => setData({ ...data, email: e.target.value })}
                required
              />
            </div>
            <div>
              <input
                className={classes.subject}
                type="text"
                value={data.object}
                name="object"
                id="object"
                placeholder="subject"
                size="64"
                onChange={(e) => setData({ ...data, object: e.target.value })}
                required
              />
            </div>
            <div>
              <textarea
                type="text"
                name="message"
                id="message"
                value={data.message}
                placeholder="Your message"
                rows="3"
                cols="66"
                onChange={(e) => setData({ ...data, message: e.target.value })}
                required
              />
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
}

export default Contact;
