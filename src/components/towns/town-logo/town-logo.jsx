import React from 'react';
import londonLogo from '../../../assets/img/towns/london_logo.png';
import madridLogo from '../../../assets/img/towns/madrid_logo.png';
import newYorkLogo from '../../../assets/img/towns/new-york_logo.png';

const logos = {
  london: londonLogo,
  madrid: madridLogo,
  'new-york': newYorkLogo
}

const townLogo = (props) => {
  return <img alt="" src={logos[props.town.url]} />
}

export default townLogo;