import axios from '../axios';

export const get = (model, extraUrlParams) => {
  return axios.get(`${model}/${extraUrlParams}`);
}

export const search = (model, searchParams) => {
  return axios.post(`${model}`, transformSearchParams(model, searchParams))
}

export const add = (model, element) => {
  return axios.post(`${model}/add`, element)
}

export const update = (model, element) => {
  return axios.put(`${model}/${element._id}`, element)
}

export const deleteOp = (model, element) => {
  return axios.delete(`${model}/${element._id}`)
}

const transformSearchParams = (model, searchParams) => {
  const result = {
    filter: searchParams.filter || {},
    populate: searchParams.populate || '',
    limit: searchParams.limit || 25,
    select: searchParams.select || '',
    sort: searchParams.sort || ''
  };
  if (!searchParams) {
    return result;
  }
  result.filter.name = searchParams.name || searchParams[`${model}Name`] || undefined;
  return result;
}