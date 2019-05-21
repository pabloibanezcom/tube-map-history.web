import * as actions from 'actions/auth';
import { Form } from 'components/shared';
import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import formElements from './form-data/signup';

class Signup extends React.Component {

  handleSubmit(formData) {
    const { signup } = this.props;
    if (formData.password === formData.confirmPassword) {
      signup();
    }
  }

  render() {
    const { signup } = this.props;

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
                    <span className="active">Signup</span>
                    <Link to="/login">Login</Link>
                  </div>
                </div>
                <Form
                  mode="dark"
                  formElements={formElements}
                  onValidSubmit={signup}
                />
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
    signup: (formData) => dispatch(actions.signUpStart(formData.email, formData.password, formData.name))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Signup));