import React from 'react';

function Button(props) {
  return (
    <div>
      {props.title || 'Button'}
    </div>
  );
}

export default Button;
