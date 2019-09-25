import PropTypes from 'prop-types';
import React from 'react';

const collapse = ({ active, color, content, header, onSelected, selectionId }) => {
  return (
    <div className={`card card-code card-${color} ${active ? 'active' : ''}`}>
      <div className="card-header card-code-header" role="tab" id="codeHead1">
        <h4 className="panel-title card-code-title">
          <a
            onClick={() => {
              onSelected(selectionId);
            }}
            className={`withripple ${active ? 'collapsed' : ''}`}
          >
            {header}
          </a>
        </h4>
      </div>
      <div className={`card-collapse collapse ${active ? 'show' : ''}`}>{content}</div>
    </div>
  );
};

collapse.defaultProps = {
  active: false,
  color: 'plain',
  content: null,
  header: null,
  selectionId: PropTypes.string,
  onSelected: () => {}
};

collapse.propTypes = {
  active: PropTypes.bool,
  color: PropTypes.oneOf(['plain', 'primary', 'secondary']),
  content: PropTypes.element,
  header: PropTypes.element,
  selectionId: PropTypes.string,
  onSelected: PropTypes.func
};

export default collapse;
