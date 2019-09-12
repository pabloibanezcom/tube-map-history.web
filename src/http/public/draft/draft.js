import axios from '../axios';

export default class Draft {

  // Get draft with town
  static getDraftWithTown = (draftId) => {
    return axios.get(`draft/${draftId}`);
  }

}
