export const getImage = (path, defaultPath) => {
  let image;
  try {
    image = require(`assets/img/${path}`);
    return image;
  } catch (ex) {
    return require(`assets/img/${defaultPath}`);
  }
};