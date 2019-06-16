import { Badge } from 'components/shared';
import React from 'react';

const LineBadge = (props) => {
  const { line, extraClass } = props;
  console.log(line);
  return (
    <Badge
      text={line.shortName}
      backgroundColor={line.colour}
      fontColor={line.fontColour}
      extraClass={extraClass}
    />
  )
}

export default LineBadge;