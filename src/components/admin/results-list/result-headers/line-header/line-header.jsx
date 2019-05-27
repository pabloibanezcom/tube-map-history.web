import React from 'react';

const linePanel = (props) => {
  const { result } = props;
  return (
    <div className="line-header">
      <span>
        {/* <FontAwesomeIcon icon="route" /> */}
        {result.name}
      </span>
    </div>
  )
}

export default linePanel;