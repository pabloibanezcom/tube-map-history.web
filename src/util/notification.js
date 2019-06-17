import Snackbar from 'node-snackbar/dist/snackbar';

const sharedConfig = {
  pos: 'bottom-right'
}

export const info = (text) => {
  Snackbar.show({ ...sharedConfig, text, customClass: 'secondary' });
};

export const warning = (text) => {
  Snackbar.show({ ...sharedConfig, text, customClass: 'warning' });
};

export const error = (text) => {
  Snackbar.show({ ...sharedConfig, text, customClass: 'error' });
};