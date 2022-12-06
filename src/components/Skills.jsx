import React from 'react';
import Carousel from 'nuka-carousel';
import { RiSingleQuotesR, RiSingleQuotesL } from 'react-icons/ri';
import data from './database/data.json';
import styles from './About.module.css';

const Skills = () => (
  <div className={styles.recommendation}>
    <h2 className={styles.title}>People&apos;s Feedback</h2>
    <div className="carouselContainer">
      <Carousel
        autoplay="true"
        wrapAround="true"
        adaptiveHeight="true"
        cellSpacing={50}
        pauseOnHover="true"
        autoplayInterval={8000}
        slidesToShow={1}
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
          <div key={item.id} className={styles.letter}>
            <div className={styles.head}>
              <img className={styles.recomendImg} src={item.photo} alt={item.name} />
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
