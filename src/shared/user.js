export const townInUser = (town, user) => {
  let result = false;
  user.towns.forEach(t => {
    if (t.town._id === town._id) {
      result = true;
    }
  });
  return result;
}