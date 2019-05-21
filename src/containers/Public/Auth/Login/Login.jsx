import * as actions from 'actions/auth';
import Form from 'components/form/form';
import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import formElements from './form-data/login';

class Login extends React.Component {

  componentDidMount() {
    localStorage.removeItem('auth');
  }

  render() {
    const { login } = this.props;

    return (
      <div className="auth-container bg-full-page">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-lg-6">
              <div className="auth-box animated fadeInUp animation-delay-7">
                <div className="header">
                  <div className="title">
                    <span className="ms-logo">T</span>
                    <h2 className="text-center">Tube History Map</h2>
                  </div>
                  <div className="actions">
                    <Link to="/signup">Signup</Link>
                    <span className="active">Login</span>
                  </div>
                </div>
                <div className="social-login-header">Login with</div>
                <div className="social-login-buttons">
                  <div><button type="submit" className="btn btn-sm btn-raised btn-google btn-block"><i className="zmdi zmdi-google" /><span>Google</span></button></div>
                  <div><button type="submit" className="btn btn-sm btn-raised btn-facebook btn-block"><i className="zmdi zmdi-facebook" /><span>Facebook</span></button></div>
                  <div><button type="submit" className="btn btn-sm btn-raised btn-twitter btn-block"><i className="zmdi zmdi-twitter" /><span>Twitter</span></button></div>
                </div>
                <div className="email-login-header">or</div>
                <Form
                  mode="dark"
                  formElements={formElements}
                  onValidSubmit={login}
                />
                <div className="forgot-password">Forgot your password?<a className="link">Reset it</a></div>
              </div>
            </div>
          </div>
        </div>
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