import PropTypes from 'prop-types';
import React from 'react';
import Slider from 'react-slick';

const slider = ({ items, children }) => {
  const settings = {
    infinite: false,
    speed: 700,
    slidesToShow: items,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: items
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  };

  return <Slider {...settings}>{children}</Slider>;
};

slider.defaultProps = {
  items: 4
};

slider.propTypes = {
  items: PropTypes.number
};

export default slider;
