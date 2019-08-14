import { addLineStart, addStationStart, deleteDraftStart, deleteLineStart, deleteStationStart, updateDraftStart, updateLineStart, updateStationStart } from 'actions/admin';
import { AddLineForm, AddStationForm, DeleteDraftForm, DeleteLineForm, DeleteStationForm, EditDraftForm, EditLineForm, EditStationForm } from 'components/admin/forms';
import { Panel } from 'components/shared';
import React from 'react';
import { connect } from 'react-redux';

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
  }
  ,
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
  }
}

class ActionsPanel extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(formData) {
    const { action, updateDraft, deleteDraft, addLine, updateLine, deleteLine, addStation, updateStation, deleteStation } = this.props;
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
  }

  render() {
    const { action, actionObj, onCancel } = this.props;
    const ActionForm = action ? actions[action].form : null;
    return (
      <Panel
        header={action ? actions[action].header : 'Action'}
        headerColor="secondary"
        className={`animated ${action ? 'zoomIn' : 'zoomOut'} animated-3x`}
      >
        {action && <ActionForm actionObj={actionObj} onSubmit={this.handleSubmit} onCancel={onCancel} />}
      </Panel>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateDraft: (draft) => dispatch(updateDraftStart(draft)),
    deleteDraft: (draftId) => dispatch(deleteDraftStart(draftId)),
    addLine: (line) => dispatch(addLineStart(line)),
    updateLine: (line) => dispatch(updateLineStart(line)),
    deleteLine: (lineId) => dispatch(deleteLineStart(lineId)),
    addStation: (station) => dispatch(addStationStart(station)),
    updateStation: (station) => dispatch(updateStationStart(station)),
    deleteStation: (stationId) => dispatch(deleteStationStart(stationId))
  }
};

export default connect(null, mapDispatchToProps)(ActionsPanel);