import SignUpForm from 'components/public/auth/signup/signup-form/signup-form';
import { Button, Panel } from 'components/shared';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from 'store/auth/actions';

class Signup extends React.Component {
  render() {
    const { signup } = this.props;
    return (
      <div className="flex flex-center full-page bg-secondary">
        <Panel extraClass="animated fadeInUp animation-delay-7" width={650}>
          <h1 className="secondary mb-40">Signup</h1>
          <SignUpForm onSubmit={signup} />
          <div>
            <span className="secondary">Do you have already an account?</span>
            <Button type="link" to="/login" color="secondary" text="Login" extraClass="ml-5" />
          </div>
        </Panel>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signup: formData =>
      dispatch(actions.signUpStart(formData.email, formData.password, formData.name))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Signup));
