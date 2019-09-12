export const handleError = (err) => {
  if (err.response.status === 401) {
    return '/login';
  }
  return null;
}