import React from 'react';
import Carousel from 'nuka-carousel';
import { RiSingleQuotesR, RiSingleQuotesL } from 'react-icons/ri';
import data from './database/data.json';

const Skills = () => (
  <div className="recommendation">
    <div className="carousel-container">
      <Carousel
        autoplay="true"
        wrapAround="true"
        adaptiveHeight="true"
        cellSpacing={50}
        pauseOnHover="true"
        autoplayInterval={5000}
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
