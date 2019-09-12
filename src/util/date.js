import moment from 'moment';

export const showDate = (dateStr) => {
  return moment(dateStr).format('DD MMM of YYYY');
}