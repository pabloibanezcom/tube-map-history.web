import { Badge } from 'components/shared';
import React from 'react';

const badges = () => {
  return (
    <div className="showroom-buttons">
      <h1 className="right-line mb-4">Badges</h1>
      <div className="row">
        <div className="col">
          <div className="showroom-element">
            <label>Primary</label>
            <div>
              <Badge
                text="Some info"
                color="primary"
              />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="showroom-element">
            <label>Secondary</label>
            <div>
              <Badge
                text="Some info"
                color="secondary"
              />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="showroom-element">
            <label>Custom</label>
            <div>
              <Badge
                text="Some info"
                backgroundColor="#8a1717"
                fontColor="#ffffff"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default badges;