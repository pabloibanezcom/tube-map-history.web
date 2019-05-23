import { Link } from 'components/shared';
import React from 'react';

const index = () => {
  return (
    <div className="showroom-index">
      <h1 className="right-line mb-4">Showroom</h1>
      <div className="row">
        <div className="col-lg-4">
          <div className="showroom-element showroom-link">
            <Link
              to="/showroom/buttons"
              text="Buttons and Links"
              type="Link"
            />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="showroom-element showroom-link">
            <Link
              to="/showroom/data-presentation"
              text="Data presentation"
              type="Link"
            />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="showroom-element showroom-link">
            <Link
              to="/showroom/inputs"
              text="Inputs"
              type="Link"
            />
          </div>
        </div>
        <div className="col-lg-4">
          <div className="showroom-element showroom-link">
            <Link
              to="/showroom/layout"
              text="Layout"
              type="Link"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;