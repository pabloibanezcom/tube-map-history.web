import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import onClickOutside from "react-onclickoutside";
import LinesInfo from '../lines-info/lines-info';

class SideBar extends React.Component {

  state = {
    showLines: false
  }

  handleClickOutside(evt) {
    if (this.props.show) {
      this.props.onClose();
    }
  }

  toggleElement(element) {
    this.setState(prevState => ({
      [element]: !prevState[element]
    }));
  }

  render() {
    return (
      <div className={`side-bar ${this.props.show ? 'open' : ''}`}>
        <div className="side-bar-container">
          <ul className="side-bar-menu shown">
            <li className="side-bar-menu-element">
              <a className="collapsed" onClick={() => this.toggleElement('showLines')}>
                <FontAwesomeIcon icon={'route'} /><span>Lines</span>
                <span className="pull-right"><FontAwesomeIcon className="rotate" icon={this.state.showLines ? 'minus' : 'plus'} /></span>
              </a>
              <LinesInfo
                show={this.state.showLines}
                lines={this.props.lines}
                selectedLine={this.props.selectedLine}
                onLineSelected={this.props.onLineSelected}
              />
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default onClickOutside(SideBar);