import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import React from 'react';

const Handle = Slider.Handle;

const yearSelector = (props) => {

  const handle = (props) => {
    const { value, dragging, index, ...restProps
    } = props;

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
    if (props.year !== value) {
      props.onYearChange(value);
    }
  }

  return (
    <div className={`year-selector ${props.showYearSelector ? 'shown' : 'hidden'}`}>
      <div className="year-selector-wrapper">
        <div className="current-year">Year <span className="year">{props.year}</span></div>
        <Slider min={1853} max={2018} defaultValue={props.year} handle={handle} onAfterChange={(val) => handleChange(val)} />
      </div>
    </div>
  )
}

export default yearSelector;
