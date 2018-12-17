import React from 'react';

const collapse = (props) => {

  return <div className={`card card-code card-${props.type ? props.type : 'default'} ${props.active ? 'active' : ''}`}>
    <div className="card-header card-code-header" role="tab" id="codeHead1">
      <h4 className="panel-title card-code-title">
        <a onClick={() => { props.onSelected(props.selectionId) }} className={`withripple ${props.active ? 'collapsed' : ''}`}>
          {props.header}
        </a>
      </h4>
    </div>
    <div className={`card-collapse collapse ${props.active ? 'show' : ''}`}>
      {props.content}
    </div>
  </div>
}

export default collapse