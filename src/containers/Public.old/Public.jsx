import React from 'react';
import { withRouter } from "react-router-dom";
import routes from './routes';

class Public extends React.Component {
  render() {
    return (
      <div className="public-container">
        {routes}
      </div>
    )
  }
};

export default withRouter(Public);