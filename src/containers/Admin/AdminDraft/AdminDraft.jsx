import { DraftCard, MapCard } from 'components/admin';
import { Button, LoadingSpinner, TabMenu } from 'components/shared';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { finishAction, getDraftStart, startAction } from 'store/admin/actions';
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
    this.importDraft = this.importDraft.bind(this);
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

  importDraft() {
    const { draft, _startAction } = this.props;
    _startAction('importDraft', { _id: draft._id });
  }

  render() {
    const { match: { params }, action, actionObj, actionPanelInitiated, draft, loading, loadingElements } = this.props;
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
                      lines={draft.linesAmount}
                      stations={draft.stationsAmount}
                      town={draft.town}
                      type={draft.isPublished ? 'published' : 'draft'}
                    />
                    <MapCard
                      center={draft.town.center}
                      zoom={3}
                      marker={draft.town.url}
                      className="mt-20"
                      disableMap
                    />
                    <Button
                      color="secondary"
                      text="View draft on map"
                      block
                      outline
                      className="mt-20"
                      icon="map"
                      href={`/draft/${draft._id}/2019`}
                      newPage
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
                      color="secondary"
                      text="Import draft"
                      block
                      outline
                      className="mt-20"
                      icon="upload"
                      onClick={this.importDraft}
                    />
                    <Button
                      color="secondary"
                      text="Export draft"
                      block
                      outline
                      icon="download"
                      href={`${process.env.REACT_APP_ADMIN_API_URL}/generation/export/draft/${draft.exportId}`}
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
                    loading={(action && !loading) || loadingElements}
                    className="pr-30"
                  />
                  <TabMenu
                    type="secondary"
                    tabs={tabHeaders}
                    activeTab={params.tab || 'lines'}
                  >
                    <AdminLinesPanel />
                    <AdminStationsPanel />
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
    loadingElements: state.admin.loadingElements,
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