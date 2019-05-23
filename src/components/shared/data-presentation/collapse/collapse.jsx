import React from 'react';

const collapse = (props) => {

  const { active, content, header, type } = props;

  return (
    <div className={`card card-code card-${type || 'default'} ${active ? 'active' : ''}`}>
      <div className="card-header card-code-header" role="tab" id="codeHead1">
        <h4 className="panel-title card-code-title">
          <a onClick={() => { props.onSelected(props.selectionId) }} className={`withripple ${active ? 'collapsed' : ''}`}>
            {header}
          </a>
        </h4>
      </div>
      <div className={`card-collapse collapse ${active ? 'show' : ''}`}>
        {content}
      </div>
    </div>
  )
}

export default collapse