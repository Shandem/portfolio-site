import React, { useState } from 'react';


const ExpandableContainer = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleClose = () => {
    setIsExpanded(false);
  };
  function ConcatenateStrings(props) {
    const { firstString, middleString, lastString } = {...props}
    const concatenatedString = (
      <>
        {firstString}
        <span style={{ color: 'red' }}> { middleString}</span>
        {lastString}
      </>
    );
  
    return <div>{concatenatedString}</div>;
  }

  return (
    <div className="expandable-container">
      <div className="expandable-header" onClick={handleToggle}>
        {isExpanded ? null :< ConcatenateStrings firstString={props.title} middleString={props.clickHere} lastString={props.title2}/>}
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
