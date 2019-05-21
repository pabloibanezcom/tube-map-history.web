import * as actions from 'actions/main';
import LineInfo from 'components/side-info/line-info/line-info';
import LinesInfo from 'components/side-info/lines-info/lines-info';
import StationInfo from 'components/side-info/station-info/station-info';
import TownInfo from 'components/side-info/town-info/town-info';
import React from 'react';
import { connect } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import { getPrevSideBarMode, getPrevSideBarModeLabel } from './util';

class SideBar extends React.Component {

  renderContent = (mode) => {
    const { lines, onLineSelected, onStationSelected, selectedLine, selectedStation, sideBarState, town, year } = this.props;
    switch (mode) {
      case 'main':
        return <TownInfo
          townInfo={town}
          sideBarState={sideBarState}
          onModeSelected={this.changeMode}
        />
      case 'lines':
        return <LinesInfo
          lines={lines}
          onLineSelected={onLineSelected}
        />
      case 'line':
        return <LineInfo
          line={selectedLine}
          year={year}
          onStationSelected={onStationSelected}
        />
      case 'station':
        return <StationInfo
          station={selectedStation}
          town={town}
          onStationSelected={onStationSelected}
        />;
      default:
        return null;
    }
  }

  open = () => {
    const { onSetSideBarState, sideBarState } = this.props;
    onSetSideBarState({ ...sideBarState, open: true });
  }

  close = () => {
    const { onSetSideBarState, sideBarState } = this.props;
    onSetSideBarState({ ...sideBarState, open: false, initiate: true });
  }

  goBack = () => {
    const { onSetSideBarState, sideBarState } = this.props;
    onSetSideBarState({ ...sideBarState, mode: getPrevSideBarMode(sideBarState.mode), initiate: true });
  }

  changeMode = (mode) => {
    const { onSetSideBarState, sideBarState } = this.props;
    onSetSideBarState({ ...sideBarState, mode, initiate: true });
  }

  render() {
    const { sideBarState } = this.props;
    return (
      <div className={`side-bar ${sideBarState.open ? 'open' : ''}`}>
        <a className="side-bar-close" data-tip={sideBarState.open ? 'Close menu' : 'open menu'} data-for='open-tooltip' onClick={sideBarState.open ? this.close : this.open}>
          {sideBarState.open ? <i className="zmdi zmdi-close" /> : <i className="zmdi zmdi-menu" />}
        </a>
        <a
          className={`side-bar-back ${sideBarState.open && getPrevSideBarMode(sideBarState.mode) ? 'shown' : ''}`}
          onClick={this.goBack}
          data-tip=''
          data-for='back-tooltip'
        >
          <i className="zmdi zmdi-chevron-left" />
        </a>
        <div className="side-bar-container">
          <ul className="side-bar-menu shown">
            <li className="side-bar-menu-element">
              {this.renderContent(sideBarState.mode)}
            </li>
          </ul>
        </div>
        <ReactTooltip id="open-tooltip" effect="solid" place="left" />
        <ReactTooltip id="back-tooltip" effect="solid" place="left" getContent={() => { return getPrevSideBarModeLabel(sideBarState.mode) }} />
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