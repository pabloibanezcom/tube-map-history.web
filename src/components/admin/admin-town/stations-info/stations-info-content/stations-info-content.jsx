import { Badge, Button, InfoElement, LineBadge } from 'components/shared';
import React from 'react';

const stationsInfoContent = ({ element }) => {
  return (
    <div className="lines-info-content">
      <div className="row mb-20">
        <div className="col-lg-6 col-md-6">
          <h4 className="secondary right-line right-line-secondary mb-20">Station info</h4>
          <div className="row">
            <div className="col-md-12">
              <InfoElement
                name="Name"
                value={element.name}
              />
              <InfoElement
                name="Year"
                value={<Badge text={element.year} />}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <h4 className="secondary right-line right-line-secondary mb-20">Connections</h4>
          {element.connections.sort((a, b) => a.year - b.year).map(c => {
            return (
              <div key={c._id}>
                <div className="d-flex justify-content-between pl-10 mb-5 " style={{ borderLeftWidth: 5, borderLeftStyle: 'solid', borderLeftColor: c.line.colour }}>
                  <div>
                    <span className="primary mr-20">{c.year}</span>
                    <span className="mr-20">{c.stations.find(s => s._id !== element._id).name}</span>
                  </div>
                  <div>
                    <LineBadge line={c.line} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 mb-sm-10">
          <Button
            color="secondary"
            text="Edit station"
            inverse
          />
        </div>
        <div className="col-md-4 mb-sm-10 offset-md-4">
          <Button
            color="secondary"
            text="Delete station"
            outline
            inverse
          />
        </div>
      </div>
    </div>
  )
}

export default stationsInfoContent;