import TownCard from 'components/towns/town-card/town-card';
import Header from 'components/UI/header/header';
import React from 'react';
import { sortBy, splitByRows } from 'shared/utility';

// Static data at the moment. In future it will come from DB
const towns = [
  {
    _id: '1',
    name: 'London',
    country: 'United Kingdom',
    url: 'london',
    year: 1863,
    alias: 'Tube',
    connectionsAmount: 188,
    linesAmount: 16,
    stationsAmount: 312
  },
  {
    _id: '2',
    name: 'New York',
    country: 'United States',
    url: 'new-york',
    year: 1914,
    alias: 'Subway',
    connectionsAmount: 212,
    linesAmount: 14,
    stationsAmount: 424
  },
  {
    _id: '3',
    name: 'Paris',
    country: 'France',
    url: 'paris',
    year: 1905,
    alias: 'Metropolitan',
    connectionsAmount: 130,
    linesAmount: 8,
    stationsAmount: 194
  },
  {
    _id: '4',
    name: 'Madrid',
    country: 'Spain',
    url: 'madrid',
    year: 1919,
    alias: 'Metro',
    connectionsAmount: 130,
    linesAmount: 10,
    stationsAmount: 217
  },
  {
    _id: '5',
    name: 'Boston',
    country: 'United States',
    url: 'boston',
    year: 1896,
    alias: 'MBTA subway',
    connectionsAmount: 130,
    linesAmount: 5,
    stationsAmount: 145
  },
  {
    _id: '6',
    name: 'Berlin',
    country: 'Germany',
    url: 'berlin',
    year: 1918,
    alias: 'U-Bahn',
    connectionsAmount: 130,
    linesAmount: 7,
    stationsAmount: 225
  }
];

class Towns extends React.Component {

  sortBy = 'year';

  render() {
    return (
      <div>
        <Header optionsName="towns" />
        <div className="towns-container">
          <h1 className="right-line mb-4">Towns</h1>
          {splitByRows(sortBy(towns, this.sortBy), 4).map((row, i) => {
            return (
              <div key={i} className="row">
                {row.map(t => <div key={t._id} className="col-lg-3"><TownCard town={t} /></div>)}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Towns;