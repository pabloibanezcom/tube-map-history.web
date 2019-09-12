import { Footer, Header, LoadingSpinner } from 'components/shared';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { getOwnUserStart } from 'store/admin/actions';
import routes from './routes';

class Admin extends React.Component {

  componentDidMount() {
    const { getUser, user } = this.props;
    if (!user) {
      getUser();
    }
  }

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
    loading: state.admin.loading,
    user: state.admin.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: () => dispatch(getOwnUserStart())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Admin));