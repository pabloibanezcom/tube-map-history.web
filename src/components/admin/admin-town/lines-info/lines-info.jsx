import { Button, CollapseList } from 'components/shared';
import React from 'react';
import LinesInfoContent from './lines-info-content/lines-info-content';
import LinesInfoHeader from './lines-info-header/lines-info-header';

const linesInfo = props => {
  const { lines, viewLineStations, onAddLine, onEditLine, onDeleteLine } = props;
  return (
    <div className="lines-info">
      <div className="d-flex justify-content-end mb-30">
        <Button text="Add line" icon="add" outline onClick={onAddLine} />
      </div>
      <CollapseList
        elements={lines}
        hoverType="secondary"
        header={LinesInfoHeader}
        content={LinesInfoContent}
        actions={{ viewLineStations, onEditLine, onDeleteLine }}
        {...props}
      />
    </div>
  );
};

export default linesInfo;
