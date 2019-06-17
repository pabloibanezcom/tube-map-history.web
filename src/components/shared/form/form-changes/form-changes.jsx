import { Button, Icon } from 'components/shared';
import PropTypes from 'prop-types';
import React from 'react';

const formChanges = (props) => {
  const { initialValues, formData, title, nonChangesTitle, onCancel, onGoBack, onConfirm } = props;
  const modifiedData = Object.keys(formData)
    .map(key => { return { before: initialValues[key], after: formData[key] } })
    .filter(e => e.before !== e.after);

  return (
    <div className="form-changes">
      {Boolean(!modifiedData.length) && (
        <div>
          <h4 className="mb-20">{nonChangesTitle}</h4>
          <div className="row">
            <div className="col-lg-6">
              <Button
                color="secondary"
                inverse
                block
                text="Yes"
                onClick={onGoBack}
              />
            </div>
            <div className="col-lg-6">
              <Button
                color="light"
                text="Cancel"
                block
                onClick={onCancel}
              />
            </div>
          </div>
        </div>
      )}
      {Boolean(modifiedData.length) && (
        <div>
          <h4 className="mb-20">{title}</h4>
          <div className="mb-40">
            {modifiedData.map((md, i) => {
              return (
                <div key={i} className="d-flex justify-content-between align-items-center">
                  <div className="form-changes-before">{md.before}</div>
                  <Icon
                    name="long-arrow-right"
                    color="secondary"
                  />
                  <div className="form-changes-after">{md.after}</div>
                </div>
              )
            })}
          </div>
          <div className="row">
            <div className="col-lg-6">
              <Button
                color="secondary"
                inverse
                text="Yes"
                onClick={onConfirm}
              />
            </div>
            <div className="col-lg-6">
              <Button
                color="light"
                text="No"
                onClick={onCancel}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

formChanges.defaultProps = {
  initialValues: null,
  formData: null,
  title: '',
  nonChangesTitle: '',
  onGoBack: () => { }
};

formChanges.propTypes = {
  initialValues: PropTypes.object,
  formData: PropTypes.object,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  nonChangesTitle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  onGoBack: PropTypes.func
};

export default formChanges;