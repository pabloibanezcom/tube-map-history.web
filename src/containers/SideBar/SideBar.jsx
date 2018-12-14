import React from 'react';
import { connect } from 'react-redux';
import CityInfo from '../../components/side-info/city-info/city-info';
import LinesInfo from '../../components/side-info/lines-info/lines-info';
import StationInfo from '../../components/side-info/station-info/station-info';
import * as actions from '../../store/actions/main';

class SideBar extends React.Component {

  renderContent = (mode) => {
    switch (mode) {
      case 'main':
        return <CityInfo
          cityInfo={this.props.cityInfo}
          onModeSelected={this.props.onModeSelected} />
      case 'lines':
        return <LinesInfo
          lines={this.props.lines}
          onModeSelected={this.props.onModeSelected} />
      case 'station':
        return <StationInfo
          station={this.props.selectedStation}
          onStationSelected={this.props.onStationSelected}
        />;
      default:
        return null;
    }
  }

  render() {
    return (
      <div className={`side-bar ${this.props.sideBarMode ? 'open' : ''}`}>
        <a className="side-bar-close" onClick={this.props.sideBarMode ? this.props.onCloseSideBar : this.props.onOpenSideBar}>
          {this.props.sideBarMode ? <i className="zmdi zmdi-close"></i> : <i className="zmdi zmdi-menu"></i>}
        </a>
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
    selectedStation: state.main.selectedStation,
    cityInfo: state.main.cityInfo,
    lines: state.main.lines
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onStationSelected: (station) => dispatch(actions.getStationDetailsStart(station._id)),
    onCloseSideBar: () => dispatch(actions.setSideBarMode(null)),
    onOpenSideBar: () => dispatch(actions.setSideBarMode('main')),
    onModeSelected: (mode) => dispatch(actions.setSideBarMode(mode))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);