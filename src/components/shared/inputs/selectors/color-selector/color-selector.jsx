import React from 'react';
import { TwitterPicker } from 'react-color';
import Select from '../select/select';
import ColorSelected from './color-selected/color-selected';

class ColorSelector extends React.Component {

  constructor(props) {
    super(props);
    const { color } = this.props;
    this.state = {
      color: color ? { hex: color } : null,
      colorPickerShown: false
    }

    this.showColorPicker = this.showColorPicker.bind(this);
    this.colorSelected = this.colorSelected.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  showColorPicker() {
    this.setState({ colorPickerShown: true });
  }

  colorSelected(color) {
    this.setState({ color });
  }

  handleClose() {
    const { onChange } = this.props;
    const { color } = this.state;
    this.setState({ colorPickerShown: false });
    onChange(color.hex);
  }


  render() {
    const { colorPickerShown, color } = this.state;
    const popover = {
      position: 'absolute',
      zIndex: '2'
    }
    const cover = {
      position: 'fixed',
      top: '0px',
      right: '0px',
      bottom: '0px',
      left: '0px'
    }
    const selectorConfig = {
      placeholder: 'Choose a color...',
      options: {}
    }
    const colorPickerDropdown = (
      <div style={popover}>
        <div style={cover} onClick={this.handleClose} />
        <TwitterPicker
          color={color || { hex: '#FFFFFF' }}
          onChangeComplete={(val) => this.colorSelected(val)}
        />
      </div>
    )
    return (
      <div className="color-selector">
        <Select
          config={selectorConfig}
          selected={ColorSelected}
          selectedElement={color}
          noDropdown={colorPickerDropdown}
          externalExpanded={colorPickerShown}
          onDropdownOpen={this.showColorPicker}
        />
      </div>
    )
  }

}

export default ColorSelector;