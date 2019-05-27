import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import routes from './routes';

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
