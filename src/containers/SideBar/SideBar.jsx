import React from 'react';
import onClickOutside from "react-onclickoutside";
import { connect } from 'react-redux';
import LinesInfo from '../../components/side-info/lines-info/lines-info';
import StationInfo from '../../components/side-info/station-info/station-info';
import * as actions from '../../store/actions/main';

class SideBar extends React.Component {

  handleClickOutside(evt) {
    if (this.props.sideBarMode) {
      this.props.onCloseSideBar();
    }
  }

  renderContent = (mode) => {
    switch (mode) {
      case 'lines':
        return <LinesInfo>

        </LinesInfo>;
      case 'station':
        return <StationInfo
          station={this.props.selectedStation}
        />;
      default:
        return null;
    }
  }

  render() {
    return (
      <div className={`side-bar ${this.props.sideBarMode ? 'open' : ''}`}>
        <div className="side-bar-container">
          <ul className="side-bar-menu shown">
            <li className="side-bar-menu-element">
              {this.renderContent(this.props.sideBarMode)}
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    sideBarMode: state.main.sideBarMode,
    selectedStation: state.main.selectedStation
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCloseSideBar: () => dispatch(actions.setSideBarMode(null))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(onClickOutside(SideBar));