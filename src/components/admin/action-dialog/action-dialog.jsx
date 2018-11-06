import React from 'react';
import Form from '../../form/form';
import Modal from '../../UI/modal/modal';
import * as actionsConfig from './actions.config.json';
import formData from './form-data/form-data';
import transformers from './transformers/transformers';

const actionDialog = (props) => {

  const handleValidSubmit = (formData) => {
    props.onClose();
    props.onSuccess(
      actionsConfig[props.action].action,
      transformers.fromForm[props.action] ? transformers.fromForm[props.action](formData, props.element, props.otherData) : null
    );
  }

  const content = <Form
    formElements={formData[props.action]}
    obj={transformers.toForm[props.action] ? transformers.toForm[props.action](props.element, props.otherData) : props.element}
    onValidSubmit={handleValidSubmit}
  />;

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