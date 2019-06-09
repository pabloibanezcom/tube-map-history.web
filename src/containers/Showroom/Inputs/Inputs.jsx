import { CountrySelector, Input, LineSelector, PlaceSelector, Selector, StationSelector } from 'components/shared';
import React from 'react';
import lines from './data/lines.json';
import stations from './data/stations.json';

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
          <div className="col-2">
            <div className="showroom-element">
              <label>Text input</label>
              <Input
                name="input1"
              />
            </div>
          </div>
          <div className="col-2">
            <div className="showroom-element">
              <label>Text input with placeholder</label>
              <Input
                name="input2"
                placeholder="Type something"
              />
            </div>
          </div>
          <div className="col-2">
            <div className="showroom-element">
              <label>Text input clearable</label>
              <Input
                name="input3"
                clearable
              />
            </div>
          </div>
          <div className="col-2">
            <div className="showroom-element">
              <label>Text input with initial value</label>
              <Input
                name="input4"
                value="John Johnson"
              />
            </div>
          </div>
          <div className="col-2">
            <div className="showroom-element">
              <label>Text input disabled</label>
              <Input
                name="input5"
                disabled
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-2">
            <div className="showroom-element">
              <label>Primary input</label>
              <Input
                name="input6"
              />
            </div>
          </div>
          <div className="col-2">
            <div className="showroom-element">
              <label>Secondary input</label>
              <Input
                name="input7"
                backgroundColor="secondary"
              />
            </div>
          </div>
          <div className="col-2">
            <div className="showroom-element">
              <label>White input</label>
              <Input
                name="input8"
                backgroundColor="white"
              />
            </div>
          </div>
          <div className="col-2">
            <div className="showroom-element">
              <label>Primary text color</label>
              <Input
                name="input9"
                color="primary"
              />
            </div>
          </div>
          <div className="col-2">
            <div className="showroom-element">
              <label>Secondary text color</label>
              <Input
                name="input10"
                color="secondary"
              />
            </div>
          </div>
          <div className="col-2">
            <div className="showroom-element">
              <label>White text color</label>
              <Input
                name="input11"
                color="white"
              />
            </div>
          </div>
        </div>
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