import { Footer, Header } from 'components/shared';
import React from 'react';
import { withRouter } from "react-router-dom";
import routes from './routes';

class Admin extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header optionsName="admin" />
        <div className="admin-container">
          {routes}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
};

export default withRouter(Admin);