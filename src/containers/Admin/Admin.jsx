import { Footer, Header } from 'components/shared';
import React from 'react';
import { withRouter } from "react-router-dom";
import routes from './routes';

class Admin extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header optionsName="admin" />
        <main className="admin-container">
          {routes}
        </main>
        <Footer />
      </React.Fragment>
    );
  }
};

export default withRouter(Admin);