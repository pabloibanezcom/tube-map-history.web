import axios from '../axios';

export default class Generation {
  static importTownData = (town, file) => {
    const formData = new FormData();
    formData.append(file.name, file);
    return axios.put(`generation/import/town/${town}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  }
}