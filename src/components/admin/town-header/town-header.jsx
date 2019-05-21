import React from 'react';

const townHeader = (props) => {

  const { town } = props;

  return (
    <div className="town-header">
      <div className="card">
        <div>
          <h3 className="left town-name">{town.name}</h3>
          <a href={`${process.env.REACT_APP_API_URL}/generation/export/${town.url}`} className="btn btn-sm btn-raised btn-primary right"><i className="zmdi zmdi-download" /> Download data</a>
          <a href="" onClick={e => { e.preventDefault(); props.onShowDialog('UPLOAD_TOWN_DATA'); }} className="btn btn-sm btn-raised btn-secondary right mr-10"><i className="zmdi zmdi-upload" /> Upload data</a>
          <div className="clearfix" />
        </div>
      </div>
    </div>
  )
}

export default townHeader;