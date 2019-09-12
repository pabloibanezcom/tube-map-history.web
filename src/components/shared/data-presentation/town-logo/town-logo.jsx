import londonLogo from 'assets/img/towns/london_logo.png';
import madridLogo from 'assets/img/towns/madrid_logo.png';
import newYorkLogo from 'assets/img/towns/new-york_logo.png';
import stockholmLogo from 'assets/img/towns/stockholm_logo.png';
import React from 'react';

const logos = {
  'london': londonLogo,
  'madrid': madridLogo,
  'new-york': newYorkLogo,
  'stockholm': stockholmLogo
}

const townLogo = ({ townUrl }) => {
  return <img alt="" src={logos[townUrl]} />
}

export default townLogo;