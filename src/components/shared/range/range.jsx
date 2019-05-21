import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import React from 'react';
import Toggle from '../toggle/toggle';

const SliderRange = Slider.Range;
const Handle = Slider.Handle;

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      placement="bottom"
      key={index}
    >
      <Handle value={value} {...restProps} />
    </Tooltip>
  );
};

class Range extends React.Component {

  constructor(props) {
    super(props);
    const { config } = this.props;
    this.state = {
      show: config.enabled,
      min: config.min,
      max: config.max,
      value: config.value
    };
  }

  handleChange = (value) => {
    const { onChange } = this.props;
    this.setState({ value });
    const externalValue = value ? { min: value[0], max: value[1] } : null;
    onChange(externalValue);
  }

  handleToggle = (value) => {
    const { config } = this.props;
    if (!value) {
      this.handleChange(null);
    } else {
      this.handleChange(config.value);
    }
    this.setState({ show: value });
  }

  render() {
    const { config } = this.props;
    const { max, min, show, value } = this.state;
    return (
      <div className="range form-group">
        {config.enabled === undefined ?
          <label>{config.label}</label> :
          <Toggle label={config.label} value={config.enabled} onToggle={this.handleToggle} styleType={config.toggleType} />}
        {show ? (
          <div>
            <div className="current-values">
              <span>{value[0]}</span>
              <span> - </span>
              <span>{value[1]}</span>
            </div>
            <div className="slider-wrapper">
              <SliderRange
                min={min}
                max={max}
                defaultValue={value}
                handle={handle}
                onAfterChange={(val) => this.handleChange(val)}
              />
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

export default Range;