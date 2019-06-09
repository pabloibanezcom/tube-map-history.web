import { Badge } from 'components/shared';
import React from 'react';

const LineBadge = (props) => {
  const { line } = props;
  return (
    <Badge
      text={line.name}
      backgroundColor={line.colour}
      fontColor={line.fontColour}
    />
  )
}

export default LineBadge;