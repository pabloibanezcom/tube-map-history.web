import * as actions from 'actions/auth';
import Form from 'components/form/form';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

const formElements = {
  login: require('./form-data/login.json'),
  signup: require('./form-data/signup.json')
};

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: 'login'
    };
    this.changeMode = this.changeMode.bind(this);
  }

  changeMode(mode) {
    this.setState({ mode: mode });
  }

  render() {
    const { mode } = this.state;
    const { login } = this.props;

    return <div className="login-container bg-full-page">
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
                  <a onClick={() => this.changeMode('signup')} className={`${mode === 'signup' ? 'active' : ''}`} >Signup</a>
                  <a onClick={() => this.changeMode('login')} className={`${mode === 'login' ? 'active' : ''}`} >Login</a>
                </div>
              </div>
              {mode === 'signup' && <Form mode="dark" formElements={formElements.signup} />}
              {mode === 'login' && (
                <React.Fragment>
                  <div className="social-login-header">Login with</div>
                  <div className="social-login-buttons">
                    <div><button type="submit" className="btn btn-sm btn-raised btn-google btn-block"><i className="zmdi zmdi-google"></i><span>Google</span></button></div>
                    <div><button type="submit" className="btn btn-sm btn-raised btn-facebook btn-block"><i className="zmdi zmdi-facebook"></i><span>Facebook</span></button></div>
                    <div><button type="submit" className="btn btn-sm btn-raised btn-twitter btn-block"><i className="zmdi zmdi-twitter"></i><span>Twitter</span></button></div>
                  </div>
                  <div className="email-login-header">or</div>
                  <Form
                    mode="dark"
                    formElements={formElements.login}
                    onValidSubmit={login}
                  />
                  <div className="forgot-password">Forgot your password?<a className="link">Reset it</a></div>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (formData) => dispatch(actions.loginStart(formData.email, formData.password)),
    signup: (formData) => dispatch(actions.signUpStart(formData.email, formData.password, formData.name)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));