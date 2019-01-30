import React from 'react';
import { withRouter } from "react-router-dom";
import Header from '../../components/UI/header/header';

class Login extends React.Component {
  render() {
    return <div className="login-container">
      <Header optionsName="admin" />
      <div className="hero"></div>
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-lg-6">
            <div class="card card-hero card-primary animated fadeInUp animation-delay-7">
              <div class="card-body">
                <h2 class="color-primary text-center">Login</h2></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  }
}

export default withRouter(Login);