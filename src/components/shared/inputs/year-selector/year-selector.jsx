import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import React from 'react';

const Handle = Slider.Handle;

const yearSelector = (props) => {

  const { onYearChange, showYearSelector, year } = props;

  const handle = (_props) => {
    const { value, dragging, index, ...restProps
    } = _props;

    return (
      <Tooltip
        prefixCls="rc-slider-tooltip"
        overlay={value}
        visible={dragging}
        placement="top"
        key={index}
      >
        <Handle value={value} {...restProps} />
      </Tooltip>
    );
  };

  const handleChange = (value) => {
    if (year !== value) {
      onYearChange(value);
    }
  }

  return (
    <div className={`year-selector ${showYearSelector ? 'shown' : 'hidden'}`}>
      <div className="year-selector-wrapper">
        <div className="current-year">Year <span className="year">{year}</span></div>
        <Slider min={1853} max={2019} defaultValue={year} handle={handle} onAfterChange={(val) => handleChange(val)} />
      </div>
    </div>
  )
}

export default yearSelector;
