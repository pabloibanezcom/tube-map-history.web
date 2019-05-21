import React from 'react';

const toggle = (props) => {

  const { label, styleType, value } = props;

  const handleChange = (event) => {
    props.onToggle(event.target.checked);
  }

  return (
    <div className={`togglebutton ${styleType === 'secondary' ? 'secondary' : 'primary'}`}>
      <label className="control-label"> {label} <input type="checkbox" defaultChecked={value} onChange={handleChange} /><span className="toggle" /></label>
    </div>
  )
}

export default toggle;