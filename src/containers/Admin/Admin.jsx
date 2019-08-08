import { Footer, Header, LoadingSpinner } from 'components/shared';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import routes from './routes';

class Admin extends React.Component {
  render() {
    const { loading } = this.props;
    return (
      <React.Fragment>
        <Header optionsName="admin" />
        <LoadingSpinner
          background="dark"
          inverse
          loading={loading}
        />
        <main className="admin">
          <div className="container">
            {routes}
          </div>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
};

const mapStateToProps = state => {
  return {
    loading: state.admin.loading
  };
};

export default connect(mapStateToProps, null)(withRouter(Admin));