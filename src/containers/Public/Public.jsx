import { Header, LoadingSpinner } from 'components/shared';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import routes from './routes';

class Public extends React.Component {
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
        <main className="public-container">
          <div className="container">
            {routes}
          </div>
        </main>
      </React.Fragment>
    );
  }
};

const mapStateToProps = state => {
  return {
    loading: state.public.loading
  };
};

export default connect(mapStateToProps, null)(withRouter(Public));