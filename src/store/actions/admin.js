import * as httpService from '../../http/admin';
import { error, info } from '../../shared/notification';
import * as actionTypes from './actionTypes';

const searchStationsParams = {
  populate: [
    {
      path: 'connections',
      populate: [
        {
          path: 'stations',
          select: 'name year'
        },
        {
          path: 'line',
          select: 'name colour fontColour'
        }
      ],
      select: 'stations line year'
    }
  ]
}

const searchConnectionsParams = {
  populate: [
    // {
    //   path: 'connections',
    //   populate: [
    //     {
    //       path: 'stations',
    //       select: 'name year'
    //     },
    //     {
    //       path: 'line',
    //       select: 'name colour fontColour'
    //     }
    //   ],
    //   select: 'stations line year'
    // }
  ]
}

export const searchStations = (searchParams) => {
  return dispatch => {
    dispatch(searchStationsStart());
    httpService.search('station', { ...searchParams, populate: searchStationsParams.populate })
      .then(res => {
        dispatch(searchStationsSuccess(res.data));
      })
      .catch(err => {
        dispatch(searchStationsFail(err));
      });
  };
}

export const searchConnections = (searchParams) => {
  return dispatch => {
    dispatch(searchConnectionsStart());
    httpService.search('connection', { ...searchParams, populate: searchConnectionsParams.populate })
      .then(res => {
        dispatch(searchConnectionsSuccess(res.data));
      })
      .catch(err => {
        dispatch(searchConnectionsFail(err));
      });
  };
}

export const editStation = (station) => {
  return dispatch => {
    dispatch(editStationStart());
    httpService.update('station', station)
      .then(res => {
        dispatch(editStationSuccess(res.data));
        info(`Station (${station.name}) updated successfully`);
      })
      .catch(err => {
        dispatch(editStationFail(err));
        error(`Station (${station.name}) could not be updated`);
      });
  };
}

export const addConnection = (connection) => {
  return dispatch => {
    dispatch(addConnectionStart());
    httpService.add('connection', connection)
      .then(res => {
        dispatch(addConnectionSuccess());
        info(`Connection added successfully`);
      })
      .catch(err => {
        dispatch(addConnectionFail(err));
        error(`Connection could not be added`);
      });
  };
}

const searchStationsSuccess = (stations) => {
  return {
    type: actionTypes.ADMIN_SEARCH_STATIONS_SUCCESS,
    stations: stations
  };
};

const searchStationsFail = (error) => {
  return {
    type: actionTypes.ADMIN_SEARCH_STATIONS_FAIL,
    error: error
  };
};

const searchStationsStart = () => {
  return {
    type: actionTypes.ADMIN_SEARCH_STATIONS_START
  };
};

const searchConnectionsSuccess = (connections) => {
  return {
    type: actionTypes.ADMIN_SEARCH_CONNECTIONS_SUCCESS,
    connections: connections
  };
};

const searchConnectionsFail = (error) => {
  return {
    type: actionTypes.ADMIN_SEARCH_CONNECTIONS_FAIL,
    error: error
  };
};

const searchConnectionsStart = () => {
  return {
    type: actionTypes.ADMIN_SEARCH_CONNECTIONS_START
  };
};


const editStationSuccess = (station) => {
  return {
    type: actionTypes.ADMIN_EDIT_STATION_SUCCESS,
    station: station
  };
};

const editStationFail = (error) => {
  return {
    type: actionTypes.ADMIN_EDIT_STATION_FAIL,
    error: error
  };
};

const editStationStart = () => {
  return {
    type: actionTypes.ADMIN_EDIT_STATION_START
  };
};

const addConnectionSuccess = (connection) => {
  return {
    type: actionTypes.ADMIN_ADD_CONNECTION_SUCCESS
  };
};

const addConnectionFail = (error) => {
  return {
    type: actionTypes.ADMIN_ADD_CONNECTION_FAIL,
    error: error
  };
};

const addConnectionStart = () => {
  return {
    type: actionTypes.ADMIN_ADD_CONNECTION_START
  };
};
