import { deleteDraftStart, updateDraftStart } from 'actions/admin';
import { DeleteDraftForm, EditDraftForm } from 'components/admin/forms';
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
  }
}

class ActionsPanel extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(formData) {
    const { action, updateDraft, deleteDraft } = this.props;
    if (action === 'editDraft') {
      updateDraft(formData);
    }
    if (action === 'deleteDraft') {
      deleteDraft(formData);
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
    deleteDraft: (draftId) => dispatch(deleteDraftStart(draftId))
  }
};

export default connect(null, mapDispatchToProps)(ActionsPanel);