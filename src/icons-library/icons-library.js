import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendarAlt, faCoins, faEnvelope, faExchangeAlt, faKey, faMapMarkerAlt, faMarker, faRoute, faSubway } from '@fortawesome/free-solid-svg-icons';

const generateIcons = () => {
  library.add(
    faCalendarAlt,
    faCoins,
    faEnvelope,
    faExchangeAlt,
    faMapMarkerAlt,
    faMarker,
    faRoute,
    faSubway,
    faKey
  );
}

export default generateIcons;