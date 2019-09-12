import { DraftCard, NoResultsBox, TownCard, UserPicture } from 'components/admin';
import { Button, CountryLabel, Slider } from 'components/shared';
import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import { clearDraft, getTownsStart } from 'store/admin/actions';
import { showDate } from 'util/date';

class AdminHome extends React.Component {

  componentDidMount() {
    const { _clearDraft, getTowns } = this.props;
    _clearDraft();
    getTowns();
  }

  render() {
    const { user, towns } = this.props;
    return (
      <div className="admin-user-container">
        <div className="container">
          <h1 className="right-line mb-4">Admin</h1>
          {user && (
            <div className="row">
              <div className="col-lg-3">
                <div className="card">
                  <div className="ms-hero-bg-primary ms-hero-img-coffee">
                    <h3 className="color-white index-1 text-center no-m pt-4">{user.firstName} {user.lastName}</h3>
                    <div className="color-medium index-1 text-center np-m">{user.type}</div>
                    <UserPicture
                      user={user}
                    />
                  </div>
                  <div className="card-body mt-20 pt-4 text-center">
                    <CountryLabel country={user.country} />
                    <p className="mt-20">Manager since: {showDate(user.registrationDate)}</p>
                  </div>
                </div>
                <Button
                  color="secondary"
                  text="Edit user"
                  block
                  outline
                />
              </div>
              <div className="col-lg-9">
                {user && user.drafts && (
                  <div className="mb-20">
                    <h3 className="mb-10">Your published drafts ({user.drafts.filter(d => d.isPublished).length})</h3>
                    <Slider items={3}>
                      {user.drafts.filter(d => d.isPublished).map(draft => (
                        <div className="pr-15" key={draft._id}>
                          <Link to={`/admin/draft/${draft._id}`}>
                            <DraftCard
                              lines={draft.linesAmount}
                              stations={draft.stationsAmount}
                              town={draft.town}
                              type="published"
                            />
                          </Link>
                        </div>)
                      )}
                      {!user.drafts.length && <NoResultsBox className="ml-15" noDrafts={!user.drafts.legnth} />}
                    </Slider>
                  </div>
                )}
                {user && user.drafts && (
                  <div className="mb-20">
                    <div className="flex flex-space-between">
                      <h3 className="mb-10">Your other drafts ({user.drafts.filter(d => !d.isPublished).length})</h3>
                      <Button
                        type="link"
                        text="Create new draft"
                        icon="add"
                        color="secondary"
                        size="lg"
                        to="/admin/create-draft"
                      />
                    </div>
                    <Slider items={4}>
                      {user.drafts.filter(d => !d.isPublished).map(draft => (
                        <div className="pr-15" key={draft._id}>
                          <Link to={`/admin/draft/${draft._id}`}>
                            <DraftCard
                              lines={draft.linesAmount}
                              stations={draft.stationsAmount}
                              town={draft.town}
                              type="draft"
                            />
                          </Link>
                        </div>)
                      )}
                      {!user.drafts.length && <NoResultsBox className="ml-15" />}
                    </Slider>
                  </div>
                )}
                {towns && (
                  <div className="mb-20">
                    <h3 className="mb-10">All towns ({towns.length})</h3>
                    <Slider items={4}>
                      {towns.map(town => <div className="pr-15" key={town._id}><a href={`/admin/town/${town.url}`}><TownCard town={town} /></a></div>)}
                    </Slider>
                  </div>
                )}
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
    loading: state.admin.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    _clearDraft: () => dispatch(clearDraft()),
    getTowns: () => dispatch(getTownsStart()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AdminHome));