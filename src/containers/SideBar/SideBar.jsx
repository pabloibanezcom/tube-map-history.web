import React from 'react';
import { connect } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import LineInfo from '../../components/side-info/line-info/line-info';
import LinesInfo from '../../components/side-info/lines-info/lines-info';
import StationInfo from '../../components/side-info/station-info/station-info';
import TownInfo from '../../components/side-info/town-info/town-info';
import * as actions from '../../store/actions/main';
import { getPrevSideBarMode, getPrevSideBarModeLabel } from './util';

class SideBar extends React.Component {

  renderContent = (mode) => {
    switch (mode) {
      case 'main':
        return <TownInfo
          townInfo={this.props.town}
          sideBarState={this.props.sideBarState}
          onModeSelected={this.changeMode}
        />
      case 'lines':
        return <LinesInfo
          lines={this.props.lines}
          onLineSelected={this.props.onLineSelected}
        />
      case 'line':
        return <LineInfo
          line={this.props.selectedLine}
          year={this.props.year}
          onStationSelected={this.props.onStationSelected}
        />
      case 'station':
        return <StationInfo
          station={this.props.selectedStation}
          town={this.props.town}
          onStationSelected={this.props.onStationSelected}
        />;
      default:
        return null;
    }
  }

  open = () => {
    this.props.onSetSideBarState({ ...this.props.sideBarState, open: true });
  }

  close = () => {
    this.props.onSetSideBarState({ ...this.props.sideBarState, open: false, initiate: true });
  }

  goBack = () => {
    this.props.onSetSideBarState({ ...this.props.sideBarState, mode: getPrevSideBarMode(this.props.sideBarState.mode), initiate: true });
  }

  changeMode = (mode) => {
    this.props.onSetSideBarState({ ...this.props.sideBarState, mode: mode, initiate: true });
  }

  render() {
    return (
      <div className={`side-bar ${this.props.sideBarState.open ? 'open' : ''}`}>
        <a className="side-bar-close" data-tip={this.props.sideBarState.open ? 'Close menu' : 'open menu'} data-for='open-tooltip' onClick={this.props.sideBarState.open ? this.close : this.open}>
          {this.props.sideBarState.open ? <i className="zmdi zmdi-close"></i> : <i className="zmdi zmdi-menu"></i>}
        </a>
        <a className={`side-bar-back ${this.props.sideBarState.open && getPrevSideBarMode(this.props.sideBarState.mode) ? 'shown' : ''}`} onClick={this.goBack}
          data-tip='' data-for='back-tooltip'>
          <i className="zmdi zmdi-chevron-left"></i>
        </a>
        <div className="side-bar-container">
          <ul className="side-bar-menu shown">
            <li className="side-bar-menu-element">
              {this.renderContent(this.props.sideBarState.mode)}
            </li>
          </ul>
        </div>
        <ReactTooltip id="open-tooltip" effect="solid" place="left" />
        <ReactTooltip id="back-tooltip" effect="solid" place="left" getContent={() => { return getPrevSideBarModeLabel(this.props.sideBarState.mode) }} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    year: state.main.year,
    sideBarState: state.main.sideBarState,
    selectedStation: state.main.selectedStation,
    selectedLine: state.main.selectedLine,
    town: state.main.town,
    lines: state.main.lines
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onStationSelected: (station) => dispatch(actions.getStationDetailsStart(station._id)),
    onLineSelected: (line) => dispatch(actions.getLineDetailsStart(line._id)),
    onSetSideBarState: (sideBarState) => dispatch(actions.setSideBarState(sideBarState))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);