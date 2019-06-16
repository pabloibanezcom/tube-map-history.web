import { Button } from 'components/shared';
import React from 'react';

const layout = () => {
  return (
    <div className="showroom-layout">
      <h1 className="right-line mb-4">Layout</h1>
      <div className="row">
        <div className="col">
          <div className="showroom-element showroom-link">
            <Button
              to="/showroom/layout/modals"
              text="Modals"
              type="link"
              color="secondary"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default layout;