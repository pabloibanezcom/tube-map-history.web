import { Link } from 'components/shared';
import React from 'react';

const townContent = ({ element }) => {

  return (
    <div className="collapse-content-town">
      <div className="row">
        <div className="col-lg-6">
          <div className="content-town-info">
            <div className="header--md">Town info</div>
            <div className="content-element">
              <div className="content-element__title">Name</div>
              <div className="content-element__value">{element.name}</div>
            </div>
            <div className="content-element">
              <div className="content-element__title">Country</div>
              <div className="content-element__value">{element.country.name}</div>
            </div>
            <div className="content-element">
              <div className="content-element__title">Alias</div>
              <div className="content-element__value">{element.alias}</div>
            </div>
            <div className="content-element">
              <div className="content-element__title">Year</div>
              <div className="content-element__value">{element.year}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-offset-4 col-lg-4">
          <Link
            to={`/admin/town/${element.url}`}
            text="View town"
            type="Button"
          />
        </div>
      </div>
    </div>
  )
}

export default townContent;