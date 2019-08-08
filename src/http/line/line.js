import axios from '../axios';

const defaultPagination = require('../defaultParams/pagination.json');
const searchLinesParams = require('../defaultParams/searchLines.json');

export default class Line {

  // Search lines
  static search = (draftId, searchParams, pagination) => {
    return axios.post(`${draftId}/line/search`, {
      filter: searchParams,
      sort: { name: 1 },
      populate: searchLinesParams.populate,
      pagination: pagination || defaultPagination
    });
  }

  // Get full info from line
  static get = (lineId) => {
    return axios.get(`line/${lineId}`);
  }

  // Add line
  static add = (draftId, line) => {
    return axios.post(`${draftId}/line`, line);
  }

  // Update line
  static update = (line) => {
    return axios.put(`line/${line._id}`, line);
  }

  // Delete line
  static delete = (lineId) => {
    return axios.delete(`line/${lineId}`);
  }

}
