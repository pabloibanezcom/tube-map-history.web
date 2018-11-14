import React from 'react';
import Form from '../../form/form';
import Modal from '../../UI/modal/modal';
import * as actionsConfig from './actions.config.json';
import elementInfo from './element-info/element-info';
import formData from './form-data/form-data';
import transformers from './transformers/transformers';

const actionDialog = (props) => {

  let content;

  const handleValidSubmit = (formData) => {
    props.onClose();
    props.onSuccess(
      actionsConfig[props.action].action,
      transformers.fromForm[props.action] ? transformers.fromForm[props.action](formData, props.element, props.otherData) : null
    );
  }

  const handleConfirmation = () => {
    props.onClose();
    props.onSuccess(
      actionsConfig[props.action].action,
      props.element
    );
  }

  const generateFormContent = () => {
    return <Form
      formElements={formData[props.action]}
      obj={transformers.toForm[props.action] ? transformers.toForm[props.action](props.element, props.otherData) : props.element}
      onValidSubmit={handleValidSubmit}
    />
  }

  const generateDeleteContent = () => {
    const ElementInfo = elementInfo.DELETE_STATION;
    return <div className="delete-content">
      <div className="delete-question">{formData[props.action].question}</div>
      <ElementInfo element={props.element} />
      <div className="delete-buttons">
        <button type="button" className="btn btn-danger" onClick={handleConfirmation} >Yes</button>
        <button type="button" className="btn btn-raised btn-secondary" onClick={props.onClose}>No</button>
      </div>
    </div>
  }

  if (actionsConfig[props.action]) {
    content = actionsConfig[props.action].type === 'DELETE' ? generateDeleteContent() : generateFormContent();
  } else {
    content = null;
  }

  return <div>
    {actionsConfig[props.action] ? <Modal
      show={props.action}
      onClose={props.onClose}
      header={actionsConfig[props.action].title}
      content={content}
    /> : null}
  </div>
}

export default actionDialog;