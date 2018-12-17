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
    this.state = {
      show: this.props.config.enabled,
      min: this.props.config.min,
      max: this.props.config.max,
      value: this.props.config.value
    };
  }

  handleChange = (value) => {
    this.setState({ value: value });
    const externalValue = value ? { min: value[0], max: value[1] } : null;
    this.props.onChange(externalValue);
  }

  handleToggle = (value) => {
    if (!value) {
      this.handleChange(null);
    } else {
      this.handleChange(this.props.config.value);
    }
    this.setState({ show: value });
  }

  render() {
    return (
      <div className="range form-group">
        {this.props.config.enabled === undefined ?
          <label>{this.props.config.label}</label> :
          <Toggle label={this.props.config.label} value={this.props.config.enabled} onToggle={this.handleToggle} styleType={this.props.config.toggleType} />}
        {this.state.show ? <div>
          <div className="current-values">
            <span>{this.state.value[0]}</span>
            <span> - </span>
            <span>{this.state.value[1]}</span>
          </div>
          <div className="slider-wrapper">
            <SliderRange
              min={this.state.min}
              max={this.state.max}
              defaultValue={this.state.value}
              handle={handle}
              onAfterChange={(val) => this.handleChange(val)}
            />
          </div>
        </div> : null}
      </div>
    );
  }
}

export default Range;