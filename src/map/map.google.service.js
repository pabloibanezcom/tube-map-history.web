

import styles from './styles/styles';

const mapConfig = require('./config/map.config.json');

const gmaps = window.google ? window.google.maps : null;

export const initMap = (selector, center, zoom, year) => {
  const map = new gmaps.Map(document.getElementById(selector),
    {
      ...mapConfig,
      center: {
        lat: center.coordinates[0],
        lng: center.coordinates[1]
      },
      zoom
    });

  if (year) {
    applyYearStyle(map, year);
  }
  return map;
}

const applyYearStyle = (map, year, mode) => {

  let setMapTypeId = null;
  const defaultStyle = mode === 'print' ? styles.defaultStyle.concat(styles.print) : styles.defaultStyle;

  const getYearStyleForYear = (_year) => {
    let style;
    Object.keys(styles).forEach(key => {
      if (key.split('_')[1] <= year && key.split('_')[2] >= _year) {
        setMapTypeId = key;
        style = new gmaps.StyledMapType(defaultStyle.concat(styles[key]), { name: key });
      }
    });
    return style;
  }

  const styledMapType = getYearStyleForYear(year);

  if (styledMapType) {
    map.mapTypes.set(setMapTypeId, styledMapType);
    map.setMapTypeId(setMapTypeId);
  }
}
