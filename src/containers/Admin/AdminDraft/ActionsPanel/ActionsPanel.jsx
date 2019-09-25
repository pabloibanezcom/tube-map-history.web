import {
  AddConnectionForm,
  AddLineForm,
  AddStationForm,
  DeleteConnectionForm,
  DeleteDraftForm,
  DeleteLineForm,
  DeleteStationForm,
  EditConnectionForm,
  EditDraftForm,
  EditLineForm,
  EditStationForm,
  ImportDraftForm
} from 'components/admin/forms';
import { Panel } from 'components/shared';
import React from 'react';
import { connect } from 'react-redux';
import {
  addConnectionStart,
  addLineStart,
  addStationStart,
  deleteConnectionStart,
  deleteDraftStart,
  deleteLineStart,
  deleteStationStart,
  importDraftStart,
  updateConnectionStart,
  updateDraftStart,
  updateLineStart,
  updateStationStart
} from 'store/admin/actions';

const actions = {
  editDraft: {
    header: 'Edit draft',
    form: EditDraftForm
  },
  deleteDraft: {
    header: 'Delete draft',
    form: DeleteDraftForm
  },
  addLine: {
    header: 'Add line',
    form: AddLineForm
  },
  editLine: {
    header: 'Edit line',
    form: EditLineForm
  },
  deleteLine: {
    header: 'Delete line',
    form: DeleteLineForm
  },
  addStation: {
    header: 'Add station',
    form: AddStationForm
  },
  editStation: {
    header: 'Edit station',
    form: EditStationForm
  },
  deleteStation: {
    header: 'Delete station',
    form: DeleteStationForm
  },
  addConnection: {
    header: 'Add connection',
    form: AddConnectionForm
  },
  editConnection: {
    header: 'Edit connection',
    form: EditConnectionForm
  },
  deleteConnection: {
    header: 'Delete connection',
    form: DeleteConnectionForm
  },
  importDraft: {
    header: 'Import draft',
    form: ImportDraftForm
  }
};

class ActionsPanel extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(formData) {
    const {
      action,
      updateDraft,
      deleteDraft,
      addLine,
      updateLine,
      deleteLine,
      addStation,
      updateStation,
      deleteStation,
      addConnection,
      updateConnection,
      deleteConnection,
      importDraft
    } = this.props;
    if (action === 'editDraft') {
      updateDraft(formData);
    }
    if (action === 'deleteDraft') {
      deleteDraft(formData);
    }
    if (action === 'addLine') {
      addLine(formData);
    }
    if (action === 'editLine') {
      updateLine(formData);
    }
    if (action === 'deleteLine') {
      deleteLine(formData);
    }
    if (action === 'addStation') {
      addStation(formData);
    }
    if (action === 'editStation') {
      updateStation(formData);
    }
    if (action === 'deleteStation') {
      deleteStation(formData);
    }
    if (action === 'addConnection') {
      addConnection(formData);
    }
    if (action === 'editConnection') {
      updateConnection(formData);
    }
    if (action === 'deleteConnection') {
      deleteConnection(formData);
    }
    if (action === 'importDraft') {
      importDraft(formData._id, formData.file);
    }
  }

  render() {
    const { draft, action, actionObj, onCancel } = this.props;
    const ActionForm = action ? actions[action].form : null;
    return (
      <Panel
        header={action ? actions[action].header : 'Action'}
        headerColor="secondary"
        className={`animated ${action ? 'zoomIn' : 'zoomOut'} animated-3x`}
      >
        {action && (
          <ActionForm
            draftId={draft._id}
            actionObj={actionObj}
            onSubmit={this.handleSubmit}
            onCancel={onCancel}
          />
        )}
      </Panel>
    );
  }
}

const mapStateToProps = state => {
  return {
    draft: state.admin.draft
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateDraft: draft => dispatch(updateDraftStart(draft)),
    deleteDraft: draftId => dispatch(deleteDraftStart(draftId)),
    addLine: line => dispatch(addLineStart(line)),
    updateLine: line => dispatch(updateLineStart(line)),
    deleteLine: lineId => dispatch(deleteLineStart(lineId)),
    addStation: station => dispatch(addStationStart(station)),
    updateStation: station => dispatch(updateStationStart(station)),
    deleteStation: stationId => dispatch(deleteStationStart(stationId)),
    addConnection: connection => dispatch(addConnectionStart(connection)),
    updateConnection: connection => dispatch(updateConnectionStart(connection)),
    deleteConnection: connectionId => dispatch(deleteConnectionStart(connectionId)),
    importDraft: (draftId, file) => dispatch(importDraftStart(draftId, file))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActionsPanel);
