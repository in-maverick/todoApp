import React from 'react';

function Button({ name, variant, className, ...rest }) {
  return (
    <button className={`btn btn-${variant} ${className}`} {...rest}>
      {name}
    </button>
  );
}

export default Button;
