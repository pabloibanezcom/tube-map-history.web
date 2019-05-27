import { Icon } from 'components/shared';
import React from 'react';
import * as iconsArr from './icons-collection.json';

const icons = () => {
  return (
    <div className="showroom-buttons">
      <h1 className="right-line mb-4">Icons</h1>
      <div className="row">
        {iconsArr.sort().map(icon => {
          return (
            <div className="col-1" key={icon}>
              <div className="showroom-element">
                <label>{icon}</label>
                <div>
                  <Icon
                    name={icon}
                    color="secondary"
                    size="lg"
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

export default icons;