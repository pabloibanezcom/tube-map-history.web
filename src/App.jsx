import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import generateIcons from './icons-library/icons-library';
import routes from './routes';

generateIcons();

class App extends Component {
  render() {
    return (
      <div className="ms-site-container">
        {routes}
      </div>
    );
  }
}

export default withRouter(App);
