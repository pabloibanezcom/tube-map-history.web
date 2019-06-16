import { Badge } from 'components/shared';
import React from 'react';
import { getContrastColor } from 'util/color';

const ColorSelected = (props) => {
  const { selectedOption } = props;
  return (
    <div className="filter-option">
      <div className="filter-option-inner">
        <div className="filter-option-inner-inner">
          {(selectedOption &&
            <Badge
              text={selectedOption.hex}
              backgroundColor={selectedOption.hex}
              fontColor={getContrastColor(selectedOption.hex)}
              block
              border
            />
          ) || 'Select a color'}
        </div>
      </div>
    </div>
  )
}

export default ColorSelected;