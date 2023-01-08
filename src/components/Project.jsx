import React from 'react';
import Carousel from 'nuka-carousel';
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';
import { VscSourceControl } from 'react-icons/vsc';
import { GiMeshNetwork } from 'react-icons/gi';
import data from './database/data.json';
import styles from './Project.module.css';

const Project = () => (
  <>
    <section className={styles.projectsContainer}>
      <div className={styles.projectsCarousel}>
        <Carousel
          className={styles.container2}
          wrapAround="true"
          adaptiveHeight="true"
          cellSpacing={50}
          pauseOnHover="true"
          slidesToShow={1}
          autoplay="true"
          autoplayInterval={5000}
          defaultControlsConfig={{
            nextButtonText: <FaArrowCircleRight className={styles.arrow} />,
            prevButtonText: <FaArrowCircleLeft className={styles.arrow} />,
            pagingDotsStyle: {
              fill: '#89cdbe',
            },
          }}
        >
          {data.data.projects.map((project) => (
            <div key={project.id} className={styles.projects}>
              <img src={project.image} className={styles.projectImg} alt={project.name} />
              <div className="d-flex flex-column">
                <div className="card-body d-flex flex-column m-3">
                  <h3 className="card-title">{project.name}</h3>
                  <div className="d-flex flex-row gap-3 my-2 spans">
                    {project.spans.map((s) => (
                      <span key={s.id}>{s.span}</span>
                    ))}
                  </div>
                  <p className="card-text">{project.description}</p>
                </div>
                <ul className={styles.tools}>
                  {project.tools.map((tool) => (
                    <li key={tool.id} className="list-group p-1 m-1 border">{tool.lang}</li>
                  ))}
                </ul>
                <div className="d-flex flex-row mt-2 mb-5">
                  <div className="card-btns rounded-pill">
                    <a href={project.liveLink} target="_blank" rel="noreferrer" className="btn live btn-bg">
                      live
                      {' '}
                      <GiMeshNetwork />
                    </a>
                    <a href={project.sourceLink} target="_blank" rel="noreferrer" className="btn source btn-bg">
                      source
                      {' '}
                      <VscSourceControl />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>

    <div>
      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s
           58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
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

export default Project;
