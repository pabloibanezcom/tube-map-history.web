import { Button } from 'components/shared';
import React from 'react';

const dataPresentation = () => {
  return (
    <div className="showroom-data-presentation">
      <h1 className="right-line mb-40">Data presentation</h1>
      <div className="row">
        <div className="col">
          <div className="showroom-element showroom-link">
            <Button
              to="/showroom/data-presentation/collapses"
              text="Collapses"
              type="link"
              color="secondary"
            />
          </div>
        </div>
        <div className="col">
          <div className="showroom-element showroom-link">
            <Button
              to="/showroom/data-presentation/badges"
              text="Badges"
              type="link"
              color="secondary"
            />
          </div>
        </div>
        <div className="col">
          <div className="showroom-element showroom-link">
            <Button
              to="/showroom/data-presentation/loading-spinners"
              text="Loading spinners"
              type="link"
              color="secondary"
            />
          </div>
        </div>
        <div className="col">
          <div className="showroom-element showroom-link">
            <Button
              to="/showroom/data-presentation/paginations"
              text="Paginations"
              type="link"
              color="secondary"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default dataPresentation;