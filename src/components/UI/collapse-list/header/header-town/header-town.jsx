import React from 'react';
import { getImage } from 'shared/image';

const headerTown = ({ element }) => {
  return <div className="collapse-header-town">
    <img className="country-flag" alt={element.country.code} src={getImage(`countries/${element.country.code.toLowerCase()}.png`, 'countries/gb.png')} />
    <span className="country-name">{element.name}</span>
  </div>
}

export default headerTown;