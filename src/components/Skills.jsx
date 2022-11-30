import React from 'react';
import Carousel from 'nuka-carousel';
import { RiSingleQuotesR, RiSingleQuotesL } from 'react-icons/ri';
import data from './database/data.json';
import styles from './About.module.css';

const Skills = () => (
  <div className={styles.recommendation}>
    <h1 className={styles.title}>Peoples Feedback</h1>
    <div className="carouselContainer">
      <Carousel
        autoplay="true"
        wrapAround="true"
        adaptiveHeight="true"
        cellSpacing={50}
        pauseOnHover="true"
        autoplayInterval={9000}
        slidesToShow={2}
        swiping="true"
        defaultControlsConfig={{
          nextButtonText: null,
          prevButtonText: null,
          pagingDotsStyle: {
            fill: '#3f3f3f',
          },
        }}
      >
        {data.data.recommendations.map((item) => (
          <div key={item.id} className="letter d-flex flex-column">
            <div className="d-flex flex-row">
              <img className="rounded-circle recomend-img" src={item.photo} alt={item.name} />
              <div className="recomand-header align-items-center m-2">
                <h4>{item.name}</h4>
                <p>{item.occupation}</p>
              </div>
            </div>
            <p className="reco-letter">
              <RiSingleQuotesL className="qoute" />
              {' '}
              {item.recommend}
              <RiSingleQuotesR className="qoute" />
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  </div>
);

export default Skills;
