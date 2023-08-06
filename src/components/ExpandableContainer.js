import React, { useState } from 'react';

const ExpandableContainer = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleClose = () => {
    setIsExpanded(false);
  };

  return (
    <div className="expandable-container">
      <div className="expandable-header" onClick={handleToggle}>
        {isExpanded ? null : props.title}
        <span className={isExpanded ? 'arrow arrow-expanded' : 'arrow'}></span>
      </div>
      {isExpanded && (
        <div className="expandable-content">
          {props.children}
          <button onClick={handleClose}>Close</button>
        </div>
      )}
    </div>
  );
};

export default ExpandableContainer;
