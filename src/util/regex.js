export default {
  email: {
    /* eslint-disable-next-line no-useless-escape */
    value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: 'You have entered an invalid e-mail address'
  },
  password: {
    value: /^.{8,26}$/,
    message: 'Password must contain at least 8 characters'
  }
}