import axios from 'axios';

const api_url = process.env.REACT_APP_API_URL

export const search = (model, searchParams) => {
  return axios.post(`${api_url}/${model}`, transformSearchParams(model, searchParams))
}

export const add = (model, element) => {
  return axios.post(`${api_url}/${model}/add`, element)
}

export const update = (model, element) => {
  return axios.put(`${api_url}/${model}/${element._id}`, element)
}

const transformSearchParams = (model, searchParams) => {
  const result = {
    filter: {},
    populate: searchParams.populate || '',
    limit: 25
  };
  if (!searchParams) {
    return result;
  }
  result.filter.name = searchParams.name || searchParams[`${model}Name`] || undefined;
  return result;
}