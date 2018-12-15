export const distance = (value, unity = 'km') => {
  switch (unity) {
    case 'km':
      return (value / 1000) + ' ' + unity;
    default:
      return value;
  }
}