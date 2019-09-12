import { CountryLabel } from 'components/shared';
import React from 'react';
import countriesArr from './countries-collection.json';

const countryLabels = () => {
  return (
    <div className="showroom-buttons">
      <h1 className="right-line mb-4">Country labels</h1>
      <div className="row">
        {countriesArr.sort().map(country => {
          return (
            <div className="col-2" key={country.code}>
              <div className="showroom-element">
                <div>
                  <CountryLabel
                    country={country}
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default countryLabels;