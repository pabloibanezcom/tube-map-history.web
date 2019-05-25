import { Button } from 'components/shared';
import React from 'react';

const index = () => {
  return (
    <div className="showroom-index">
      <h1 className="right-line mb-4">Showroom</h1>
      <div className="row">
        <div className="col">
          <div className="showroom-element showroom-link">
            <Button
              to="/showroom/buttons"
              text="Buttons and Links"
              type="link"
              color="secondary"
            />
          </div>
        </div>
        <div className="col">
          <div className="showroom-element showroom-link">
            <Button
              to="/showroom/data-presentation"
              text="Data presentation"
              type="link"
              color="secondary"
            />
          </div>
        </div>
        <div className="col">
          <div className="showroom-element showroom-link">
            <Button
              to="/showroom/inputs"
              text="Inputs"
              type="link"
              color="secondary"
            />
          </div>
        </div>
        <div className="col">
          <div className="showroom-element showroom-link">
            <Button
              to="/showroom/layout"
              text="Layout"
              type="link"
              color="secondary"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;