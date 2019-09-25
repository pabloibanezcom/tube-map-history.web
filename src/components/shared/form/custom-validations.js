const yearValidation = value => {
  if (!value) {
    return 'Year is mandatory';
  }
  return (
    (parseFloat(value) >= 1800 && parseFloat(value) <= 2019) || 'Year must be between 1800 and 2019'
  );
};

export default {
  yearValidation
};
