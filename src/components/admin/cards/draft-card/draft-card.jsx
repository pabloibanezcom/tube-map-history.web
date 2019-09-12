import { Badge, CountryLabel, Icon } from 'components/shared';
import PropTypes from 'prop-types';
import React from 'react';

const DraftCard = ({ lines, stations, town: { name, imgCard, country, year }, type, className }) => {
  return (
    <div className={`draft-card town-card-${type} ${className}`}>
      <div>
        <img className="town-img" src={imgCard} alt={name} />
      </div>
      <div className="info-panel flex flex-space-between p-10">
        <div>
          <div className="town-name">{name}</div>
          <div><CountryLabel country={country} /></div>
        </div>
        <div className="text-right">
          <Badge
            text={year}
            color={type === 'published' ? 'secondary' : 'primary'}
          />
          <div className="draft-counters">
            <span className="counter-number">{lines}</span>
            <Icon
              name="lines"
              size="sm"
            />
            <span className="counter-number">{stations}</span>
            <Icon
              name="tube-logo"
              size="sm"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

DraftCard.defaultProps = {
  lines: 0,
  stations: 0,
  className: '',
  type: 'town'
};

DraftCard.propTypes = {
  lines: PropTypes.number,
  stations: PropTypes.number,
  town: PropTypes.shape({
    name: PropTypes.string,
    imgCard: PropTypes.string,
    year: PropTypes.number,
    alias: PropTypes.string,
    country: PropTypes.shape({
      code: PropTypes.string,
      name: PropTypes.string
    })
  }).isRequired,
  type: PropTypes.oneOf(['published', 'draft']),
  className: PropTypes.string
};

export default DraftCard;
