import { Footer, Header } from 'components/shared';
import React from 'react';
import { withRouter } from "react-router-dom";
import routes from './routes';

class Showroom extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header optionsName="admin" />
        <main className="showroom">
          <div className="container">
            {routes}
          </div>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default withRouter(Showroom);