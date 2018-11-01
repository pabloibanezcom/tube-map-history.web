import React from 'react';

const toggle = (props) => {

  const handleChange = (event) => {
    props.onToggle(event.target.checked);
  }

  return <div className={`togglebutton ${props.styleType === 'secondary' ? 'secondary' : 'primary'}`} >
    <label> {props.label} <input type="checkbox" defaultChecked={props.value} onChange={handleChange} /><span className="toggle"></span></label>
  </div>
}

export default toggle;