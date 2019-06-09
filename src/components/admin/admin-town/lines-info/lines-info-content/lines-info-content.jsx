import { Badge, Button, InfoElement } from 'components/shared';
import React from 'react';

const linesInfoContent = ({ element }) => {
  return (
    <div className="lines-info-content">
      <div className="row mb-20">
        <div className="col-lg-6 col-md-8">
          <h4 className="secondary right-line right-line-secondary mb-20">Line info</h4>
          <div className="row">
            <div className="col-md-6">
              <InfoElement
                name="Name"
                value={element.name}
              />
              <InfoElement
                name="Year"
                value={element.year}
              />
              <InfoElement
                name="Stations"
                value={element.stationsAmount}
              />
              <InfoElement
                name="Distance"
                value={element.distance}
              />
            </div>
            <div className="col-md-6">
              <InfoElement
                name="Color"
                value={<Badge backgroundColor={element.colour} fontColor={element.fontColour} text={element.colour} />}
              />
              <InfoElement
                name="Font color"
                value={element.fontColour}
              />
            </div>
          </div>

        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-sm-10">
          <Button
            fontColor={element.fontColour}
            backgroundColor={element.colour}
            hover="primary"
            text="View stations"
          />
        </div>
        <div className="col-md-4 mb-sm-10">
          <Button
            color="secondary"
            text="Edit line"
            inverse
          />
        </div>
        <div className="col-lg-2 offset-lg-2 col-md-4 mb-sm-10">
          <Button
            color="secondary"
            text="Delete line"
            outline
            inverse
          />
        </div>
      </div>
    </div>
  )
}

export default linesInfoContent;