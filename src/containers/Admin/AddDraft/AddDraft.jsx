import { addDraftStart, getTownsStart } from 'actions/admin';
import { AddDraftForm } from 'components/admin/forms';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";

class AddDraft extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(formData) {
    const { addDraft } = this.props;
    addDraft(formData.town._id, { name: formData.name, description: formData.description });
  }

  render() {
    const { towns, getTowns } = this.props;
    if (!towns) {
      getTowns();
    }

    return (
      <div className="admin-user-container">
        <div className="container">
          <h1 className="right-line mb-4">Create draft</h1>
          <div className="row">
            <div className="col-lg-3">
              {towns && (
                <AddDraftForm
                  towns={towns}
                  onSubmit={this.handleSubmit}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    towns: state.admin.towns
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getTowns: () => dispatch(getTownsStart()),
    addDraft: (town, draft) => dispatch(addDraftStart(town, draft))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddDraft));