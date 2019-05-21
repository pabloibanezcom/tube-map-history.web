import londonLogo from 'assets/img/towns/london_logo.png';
import madridLogo from 'assets/img/towns/madrid_logo.png';
import newYorkLogo from 'assets/img/towns/new-york_logo.png';
import React from 'react';

const logos = {
  london: londonLogo,
  madrid: madridLogo,
  'new-york': newYorkLogo
}

const townLogo = (props) => {
  const { town } = props;
  return <img alt="" src={logos[town.url]} />
}

export default townLogo;