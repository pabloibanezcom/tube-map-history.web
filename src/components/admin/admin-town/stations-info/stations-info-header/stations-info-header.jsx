import { LineBadge } from 'components/shared';
import React from 'react';
import { getLinesFromStation } from 'util/data';

const stationsInfoHeader = ({ element }) => {
  return (
    <div className="lines-info-header">
      <div className="d-flex justify-content-between">
        <div>{element.name}</div>
        <div>
          {getLinesFromStation(element).map(l => {
            return <LineBadge key={l._id} line={l} extraClass="ml-10" />;
          })}
        </div>
      </div>
    </div>
  );
};

export default stationsInfoHeader;
