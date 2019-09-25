import axios from '../axios';

export default class Town {
  // Get town
  static getTown = townUrl => {
    return axios.get(`town/${townUrl}`);
  };

  // Get published draft in town
  static getPublishedDraft = townId => {
    return axios.get(`town/${townId}/active-draft`);
  };
}
