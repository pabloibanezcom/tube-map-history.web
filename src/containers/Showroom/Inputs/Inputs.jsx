import { CountrySelector, LineSelector, PlaceSelector, Selector, StationSelector } from 'components/shared';
import React from 'react';
import * as lines from './data/lines.json';
import * as stations from './data/stations.json';

class Inputs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      option: null,
      country: null,
      line: null,
      place: null,
      station: null
    }
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(element, value) {
    this.setState({ [element]: value });
  }

  render() {
    const { country, line, option, place, station } = this.state;
    return (
      <div className="showroom-selectors">
        <h1 className="right-line mb-4">Inputs</h1>
        <div className="row">
          <div className="col">
            <div className="showroom-element">
              <label>Selector</label>
              <Selector
                options={lines}
                onChange={(value) => this.handleSelect('option', value)}
              />
              <div className="showroom-result">
                <span>{option ? `Option selected: ${option.name}` : ''}</span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="showroom-element">
              <label>LineSelector</label>
              <LineSelector
                lines={lines}
                onChange={(value) => this.handleSelect('line', value)}
              />
              <div className="showroom-result">
                <span>{line ? `Line selected: ${line.name}` : ''}</span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="showroom-element">
              <label>CountrySelector</label>
              <CountrySelector
                onChange={(value) => this.handleSelect('country', value)}
              />
              <div className="showroom-result">
                <span>{country ? `Country selected: ${country.name}` : ''}</span>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="showroom-element">
              <label>StationSelector</label>
              <StationSelector
                stations={stations.map(st => { return { ...st, town: { url: 'london' } } })}
                onChange={(value) => this.handleSelect('station', value)}
              />
              <div className="showroom-result">
                <span>{station ? `Station selected: ${station.name}` : ''}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <div className="showroom-element">
              <label>PlaceSelector</label>
              <PlaceSelector
                onChange={(value) => this.handleSelect('place', value)}
              />
              <div className="showroom-result">
                <span>{place ? `Place selected: ${place.coordinates[0]} - ${place.coordinates[1]}` : ''}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Inputs;