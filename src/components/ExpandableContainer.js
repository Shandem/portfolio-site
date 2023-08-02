import React, { useState } from 'react';

const ExpandableContainer = (props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return React.createElement(
    'div',
    { className: 'expandable-container' },
    React.createElement(
      'div',
      { className: 'expandable-header', onClick: handleToggle },
      props.title,
      React.createElement('span', {
        className: isExpanded ? 'arrow arrow-expanded' : 'arrow',
      })
    ),
    isExpanded && React.createElement('div', { className: 'expandable-content' }, props.children)
  );
};

export default ExpandableContainer;
