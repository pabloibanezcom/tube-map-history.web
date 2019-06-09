import { CollapseList } from 'components/shared';
import React from 'react';
import LinesInfoContent from './lines-info-content/lines-info-content';
import LinesInfoHeader from './lines-info-header/lines-info-header';

const linesInfo = (props) => {
  const { lines } = props;
  return (
    <div className="lines-info">
      <CollapseList
        elements={lines}
        hoverType="secondary"
        header={LinesInfoHeader}
        content={LinesInfoContent}
      />
    </div>
  )
}

export default linesInfo;