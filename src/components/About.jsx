/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import Modal from 'react-overlays/Modal';
import data from './database/data.json';
import Skills from './Skills';
import styles from './About.module.css';

const About = () => {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  // eslint-disable-next-line react/jsx-props-no-spreading
  const renderBackdrop = (props) => <div className="backdrop" {...props} />;

  return (
    <section className="about-container bubbles">
      <div className="photo">
        <img className="dev-img" src={data.data.devPhoto} alt={data.data.developer} />
      </div>
      <div className="bio">
        <h1 className="about-title">{data.data.occupation}</h1>
        <p>
          Hey,
          I&apos;m
          <span className="name">
            {' '}
            {data.data.developer}
            {' '}
          </span>
          a self-motivated and goal orientated individual with a degree
          in Computer Science from Kigali Independent University.
          I have worked on a variety of fullstack projects when studied at Microverse and
          now open to fulltime opportunities. I have a demonstrated history
          of both leading and working in teams, along with good time management skills.
        </p>
        <button type="button" onClick={() => setShowModal(true)} className="btn btn-primary">See More</button>
      </div>

      <Modal
        className={styles.modal}
        show={showModal}
        onHide={handleClose}
        renderBackdrop={renderBackdrop}
      >
        <div
          <div className={styles.modalHeader}>
            <div className={styles.modalTitle}>About Me</div>
          <div className="modal-header">
            <div className="modal-title">About me</div>
            <div>
              <span className={styles.closeButton} onClick={handleClose} onKeyDown>
                x
              </span>
            </div>
          </div>
          <div className={styles.modalDesc}>
            <div className="bio">
              <h1 className="about-title">{data.data.occupation}</h1>
              <p>
                Hey,
                I&apos;m
                <span className="name">
                  {' '}
                  {data.data.developer}
                  {' '}
                </span>
                a self-motivated and goal orientated individual with a degree
                in Computer Science from Kigali Independent University.
                I have worked on a variety of fullstack projects when studied at Microverse and
                now open to fulltime opportunities. I have a demonstrated history
                of both leading and working in teams, along with good time management skills.
              </p>
              <div className={styles.resume}>
                <a href="https://docs.google.com/document/d/1Gz_HMGGmernqwVFcTqWqM7A8Fy9NqvI6YBc1dQSPPWI/edit" target="_blank" rel="noreferrer">Check my Resume</a>
              </div>
            </div>
            <Skills />
          <div className="modal-desc">
            a self-motivated and goal orientated individual with a degree
            in Computer Science from Kigali Independent University.
            I have worked on a variety of fullstack projects when studied at Microverse and
            now open to fulltime opportunities. I have a demonstrated history
            of both leading and working in teams, along with good time management skills.
            a self-motivated and goal orientated individual with a degree
            in Computer Science from Kigali Independent University.
          </div>
          <div className="modal-footer">
            <button type="button" className="secondary-button" onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default About;
