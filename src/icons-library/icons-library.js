import { library } from '@fortawesome/fontawesome-svg-core';
import * as icons from '@fortawesome/free-solid-svg-icons';

const generateIcons = () => {
  library.add(
    icons.faCalendarAlt,
    icons.faCoins,
    icons.faEnvelope,
    icons.faExchangeAlt,
    icons.faMapMarkerAlt,
    icons.faMarker,
    icons.faMinus,
    icons.faPlus,
    icons.faRoute,
    icons.faSubway,
    icons.faKey
  );
}

export default generateIcons;