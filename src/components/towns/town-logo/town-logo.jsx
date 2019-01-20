import React from 'react';
import londonLogo from '../../../assets/img/towns/london_logo.png';
import madridLogo from '../../../assets/img/towns/madrid_logo.png';

const logos = {
  london: londonLogo,
  madrid: madridLogo
}

const townLogo = (props) => {
  return <img alt="" src={logos[props.town.url]} />
}

export default townLogo;