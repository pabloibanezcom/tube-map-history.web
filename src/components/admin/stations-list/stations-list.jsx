import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Collapse from '../../UI/collapse/collapse';
import AddConnection from '../add-connection/add-connection';
import EditStation from '../edit-station/edit-station';
import StationPanel from '../station-panel/station-panel';

class StationsList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeStation: null,
      editModeStation: null,
      addConnectionStation: null
    }
    this.editStation = this.editStation.bind(this);
    this.closeEditStation = this.closeEditStation.bind(this);
    this.addConnection = this.addConnection.bind(this);
    this.closeAddConnection = this.closeAddConnection.bind(this);
  }

  showStation(stationId) {
    if (stationId === this.state.activeStation) {
      this.setState({ activeStation: null });
    }
    this.setState({ activeStation: stationId });
  }

  editStation(station) {
    this.setState({ editModeStation: station });
  }

  closeEditStation() {
    this.setState({ editModeStation: null });
  }

  addConnection(station) {
    this.setState({ addConnectionStation: station });
  }

  closeAddConnection() {
    this.setState({ addConnectionStation: null });
  }

  render() {
    return <div className="stations-list">
      {this.state.editModeStation ?
        <EditStation
          show={this.state.editModeStation ? true : false}
          station={this.state.editModeStation}
          onClose={this.closeEditStation}
          onEditStation={this.props.onEditStation} />
        : null
      }
      {this.state.addConnectionStation ?
        <AddConnection
          show={this.state.addConnectionStation ? true : false}
          stationFrom={this.state.addConnectionStation}
          lines={this.props.lines}
          onClose={this.closeAddConnection}
          onAddConnection={this.props.onAddConnection}
          onSelectFilteredStations={this.props.onSelectFilteredStations} />
        : null
      }
      {this.props.stations.map(s => {
        const header = <span><FontAwesomeIcon icon={'subway'} /> {s.name}</span>;
        const content = <StationPanel
          station={s}
          onEditStation={this.editStation}
          onAddConnection={this.addConnection}
        />;
        return <div key={s._id}>
          <Collapse
            selectionId={s._id}
            onSelected={(stationId) => this.showStation(stationId)}
            active={s._id === this.state.activeStation}
            header={header}
            content={content}
          />
        </div>
      })}
    </div>
  }
}

export default StationsList;