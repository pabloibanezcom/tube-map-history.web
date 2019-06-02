import { Modal } from 'components/shared';
import React from 'react';
import * as actionsConfig from './actions.config.json';
import elementInfo from './element-info/element-info';
import formData from './form-data/form-data';

const actionDialog = (props) => {

  let content;
  const { action, element, onClose } = props;

  // const handleValidSubmit = (_formData) => {
  //   props.onClose();
  //   props.onSuccess(
  //     actionsConfig[props.action].action,
  //     transformers.fromForm[props.action] ? transformers.fromForm[props.action](_formData, props.element, props.otherData) : null
  //   );
  // }

  const handleConfirmation = () => {
    props.onClose();
    props.onSuccess(
      actionsConfig[props.action].action,
      props.element
    );
  }

  const generateFormContent = () => {

    return null;

    // return <Form
    //   formElements={formData[action]}
    //   obj={transformers.toForm[action] ? transformers.toForm[action](element, otherData) : element}
    //   onValidSubmit={handleValidSubmit}
    // />
  }

  const generateDeleteContent = () => {
    const ElementInfo = elementInfo.DELETE_STATION;
    return (
      <div className="delete-content">
        <div className="delete-question">{formData[action].question}</div>
        <ElementInfo element={element} />
        <div className="delete-buttons">
          <button type="button" className="btn btn-danger" onClick={handleConfirmation}>Yes</button>
          <button type="button" className="btn btn-raised btn-secondary" onClick={onClose}>No</button>
        </div>
      </div>
    )
  }

  if (actionsConfig[action]) {
    content = actionsConfig[props.action].type === 'DELETE' ? generateDeleteContent() : generateFormContent();
  } else {
    content = null;
  }

  return (
    <div>
      {actionsConfig[action] ? <Modal
        show={action}
        onClose={onClose}
        header={actionsConfig[action].title}
        content={content}
      /> : null}
    </div>
  )
}

export default actionDialog;