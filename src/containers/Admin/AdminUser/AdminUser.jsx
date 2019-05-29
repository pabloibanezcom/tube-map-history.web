import * as actions from 'actions/admin';
import { TownContent, TownHeader } from 'components/admin/custom-collapse';
import UserPicture from 'components/admin/user/user-picture/user-picture';
import { CollapseList, Icon } from 'components/shared';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { townInUser } from 'shared/user';

class AdminUser extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTownId: null
    };
    this.handleActiveTownChange = this.handleActiveTownChange.bind(this);
  }

  componentDidMount() {
    const { getUser, getTowns } = this.props;
    getUser();
    getTowns();
  }

  getUserPicture = () => {
    const { user } = this.props;
    if (user && user.photo) {
      return <img src="assets/img/demo/avatar1.jpg" alt="..." className="img-avatar-circle" />
    }
    return <div className="img-avatar-circle user-img">JA</div>
  }

  /* eslint-disable-next-line class-methods-use-this */
  handleCountryChange(country) {
    console.log(country);
  }

  handleActiveTownChange(townId) {
    this.setState({ activeTownId: townId });
  }

  render() {
    const { user, towns, town, getTown } = this.props;
    const { activeTownId } = this.state;
    return (
      <div className="admin-user-container">
        <div className="container">
          <h1 className="right-line mb-4">Admin User</h1>
          {user && (
            <div className="row">
              <div className="col-lg-4">
                <div className="card">
                  <div className="ms-hero-bg-primary ms-hero-img-coffee">
                    <h3 className="color-white index-1 text-center no-m pt-4">{user.firstName} {user.lastName}</h3>
                    <div className="color-medium index-1 text-center np-m">{user.type}</div>
                    <UserPicture
                      user={user}
                    />
                  </div>
                  <div className="card-body pt-4 text-center">
                    <h3 className="color-primary">Bio</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur alter adipisicing elit. Facilis, natuse inse voluptates officia repudiandae beatae magni es magnam autem molestias.</p>
                    <a className="btn-circle btn-circle-raised btn-circle-xs mt-1 mr-1 no-mr-md btn-facebook"><Icon name="facebook" /></a>
                    <a className="btn-circle btn-circle-raised btn-circle-xs mt-1 mr-1 no-mr-md btn-twitter"><Icon name="twitter" /></a>
                    <a className="btn-circle btn-circle-raised btn-circle-xs mt-1 mr-1 no-mr-md btn-instagram"><Icon name="instagram" /></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <CollapseList
                  type="secondary"
                  elements={towns.filter(t => townInUser(t, user))}
                  header={TownHeader}
                  content={TownContent}
                  activeElementContent={town}
                  onElementSelected={getTown}
                  externalActiveElementId={activeTownId}
                  onActiveElementChanged={this.handleActiveTownChange}
                />
                <CollapseList
                  elements={towns.filter(t => !townInUser(t, user))}
                  header={TownHeader}
                  content={TownContent}
                  activeElementContent={town}
                  onElementSelected={getTown}
                  externalActiveElementId={activeTownId}
                  onActiveElementChanged={this.handleActiveTownChange}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    user: state.admin.user,
    towns: state.admin.towns,
    town: state.admin.town,
    loading: state.admin.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: () => dispatch(actions.getUserStart()),
    getTowns: () => dispatch(actions.getTownsStart()),
    getTown: (townId) => dispatch(actions.getTownStart(townId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AdminUser));