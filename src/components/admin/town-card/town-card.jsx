import { Badge, CountryLabel, Icon } from 'components/shared';
import PropTypes from 'prop-types';
import React from 'react';

const TownCard = ({ town: { name, imgCard, country, year }, type, className }) => {
  return (
    <div className={`town-card town-card-${type} ${className}`}>
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
          {type === 'town' ? (
            <div className="town-counters">
              <span className="counter-number">2</span>
              <Icon
                name="person"
                size="sm"
              />
            </div>
          ) :
            (
              <div className="draft-counters">
                <span className="counter-number">11</span>
                <Icon
                  name="lines"
                  size="sm"
                />
                <span className="counter-number">148</span>
                <Icon
                  name="tube-logo"
                  size="sm"
                />
              </div>
            )}
        </div>
      </div>
    </div>
  )
}

TownCard.defaultProps = {
  className: '',
  type: 'town'
};

TownCard.propTypes = {
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
  type: PropTypes.oneOf(['published', 'draft', 'town']),
  className: PropTypes.string
};

export default TownCard;
