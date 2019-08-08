import * as actions from 'actions/auth';
import LoginForm from 'components/public/auth/login/login-form/login-form';
import { Button, Panel } from 'components/shared';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

class Login extends React.Component {

  componentDidMount() {
    localStorage.removeItem('auth');
  }

  render() {
    const { login } = this.props;
    return (
      <div className="flex flex-center full-page bg-secondary">
        <Panel
          extraClass="animated fadeInUp animation-delay-7"
          width={450}
        >
          <h1 className="secondary mb-40">Login</h1>
          <LoginForm
            onSubmit={login}
          />
          <div className="mb-10">
            <span className="secondary">Forgot your password?</span>
            <Button
              type="link"
              color="secondary"
              text="Reset it"
              extraClass="ml-5"
            />
          </div>
          <div>
            <span className="secondary">New here?</span>
            <Button
              type="link"
              to="/signup"
              color="secondary"
              text="Sign Up"
              extraClass="ml-5"
            />
          </div>
        </Panel>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (formData) => dispatch(actions.loginStart(formData.email, formData.password))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));