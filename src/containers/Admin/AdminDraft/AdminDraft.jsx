import { finishAction, getDraftStart, startAction } from 'actions/admin';
import { DraftCard, MapCard } from 'components/admin';
import { Button, LoadingSpinner, TabMenu } from 'components/shared';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import ActionsPanel from './ActionsPanel/ActionsPanel';
import AdminConnectionsPanel from './AdminConnectionsPanel/AdminConnectionsPanel';
import AdminLinesPanel from './AdminLinesPanel/AdminLinesPanel';
import AdminStationsPanel from './AdminStationsPanel/AdminStationsPanel';

const tabHeaders = [
  {
    id: 'lines',
    name: 'Lines',
    icon: 'lines'
  },
  {
    id: 'stations',
    name: 'Stations',
    icon: 'tube-logo'
  },
  {
    id: 'connections',
    name: 'Connections',
    icon: 'connection'
  }
];

class AdminDraft extends React.Component {

  constructor(props) {
    super(props);
    this.closeActionPanel = this.closeActionPanel.bind(this);
    this.editDraft = this.editDraft.bind(this);
    this.deleteDraft = this.deleteDraft.bind(this);
  }

  componentDidMount() {
    const { match: { params }, getDraft } = this.props;
    if (params.draftId) {
      getDraft(params.draftId);
    }
  }

  closeActionPanel() {
    const { _finishAction } = this.props;
    _finishAction();
  }

  editDraft() {
    const { draft, _startAction } = this.props;
    _startAction('editDraft', { _id: draft._id, name: draft.name, description: draft.description });
  }

  deleteDraft() {
    const { draft, _startAction } = this.props;
    _startAction('deleteDraft', { _id: draft._id, name: draft.name });
  }

  render() {
    const { action, actionObj, actionPanelInitiated, draft, loading } = this.props;

    return (
      <div className="admin-user-container">
        <div className="container">
          {draft && (
            <React.Fragment>
              <h1 className="right-line mb-1">{draft.name}</h1>
              <h5 className="mb-4">{draft.description}</h5>
              <div className="row">
                <div className="col-lg-3">
                  <div>
                    <LoadingSpinner
                      noSpinner
                      loading={action && !loading}
                      className="pr-30"
                    />
                    <DraftCard
                      lines={draft.lines.length}
                      stations={draft.stations.length}
                      town={draft.town}
                      type={draft.isPublished ? 'published' : 'draft'}
                    />
                    <MapCard
                      center={draft.town.center}
                      zoom={3}
                      className="mt-20"
                    />
                    <Button
                      color="secondary"
                      text="View draft on map"
                      block
                      outline
                      className="mt-20"
                      icon="map"
                    />
                    <Button
                      color="secondary"
                      text="Request publication"
                      block
                      outline
                      icon="publish"
                    />
                    <Button
                      color="secondary"
                      text="Edit draft"
                      block
                      outline
                      icon="edit"
                      onClick={this.editDraft}
                    />
                    <Button
                      color="danger"
                      text="Delete draft"
                      block
                      outline
                      className="mt-20"
                      icon="delete"
                      onClick={this.deleteDraft}
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <LoadingSpinner
                    noSpinner
                    loading={action && !loading}
                    className="pr-30"
                  />
                  <TabMenu
                    type="secondary"
                    tabs={tabHeaders}
                  >
                    <AdminLinesPanel lines={draft.lines} />
                    <AdminStationsPanel stations={draft.stations} />
                    <AdminConnectionsPanel connections={draft.connections} />
                  </TabMenu>
                </div>
                <div className="col-lg-3">
                  {actionPanelInitiated && <ActionsPanel action={action} actionObj={actionObj} onCancel={this.closeActionPanel} />}
                </div>
              </div>
            </React.Fragment>)}
        </div>
      </div>
    )
  }
};

const mapStateToProps = state => {
  return {
    loading: state.admin.loading,
    actionPanelInitiated: state.admin.actionPanelInitiated,
    action: state.admin.action,
    actionObj: state.admin.actionObj,
    draft: state.admin.draft
  };
};

const mapDispatchToProps = dispatch => {
  return {
    _startAction: (actionName, actionObj) => dispatch(startAction(actionName, actionObj)),
    _finishAction: () => dispatch(finishAction()),
    getDraft: (draftId) => dispatch(getDraftStart(draftId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AdminDraft));